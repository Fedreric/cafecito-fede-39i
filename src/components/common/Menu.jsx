import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = ({usuarioLogueado, setUsuarioLogeado}) => {
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
              {
                usuarioLogueado.email?(
                  <>
                  <NavLink end className={'nav-item nav-link'} to={'/administrador'}>Administrador</NavLink>
                  <Button variant="danger">Logout</Button>
                  </>
                ):(
                  <NavLink end className={'nav-item nav-link'} to={'/login'}>Login</NavLink>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
