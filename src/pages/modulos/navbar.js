import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styles from "@/styles/Navbar.module.css"

export default function Menu() {
  return (
    <Navbar expand="sm" className={`${styles.navGradiante} bg-primary px-3 my-5`}>
      <Container>
        <Navbar.Brand href="#home">6A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}