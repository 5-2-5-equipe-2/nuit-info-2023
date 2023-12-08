import React from 'react'
import prisma from "@/lib/prisma";
import Quiz from "@/app/components/quiz/Quiz";

export default async function Page() {
    // verify id is a int
    let devices = await prisma.device.findMany(
        {
            include: {
                Metric: true
            }
        }
    );

    return (
        <>
            <div className={'grid grid-cols-3'}>
                {devices.map((device, i) => {
                    return <>
                        {device.name}
                    </>
                })}
            </div>
        </>
    )
}