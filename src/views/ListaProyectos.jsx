import { useState, useEffect, useRef } from "react";
import ProyectoCard from "../components/ProyectoCard";
import RegistroActividad from "../components/RegistroActividad";
import FormularioProyecto from "../components/FormularioProyecto";

// El sistema de rejilla (Grid/Containers/Rows) para la distribución general de la página
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

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
      proyectos.length > 0 ? Math.max(...proyectos.map((p) => p.id)) + 1 : 1;

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

        <div
          className="mb-4"
          style={{
            maxWidth: "600px",
          }}
        >
          <Form.Control
            type="text"
            placeholder="Buscar por título..."
            onChange={buscar}
          />
        </div>

        <Row className="g-4">
          {proyectosFiltrados.length > 0 ? (
            proyectosFiltrados.map((proyecto) => (
              <Col md={6} lg={4} key={proyecto.id}>
                <ProyectoCard
                  //key={proyecto.id}
                  proyecto={proyecto}
                  onEliminar={eliminar}
                  //onVerDetalle={verDetalle}
                />
              </Col>
            ))
          ) : (
            <Col>
              <Card className="shadow p-5 text-center">
                <h4>No se encontraron proyectos</h4>
              </Card>
            </Col>
          )}
        </Row>
       
        <hr />

        {/*<DetalleProyecto proyecto={proyectoSeleccionado} />*/}

        <RegistroActividad fechaHora={ultimaActualizacion} />
      </Container>
    </div>
  );
};

export default ListaProyectos;
