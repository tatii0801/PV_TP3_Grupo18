import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <h1>Dashboard</h1>

      <p>
        Bienvenido al sistema de gestión de proyectos educativos. Desde aquí
        podrás visualizar información general sobre los proyectos registrados.
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Total de proyectos</Card.Title>
              <Card.Text>12</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Proyectos en curso</Card.Title>
              <Card.Text>5</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;