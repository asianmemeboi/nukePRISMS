import logo from "../assets/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar() {
  return (
  <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="logo" src={logo} width="60" height="48" /> GNECH2O
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ paddingLeft: "-50px" }}>
            <Link to={`/home/`}>Home</Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <NavDropdown title="Map" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Submit a sample</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Request a sample
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Check contributions</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div><Outlet/></div>
    </>
  );
}

export default NavigationBar;
