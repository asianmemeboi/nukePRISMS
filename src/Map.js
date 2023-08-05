import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";

const Map = () => {
  const myLatLng = { lat: 40.247132, lng: -74.838578 };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBnTLQEP9URuJROG3DnJrqvYaerBeX3pDw",
  });
  const center = useMemo(() => ({ lat: 40.23287, lng: -74.856071 }), []);

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "First Water Testing Point"
  })
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
