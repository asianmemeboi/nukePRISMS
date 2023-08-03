import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBnTLQEP9URuJROG3DnJrqvYaerBeX3pDw",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

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
