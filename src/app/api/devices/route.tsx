import {z} from "zod";
import prisma from "@/lib/prisma";
import {NextResponse, NextRequest} from "next/server";

export const dynamic = 'force-dynamic' // defaults to force-static

const deviceObject = z.object({
    type: z.string(),
    name: z.string(),
});


export async function GET(request: NextRequest
) {

    const devices = await prisma.device.findMany({
        where: {
            name: {
                equals: request.nextUrl.searchParams.get('name') || undefined,
            }
        }
    })
    return NextResponse.json(devices);
}

export async function POST(request: Request) {
    // get json body
    const body = await request.json()


    const device = deviceObject.parse(body)

    // save to db
    await prisma.device.create({
        data: {
            type: device.type,
            name: device.name,
        }
    })

    return NextResponse.json(device);
}