import Map from "@/map/Map";
import MetricTable from "@/app/components/table/MetricTable";

import prisma from "@/lib/prisma";
import DeviceTable from "@/app/components/table/DeviceTable";


export const dynamic = 'force-dynamic';
export default async function Page() {
    const metrics = await prisma.metric.findMany({})
    const devices = await prisma.device.findMany({})
    return <>
        <Map
            data={metrics}
        />
        <MetricTable data={metrics}/>
        <DeviceTable data={devices}/>
    </>
}
