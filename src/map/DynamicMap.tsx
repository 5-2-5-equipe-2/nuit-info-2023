"use client"
import {useEffect} from 'react';
import Leaflet from 'leaflet';
import {TileLayer, Popup, useMapEvents, useMap, Tooltip, MapContainer} from 'react-leaflet'
import 'leaflet-defaulticon-compatibility';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"


import {Metric} from '@prisma/client';
import {Marker} from "react-leaflet";

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
            center={data[0] ? [data[0].lat, data[0].lng] : [0, 0]}
            zoom={13}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((metric: Metric) => {
                console.log(metric);
                return (

                    <Marker position={[metric.lat, metric.lng]} key={metric.id}>
                        <Tooltip>
                            Temperature: {metric.temperature} <br/>
                            Humidity: {metric.humidity} <br/>
                            Day: {metric.day ? "Yes" : "No"} <br/>
                        </Tooltip>
                    </Marker>
                );
            })}
        </MapContainer>
    )
}

export default Map;