import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBnTLQEP9URuJROG3DnJrqvYaerBeX3pDw",
  });
  const center = useMemo(() => ({ lat: 40.23287, lng: -74.856071 }), []);

  return (
    <div className="Themap">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
};

export default Map;
