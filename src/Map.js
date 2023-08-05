/* eslint-disable no-unused-vars */

import { Wrapper } from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

export default function Map() {
  return (
    <Wrapper
      apiKey="AIzaSyBnTLQEP9URuJROG3DnJrqvYaerBeX3pDw"
      version="beta"
      libraries={["marker"]}
    >
      <MyMap />
    </Wrapper>
  );
}

const mapOptions = {
  mapId: "58590392a678c033",
  center: { lat: 43.66293, lng: -79.39314 },
  zoom: 10,
  disableDefaultUI: true,
};

function MyMap() {
  const [map, setMap] = useState();
  const ref = useRef();

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);

  return (
    <>
      <div ref={ref} id="map" />
      {map && <Weather map={map} />}
    </>
  );
}

const weatherData = {
  A: {
    name: "Toronto",
    position: { lat: 43.66293, lng: -79.39314 },
    climate: "High",
    temp: 20,
    fiveDay: [15, 18, 12, 22, 20],
  },
  B: {
    name: "Guelph",
    position: { lat: 43.544811, lng: -80.248108 },
    climate: "Med",
    temp: 20,
    fiveDay: [15, 18, 12, 22, 20],
  },
  C: {
    name: "Orangeville",
    position: { lat: 43.919239, lng: -80.097412 },
    climate: "Low",
    temp: 20,
    fiveDay: [15, 18, 12, 22, 20],
  },
};

function Weather({ map }) {
  const [data, setData] = useState(weatherData);
  const [highlight, setHighlight] = useState();
  const [editing, setEditing] = useState();
  
  return (
    <>
      {Object.entries(data).map(([key, weather]) => (
        <Marker
          key={key}
          map={map}
          position={weather.position}
          onClick={() => setEditing(key)}
        >
          <div
            className={`marker ${weather.climate.toLowerCase()}`}
          >
            <h2>{weather.climate}</h2>
          </div>
        </Marker>
      ))}
    </>
  );
}

function Marker({ map, position, children, onClick }) {
  const rootRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement("div");
      rootRef.current = createRoot(container);

      markerRef.current = new window.google.maps.marker.AdvancedMarkerView({
        position,
        content: container,
      });
    }

    return () => (markerRef.current.map = null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   rootRef.current.render(children);
  //   markerRef.current.position = position;
  //   markerRef.current.map = map;
  //   const listener = markerRef.current.addEventListener("gmpclick", onClick);
  //   return () => listener.remove();
  // }, [map, position, children, onClick]);
}