import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma";
import {Adapter} from "next-auth/adapters";
const prismaAdapter = PrismaAdapter(prisma);

const MyAdapter: Adapter = {
    ...PrismaAdapter,
    linkAccount: (account) => {
        account["not_before_policy"] = account["not-before-policy"];
        delete account["not-before-policy"];
        // @ts-ignore
        return prismaAdapter.linkAccount(account);
    },
};
const handler = NextAuth({
    providers: [
        Keycloak({
            clientId: process.env.KEYCLOAK_CLIENT_ID ?? "",
            clientSecret: process.env.KEYCLOAK_CLIENT_SECRET ?? "",
            issuer: process.env.KEYCLOAK_ISSUER ?? "",
        }),
    ],
    secret: process.env.SECRET ?? "pewpewpew",
    adapter: MyAdapter
})

export {handler as GET, handler as POST}