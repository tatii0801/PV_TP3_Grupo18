import { useState, useEffect, useRef } from "react";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
import RegistroActividad from "./RegistroActividad";
import FormularioProyecto from "./FormularioProyecto";

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

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

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
      proyectos.length > 0
        ? proyectos[proyectos.length - 1].id + 1
        : 1;

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

    const nuevaLista = proyectos.filter(
      (proyecto) => proyecto.id !== id
    );

    setProyectos(nuevaLista);
    setProyectosFiltrados(nuevaLista);

    if (proyectoSeleccionado?.id === id) {
      setProyectoSeleccionado(null);
    }
  };

  const verDetalle = (proyecto) => {
    setProyectoSeleccionado((prev) =>
      prev?.id === proyecto.id ? null : proyecto
    );
  };

  const buscar = (e) => {
    const texto = e.target.value;

    if (texto === "") {
      setProyectosFiltrados(proyectos);
    } else {
      setProyectosFiltrados(buscarProyecto(texto));
    }
  };

  return (
    <main className="contenedor bg-secondary text-light min-vh-100 p-4">
   
      

      <hr />
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

      <section className="contenedor-proyectos">
        {proyectosFiltrados.map((proyecto) => (
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
         <FormularioProyecto
        onAgregarProyecto={agregar}
      />


      <RegistroActividad
        fechaHora={ultimaActualizacion}
      />
    </main>
  );
};

export default ListaProyectos;