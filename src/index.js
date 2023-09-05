import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.js";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavBar";
import ErrorPage from "./error-page";
import Classes from "./Classes.js";
import Reviews from "./Reviews.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

window.userdata = {
  user: null,
  profile: null
}

const router = createHashRouter([
  {
    path: "/",
    element: <NavigationBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "reviews",
        element: <Reviews />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="706556020516-optf625oa388dt5fi2ik9kubse5rhdob.apps.googleusercontent.com">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
