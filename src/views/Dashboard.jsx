import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { obtenerProyectos } from "../services/proyectoService";

const Dashboard = () => {
  const proyectos = obtenerProyectos();

  const total = proyectos.length;

  const enCurso = proyectos.filter((p) => p.estado === "En curso").length;

  const finalizados = proyectos.filter((p) => p.estado === "Finalizado").length;

  const pendientes = proyectos.filter((p) => p.estado === "Pendiente").length;

  return (
    <Container className="mt-4">
      <h1>Dashboard</h1>

      <p>
        Bienvenido al sistema de gestión de proyectos educativos. Desde aquí
        podrás visualizar información general sobre los proyectos registrados.
      </p>

     <Row className="g-4">

        <Col md={3}>
          <Card className="shadow border-0 text-center">
            <Card.Body>
              <Card.Title>
                Total
              </Card.Title>

              <h1>{total}</h1>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow border-0 text-center">
            <Card.Body>
              <Card.Title>
                En Curso
              </Card.Title>

              <h1>{enCurso}</h1>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow border-0 text-center">
            <Card.Body>
              <Card.Title>
                Pendientes
              </Card.Title>

              <h1>{pendientes}</h1>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow border-0 text-center">
            <Card.Body>
              <Card.Title>
                Finalizados
              </Card.Title>

              <h1>{finalizados}</h1>
            </Card.Body>
          </Card>
        </Col>

      </Row>
<hr></hr>
    </Container>
  );
};

export default Dashboard;