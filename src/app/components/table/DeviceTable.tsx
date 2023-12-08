import {Device} from "@prisma/client"

export default function DeviceTable(DeviceTableProps: {
    data: Device[]
}) {

    return (
        <>
            <div className={"flex flex-col w-full mb-5"}>
                <h1 className={"text-2xl mb5"}>Devices</h1>
                <div className={"w-full h-full grid grid-cols-3"}>
                    {DeviceTableProps.data.map((device) => (
                        <div key={device.id} className="card bg-secondary-content shadow-xl m-1">
                            <div className="card-body">
                                <h2 className="card-title">
                                    {device.name}
                                    <div className="badge badge-secondary">{device.id}</div>
                                </h2>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">{device.type}</div>
                                </div>
                            </div>
                        </div>)
                    )}
                </div>
            </div>
        </>
    )

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