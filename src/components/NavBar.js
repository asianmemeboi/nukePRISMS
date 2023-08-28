import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import { Outlet } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';


function NavigationBar() {
  const [user, setUser ] = useState({});
  
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signinButton").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signinButton").hidden = false;
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "706556020516-optf625oa388dt5fi2ik9kubse5rhdob.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signinButton"),
      { theme: "outline", size: "large"}
    );
  }, [])

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
                <Nav.Link id="signinButton" style={{ color: "white" }}>Sign in </Nav.Link>
                { Object.keys(user).length !== 0 &&
                  
                  <Nav.Link onClick={(e) => handleSignOut(e)} style={{ color: "white" }}>Log Out</Nav.Link>
                }
                { user && 
                    <div>
                      <Nav className="justify-content-end">
                      <Navbar.Brand href={`/#/`}>
                        <img
                          alt="profilepicture"
                          src={user.picture}
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                        />{" "}
                        User: {user.name}
                      </Navbar.Brand>
                      
                         
                      </Nav>
                      
                    </div>
                  }
                
              
                

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
