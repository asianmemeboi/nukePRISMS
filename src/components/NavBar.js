import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import { Outlet } from "react-router-dom";
import {useGoogleLogin, googleLogout} from '@react-oauth/google'
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function NavigationBar() {
  const [user, setUser] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
      setProfile(null);
  };
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href={`/#/`}>
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <b>nukePRISMS</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={`/#/`} style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href={`/#/login/`} style={{ color: "white" }}>
                Login
              </Nav.Link>
              <NavDropdown title="Reviews" id="basic-nav-dropdown">
                <NavDropdown.Item href={`/#/submit/`}>
                  Create a review
                </NavDropdown.Item>
                <NavDropdown.Item href={`/#/request/`}>
                  Search for reviews
                </NavDropdown.Item>
                <NavDropdown.Item href={`/#/map/`}>Map</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {profile ? (
                <div>
                  <Navbar.Brand href={`/#/`}>
                    <img
                      alt="profilepicture"
                      src={profile.picture}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{" "}
                    User: {profile.name}
                  </Navbar.Brand>
                  <Nav.Link onClick={logOut} style={{ color: "white" }}>Log Out</Nav.Link>
                </div>
              ) : (
                <Nav.Link onClick={() => login()} style={{ color: "white" }}>Sign in </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default NavigationBar;
