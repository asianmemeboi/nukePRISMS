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
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
      console.log(error);
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
              <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
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
