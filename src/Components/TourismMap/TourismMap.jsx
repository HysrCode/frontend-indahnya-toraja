import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import "./TourismMap.scss";
// Atur ulang icon Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, 13);
    }
  }, [position, map]);
  return null;
};
// ...import tetap sama

const TourismMap = ({ location }) => {
  const [userPos, setUserPos] = useState(null);

  const destination = [location.latitude, location.longitude];
  const center = userPos || destination;

  useEffect(() => {
    if ("geolocation" in navigator) {
      const id = navigator.geolocation.watchPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserPos([latitude, longitude]);
        },
        (err) => {
          console.warn("Gagal mendapatkan lokasi pengguna:", err.message);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000,
        }
      );
      return () => navigator.geolocation.clearWatch(id);
    }
  }, []);

  const googleMapsLink =
    userPos &&
    `https://www.google.com/maps/dir/?api=1&origin=${userPos[0]},${userPos[1]}&destination=${destination[0]},${destination[1]}`;

  return (
    <div className="container">
      <div
        className="map-container"
        style={{ position: "relative", height: "450px", width: "100%" }}
      >
        {/* Tombol di dalam Map */}
        {googleMapsLink && (
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            <p>📍Buka Rute di Google Maps</p>
          </a>
        )}

        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={destination}>
            <Popup>📍 Lokasi Wisata</Popup>
          </Marker>
          {userPos && (
            <Marker position={userPos}>
              <Popup>🧍 Lokasi Anda (Realtime)</Popup>
            </Marker>
          )}
          {userPos && (
            <Polyline positions={[userPos, destination]} color="blue" />
          )}
          <RecenterMap position={center} />
        </MapContainer>
      </div>
    </div>
  );
};

export default TourismMap;
