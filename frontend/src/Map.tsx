
import {MapContainer, TileLayer } from "react-leaflet"


export default function Map() {
  return (
    <div className="map">
    <MapContainer center = {[-33.7400, 150.8500]} 
    zoom = {13}
    style={{ height: "100vh", width: "100%" }}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    </MapContainer>
    </div>
  );
}