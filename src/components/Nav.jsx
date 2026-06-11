import Nav from "react-bootstrap/Nav";

const Menu = () => {
  return (
    <Nav className="ms-auto" variant="tabs">
      <Nav.Item>
        <Nav.Link href="#">Inicio</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#">Proyectos</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#">Perfil</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#">Detalles</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="ListaProyectos"> Agregar y Listar Proyectos</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;