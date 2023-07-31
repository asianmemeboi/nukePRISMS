import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";

// Home.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

// Home.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
