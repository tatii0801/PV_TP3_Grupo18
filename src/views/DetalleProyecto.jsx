import { useParams, useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

// Obtiene el id desde la URL y carga el proyecto correspondiente
import { obtenerProyectoPorId } from "../services/proyectoService";

const DetalleProyecto = () => {
  const navigate = useNavigate();

  // Captura el id desde:
  // /proyectos/1
  const { id } = useParams();

  // Busca el proyecto
  const proyecto = obtenerProyectoPorId(id);

  if (!proyecto) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <Card className="shadow p-4">
      <button
        onClick={() => navigate("/proyectos")}
        style={{
          marginBottom: "20px",
        }}
      >
        ← Volver a Proyectos
      </button>

      <h1>{proyecto.titulo}</h1>

      <Badge bg="primary">{proyecto.estado}</Badge>

      <hr />

      <h4>Descripción</h4>
      <p>{proyecto.descripcion}</p>

      {/* <p>
        Este proyecto busca mejorar la organización y gestión educativa utilizando herramientas tecnológicas modernas.
      </p> */}

      <h4>Recursos</h4>

      <ul>
        <li>
          PDF:
          {proyecto.recursos.pdf}
        </li>

        <li>
          Drive:
          {proyecto.recursos.drive}
        </li>

        <li>
          GitHub:
          {proyecto.recursos.github}
        </li>
      </ul>

      <h4>Equipo</h4>

      <ul>
        {proyecto.equipo.map((persona, index) => (
          <li key={index}>
            {persona.nombre}—{persona.rol}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DetalleProyecto;
