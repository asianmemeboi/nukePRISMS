import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import { Outlet } from "react-router-dom";

function NavigationBar() {
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
            <img alt="logo" src={logo} width="30" height="40" />{" "}
            <b>nukePRISMS</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ paddingLeft: "-50px" }}>
              <Nav.Link href={`/#/`}>Home</Nav.Link>
              <Nav.Link href={`/#/login/`}>Login</Nav.Link>
              <NavDropdown title="Water" id="basic-nav-dropdown">
                <NavDropdown.Item href={`/#/submit/`}>
                  Submit a sample
                </NavDropdown.Item>
                <NavDropdown.Item href={`/#/request/`}>
                  Request a sample
                </NavDropdown.Item>
                <NavDropdown.Item href={`/#/map/`}>Map</NavDropdown.Item>
              </NavDropdown>
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
