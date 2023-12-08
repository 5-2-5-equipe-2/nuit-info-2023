import type {Metadata} from 'next'
import './globals.css'
import NavBar from "@/app/components/NavBar";
import {getServerSession} from "next-auth/next"
import {nextAuthOptions} from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
    title: 'CrowdEnv',
    description: 'Learn and contribute to better understand the world and the environment.',
}
export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="light">
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <title>
                {metadata.title}
            </title>
            <meta name="description" content={metadata.description}/>
        </head>
        <body className={"h-screen"}>
        <NavBar/>
        <main className={"md:container md:mx-auto"}>
            {children}
        </main>
        </body>
        </html>
    )
}
