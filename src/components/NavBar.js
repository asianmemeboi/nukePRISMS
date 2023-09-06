import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { Outlet } from "react-router-dom";
import {useGoogleLogin, googleLogout} from '@react-oauth/google'
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function NavigationBar() {
  const [user, setUser] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const login = useGoogleLogin({
      onSuccess: (codeResponse) => { setUser(codeResponse); console.log(codeResponse); },
      onError: (error) => console.log('Login Failed:', error)
  });

  function refreshPage() {
    window.location.reload(false);
  }
  
  useEffect(
    () => {
      setProfile(null);
      window.userdata = {
        user: null,
        profile: null
      }
      if (sessionStorage.getItem("login")) {
        const sessionUser = JSON.parse(sessionStorage.getItem("login"));
        if (sessionUser) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${sessionUser.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
          window.userdata = {
            user: sessionUser,
            profile: profile
          };
        }
      }
    }, []
  );


  useEffect(
      () => {
          if (user) {
            sessionStorage.setItem("login", JSON.stringify(user));
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
            window.userdata = {
              user: user,
              profile: profile
            };
            refreshPage();
          }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [ user ]
  );
  
  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      sessionStorage.removeItem("login");
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
              {profile ? (
                <Nav.Link href={`/#/classes`} style={{color:"white"}}> Classes </Nav.Link>
              ) : (
                <></>
              )}
              
            </Nav>
            <Nav>
              {profile ? (
                <div>
                  <Nav className="justify-content-end">
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
                  </Nav>
                  
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
