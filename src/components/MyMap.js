import React, { useMemo } from "react";
import GoogleMapReact from "google-map-react";

export default function MyMap({ coords, title }) {
  const defaultCoords = useMemo(() => ({ lat: 40.713829, lng: -73.989667 }), [])

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA8IF5ibvAyzjHYnbRaOFL472c4abe3_bg" }}
        defaultCenter={defaultCoords}
        center={coords || defaultCoords}
        defaultZoom={15}
      >
        <div className="marker" {...(coords || defaultCoords)}>
          <div className="tooltip">
            {title}
          </div>
        </div>
      </GoogleMapReact>
    </div>
  );
}
