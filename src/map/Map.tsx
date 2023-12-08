import dynamic from 'next/dynamic';
import {Metric} from "@prisma/client"

const DynamicMap = dynamic(() => import('@/map/DynamicMap'), {
    ssr: false
});

export default function Map(
    {
        data
    }: {
        data: Metric[]
    }
)  {
    return <>
        <DynamicMap data={data}/>
    </>

}
