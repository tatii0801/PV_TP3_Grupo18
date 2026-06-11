import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <Card
      className="shadow-sm mb-3 border-0"
      style={{
        backgroundColor: "#F5F0E6",
        borderTop: "8px solid red",
      }}
    >
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>

        <Card.Text>
          <strong>Categoría:</strong> {categoria}
        </Card.Text>

        <Card.Text>
          <strong>Estado:</strong> {estado}
        </Card.Text>

        <Button
          variant="danger"
          className="me-2"
          onClick={() => onEliminar(id)}
        >
          Eliminar
        </Button>

        <Button variant="primary" onClick={() => onVerDetalle(proyecto)}>
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProyectoCard;
