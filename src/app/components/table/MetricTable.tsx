import {Metric} from "@prisma/client"

export default function MetricTable(MetricTableProps: {
    data: Metric[]
}) {
    return (
        <div>
            <table className="table">
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
    )
}
