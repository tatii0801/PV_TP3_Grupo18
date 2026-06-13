import { useParams, useNavigate } from "react-router-dom";

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
    <section className="detalle-proyecto">
      <button
        onClick={() => navigate("/proyectos")}
        style={{
          marginBottom: "20px",
        }}
      >
        ← Volver a Proyectos
      </button>

      <h2>{proyecto.titulo}</h2>

      <p>{proyecto.descripcion}</p>

      {/* <p>
        Este proyecto busca mejorar la organización y gestión educativa utilizando herramientas tecnológicas modernas.
      </p> */}

      <h3>Recursos</h3>

      <ul>
        <li>PDF: {proyecto.recursos?.pdf}</li>

        <li>Drive: {proyecto.recursos?.drive}</li>

        <li>GitHub: {proyecto.recursos?.github}</li>
      </ul>

      <h3>Equipo</h3>

      <ul>
        {proyecto.equipo?.map((persona, index) => (
          <li key={index}>
            {persona.nombre}
            {" - "}
            {persona.rol}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DetalleProyecto;