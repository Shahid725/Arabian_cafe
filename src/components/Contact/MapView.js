import React, {useState} from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";
import "./Contact.css"

const MapView = () => {
  // Shows marker on London by default
  const [markerLocation, setMarkerLocation] = useState({
    // lat: 51.509865,
    // lng: -0.118092,

    lat: 12.719795532805376,
    lng: 77.28562121101889

  });

  return (
    <div className="map-container mb-5">
        <Map
          style={{ borderRadius: "20px" }}
          defaultZoom={13}
          defaultCenter={markerLocation}
          gestureHandling={"greedy"}
          disableDefaultUI
        >
          <Marker position={markerLocation} />
        </Map>
      </div>

  );
}

export default MapView;
