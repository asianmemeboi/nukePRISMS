import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavBar";
import ErrorPage from "./error-page";
import Login from "./Login";
import Map from "./Map";
import Submit from "./Submit"

const router = createHashRouter([
  {
    path: "/",
    element: <NavigationBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "submit",
        element: <Submit />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
