import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('@/map/DynamicMap'), {
    ssr: false
});

export default function Map() {
    return <>
        <DynamicMap/>
    </>

}