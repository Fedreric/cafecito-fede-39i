import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cafecito</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="text-center">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#features">Registro</Nav.Link>
              <Nav.Link href="#pricing">Administrador</Nav.Link>
              <Nav.Link href="#pricing">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
