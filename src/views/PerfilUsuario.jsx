import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {
  // Obtiene los datos desde el contexto global
  const { usuario } = useContext(UsuarioContext);

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow border-0">
            <Card.Title className="text-center fs-4 fw-bold">
              Perfil de Usuario
            </Card.Title>

            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Nombre:</strong>

                  <div className="mt-1">{usuario.nombre}</div>
                </ListGroup.Item>

                <ListGroup.Item>
                  <strong>DNI:</strong>

                  <div className="mt-1">{usuario.dni}</div>
                </ListGroup.Item>

                <ListGroup.Item>
                  <strong>Rol:</strong>

                  <div className="mt-1">
                    <Badge bg="primary">{usuario.rol}</Badge>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item>
                  <strong>Institución:</strong>

                  <div className="mt-1">{usuario.institucion}</div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default PerfilUsuario;
