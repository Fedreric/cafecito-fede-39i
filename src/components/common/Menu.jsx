import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>Cafecito</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="text-center">
              <NavLink end className={'nav-item nav-link'} to={'/'}>Inicio</NavLink>
              <NavLink end className={'nav-item nav-link'} to={'/registro'}>Registro</NavLink>
              <NavLink end className={'nav-item nav-link'} to={'/administrador'}>Administrador</NavLink>
              <NavLink end className={'nav-item nav-link'} to={'/login'}>Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
