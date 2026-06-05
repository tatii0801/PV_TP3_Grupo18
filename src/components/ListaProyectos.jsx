import { useState } from "react";

import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
import FormularioProyecto from "./FormularioProyecto";

import { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto, } from "../services/proyectoService";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(obtenerProyectos());
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const agregar = (nuevoProyecto) => {
    agregarProyecto(nuevoProyecto);

    setProyectos(obtenerProyectos());
  };

  const eliminar = (id) => {
    eliminarProyecto(id);
    setProyectos(proyectos.filter((proyecto) => proyecto.id !== id));
    if (proyectoSeleccionado?.id === id) setProyectoSeleccionado(null);
  };

  const verDetalle = (proyecto) => {
    setProyectoSeleccionado((prev) =>
      prev?.id === proyecto.id ? null : proyecto,
    );
  };

  const buscar = (encontrar) => {
    const texto = encontrar.target.value;
    if (texto === "") {
      setProyectos(obtenerProyectos());
    } else {
      setProyectos(buscarProyecto(texto));
    }
  };

  return (
    <main className="contenedor bg-secondary text-light min-vh-100 p-4">

      <FormularioProyecto onAgregar={agregar} />
      
      <hr />
      <hr />

      <div className="centrado">
        <h2 id="titulo-proyecto">
          <strong>Lista de Proyectos</strong>
        </h2>
      </div>

      <div className="margen" className="mb-3 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar proyecto"
          onChange={buscar}
        />
      </div>

      <section className="contenedor-proyectos">
        {proyectos.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onEliminar={eliminar}
            onVerDetalle={verDetalle}
          />
        ))}
      </section>

      <hr />
      <hr />

      <DetalleProyecto proyecto={proyectoSeleccionado} />
    </main>
  );
};

export default ListaProyectos;
