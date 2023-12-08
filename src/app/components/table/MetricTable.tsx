import {Metric} from "@prisma/client"

export default function MetricTable(MetricTableProps: {
    data: Metric[]
}) {
    return (
        <>
            <div className={"flex flex-col w-full mb-5"}>
                <h1 className={"text-2xl mb-5"}>Metrics</h1>
                <div className={"w-full card shadow-xl"}>
                    <table className="table table-zebra">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>device_id</th>
                            <th>temperature</th>
                            <th>humidity</th>
                            <th>day</th>
                            <th>lat</th>
                            <th>lng</th>
                        </tr>
                        </thead>
                        <tbody>
                        {MetricTableProps.data.map((metric) => (
                            <tr key={metric.id}>
                                <td>{metric.id}</td>
                                <td>{metric.deviceId}</td>
                                <td>{metric.temperature}</td>
                                <td>{metric.humidity}</td>
                                <td>{metric.day}</td>
                                <td>{metric.lat}</td>
                                <td>{metric.lng}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
