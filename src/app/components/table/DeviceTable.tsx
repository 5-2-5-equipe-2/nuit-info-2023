import {Device} from "@prisma/client"

export default function DeviceTable(DeviceTableProps: {
    data: Device[]
}) {
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>type</th>
                </tr>
                </thead>
                <tbody>
                {DeviceTableProps.data.map((device) => (
                    <tr key={device.id}>
                        <td>{device.id}</td>
                        <td>{device.name}</td>
                        <td>{device.type}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}