import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const PerfilUsuario = () => {
  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Perfil de Usuario</Card.Title>

          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Nombre:</strong> Carlos Rodriguez
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Rol:</strong> Profesor
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Institución:</strong> Facultad de Ingeniería
            </ListGroup.Item>
            
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PerfilUsuario;