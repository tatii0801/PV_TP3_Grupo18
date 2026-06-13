import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Nav className="ms-auto" variant="tabs">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">
          Inicio
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/proyectos">
          Proyectos
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/perfil">
          Perfil
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;