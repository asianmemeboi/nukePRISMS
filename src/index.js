import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from './components/NavBar';
import ErrorPage from "./error-page";
import Login from "./Login";

// Home.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)
// Home.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

const router = createBrowserRouter([
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
      path:"login",
      element: <Login />,
    }
    ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
