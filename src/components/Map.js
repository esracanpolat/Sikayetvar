import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

const Map = ({ lat, lng }) => {
    console.log(lat, lng);
    return (
        <MapContainer
            style={{ height: "32vh", width: "100%" }}
            center={{ lat: lat, lng: lng }} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]} />
        </MapContainer>
    );
}

export default Map;
