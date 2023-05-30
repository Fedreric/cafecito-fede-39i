import { Nav, Navbar, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cafecito</Navbar.Brand>
          <Nav className="me-0">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Registro</Nav.Link>
            <Nav.Link href="#pricing">Administrador</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
