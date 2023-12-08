import Map from "@/map/Map";
import MetricTable from "@/app/components/table/MetricTable";

import prisma from "@/lib/prisma";

export default async function Page() {
    const metrics = await prisma.metric.findMany({})
    return <>
        <Map/>
        <MetricTable data={metrics}/>
    </>
}
