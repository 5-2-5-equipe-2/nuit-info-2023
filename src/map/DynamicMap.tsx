"use client"
import {useEffect} from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet/dist/leaflet.css';


const {MapContainer} = ReactLeaflet;

import {Metric} from '@prisma/client';

const Map = (
    {
        data
    }: {
        data: Metric[]
    }
) => {

    return (
        <MapContainer
            // important to set this to some height otherwise the map won't be visible
            style={{minHeight: "500px"}}
            center={[51.505, -0.09]}
            zoom={13}
        >
            <ReactLeaflet.TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((metric: Metric) => (
                <ReactLeaflet.Marker position={[metric.lat, metric.lng]} key={metric.id}>
                    <ReactLeaflet.Popup>
                        <span>
                            {metric.id} {metric.deviceId} {metric.temperature} {metric.humidity} {metric.day} {metric.lat} {metric.lng}
                        </span>
                    </ReactLeaflet.Popup>
                </ReactLeaflet.Marker>
            ))}
        </MapContainer>
    )
}

export default Map;