import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({usuarioLogueado, setUsuarioLogeado}) => {
  const navegacion = useNavigate();

  const logout =()=>{
    //borar el usuario del sesion storage
    sessionStorage.removeItem('usuario')
    setUsuarioLogeado({});
    navegacion('/');
  }

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
                usuarioLogueado.usuario ?(
                  <>
                  <NavLink end className={'nav-item nav-link'} to={'/administrador'}>Administrador</NavLink>
                  <Button variant="danger" onClick={logout}>Logout</Button>
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
