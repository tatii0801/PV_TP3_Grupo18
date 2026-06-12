import { useState, useEffect, useRef } from "react";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
import RegistroActividad from "./RegistroActividad";
import FormularioProyecto from "./FormularioProyecto";

// El sistema de rejilla (Grid/Containers/Rows) para la distribución general de la página
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  obtenerProyectos,
  agregarProyecto,
  eliminarProyecto,
  buscarProyecto,
} from "../services/proyectoService";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(obtenerProyectos());

  const [proyectosFiltrados, setProyectosFiltrados] =
    useState(obtenerProyectos());

  //const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);

  const primeraCarga = useRef(true);

  useEffect(() => {
    if (primeraCarga.current) {
      primeraCarga.current = false;
      return;
    }

    setUltimaActualizacion(new Date());
  }, [proyectos]);

  const agregar = (nuevoProyecto) => {
    const nuevoId =
      proyectos.length > 0 ? proyectos[proyectos.length - 1].id + 1 : 1;

    const proyectoCompleto = {
      ...nuevoProyecto,
      id: nuevoId,
    };

    agregarProyecto(proyectoCompleto);

    const listaActualizada = obtenerProyectos();

    setProyectos(listaActualizada);
    setProyectosFiltrados(listaActualizada);
  };

  const eliminar = (id) => {
    eliminarProyecto(id);

    const nuevaLista = proyectos.filter((proyecto) => proyecto.id !== id);

    setProyectos(nuevaLista);
    setProyectosFiltrados(nuevaLista);

    if (proyectoSeleccionado?.id === id) {
      setProyectoSeleccionado(null);
    }
  };

  /*const verDetalle = (proyecto) => {
    setProyectoSeleccionado((prev) =>
      prev?.id === proyecto.id ? null : proyecto,
    );
  };*/

  const buscar = (encontrar) => {
    const texto = encontrar.target.value;

    if (texto === "") {
      setProyectosFiltrados(proyectos);
    } else {
      setProyectosFiltrados(buscarProyecto(texto));
    }
  };
  // </Container><main className="contenedor bg-secondary text-light min-vh-100 p-4">
  return (
    <div
      style={{
        backgroundColor: "#cdbdbd7b",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Container className="contenedor">
        <FormularioProyecto onAgregar={agregar} />

       
        <hr />

        <div className="centrado">
          <h2 id="titulo-proyecto">
            <strong>Lista de Proyectos</strong>
          </h2>
        </div>

        <div className="mb-3 w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar proyecto"
            onChange={buscar}
          />
        </div>

        <Row>
          {proyectosFiltrados.map((proyecto) => (
            <Col md={4} key={proyecto.id}>
              <ProyectoCard
                key={proyecto.id}
                proyecto={proyecto}
                onEliminar={eliminar}
                //onVerDetalle={verDetalle}
              />
              <hr />
            </Col>
          ))}
        </Row>

        <hr />
        <hr />

        {/*<DetalleProyecto proyecto={proyectoSeleccionado} />*/}

        <RegistroActividad fechaHora={ultimaActualizacion} />
      </Container>
    </div>
  );
};

export default ListaProyectos;
