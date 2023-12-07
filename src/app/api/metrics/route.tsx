import {z} from "zod";
import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request) {
    const metrics = await prisma.metric.findMany({

    })


    return NextResponse.json(metrics);

}

const metricObject = z.object({
    device_id: z.number(),
    temperature: z.number(),
    humidity: z.number(),
    day: z.boolean(),
});

export async function POST(request: Request) {
    // get json body
    const body = await request.json()


    const metric = metricObject.parse(body)

    // save to db
    await prisma.metric.create({
        data: {
            deviceId: metric.device_id,
            temperature: metric.temperature,
            humidity: metric.humidity,
            day: metric.day,
        }
    })

    return NextResponse.json(metric);
}