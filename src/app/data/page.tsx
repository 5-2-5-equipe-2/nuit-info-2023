import Map from "@/map/Map";
import MetricTable from "@/app/components/table/MetricTable";

import prisma from "@/lib/prisma";
import DeviceTable from "@/app/components/table/DeviceTable";

export default async function Page() {
    const metrics = await prisma.metric.findMany({})
    const devices = await prisma.device.findMany({})
    return <>
        <div className={"w-3/4 mx-auto"}>
            <div className={"flex h-96 mb-5"}>
                <Map
                    data={metrics}
                />
            </div>
            <div className={"flex"}>
                <DeviceTable data={devices}/>
            </div>
            <div className={"flex"}>
                <MetricTable data={metrics}/>
            </div>
        </div>
    </>
}
