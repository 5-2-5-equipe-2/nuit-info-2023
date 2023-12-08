"use client"
import { useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const { MapContainer } = ReactLeaflet;

const Map = () => {

    return (
        <MapContainer
            style={{ height: "100%", width: "100%" }}
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
        >
            <ReactLeaflet.TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ReactLeaflet.Marker position={[51.505, -0.09]}>
                <ReactLeaflet.Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </ReactLeaflet.Popup>
            </ReactLeaflet.Marker>
        </MapContainer>
    )
}

export default Map;