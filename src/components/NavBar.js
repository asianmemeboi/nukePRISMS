import logo from "../assets/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img alt="logo" src={logo} width="60" height="48" /> GNECH2O
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ paddingLeft: "-50px" }}>
              <Nav.Link>
                <Link to={`/home/`} className="link-style">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={`/login/`} className="link-style">
                  Login
                </Link>
              </Nav.Link>
              <NavDropdown title="Water" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Submit a sample
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Request a sample
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={`/map/`} className="link-style">
                    Map
                  </Link>
                </NavDropdown.Item>
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
