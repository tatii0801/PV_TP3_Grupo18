import { useState } from "react";

import ProyectoCard from "./ProyectoCard";

import DetalleProyecto from "./DetalleProyecto";

import {
  obtenerProyectos,
  agregarProyecto,
  eliminarProyecto,
  buscarProyecto,
} from "../services/proyectoService";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(obtenerProyectos());

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");

  const agregar = () => {
    const nuevoProyecto = {
      id: proyectos[proyectos.length - 1].id + 1,
      titulo: titulo,
      categoria: categoria,
      estado: estado,
      descripcion: "Descripcion del nuevo proyecto educativo:",
      recursos: {
        pdf: "nuevo.pdf",

        drive: "Drive Nuevo Proyecto",

        github: "GitHub Nuevo Proyecto",
      },

      equipo: [
        {
          nombre: "Integrante 1",
          rol: "Desarrollador",
        },

        {
          nombre: "Integrante 2",
          rol: "Tester",
        },
      ],
    };

    agregarProyecto(nuevoProyecto);

    setProyectos(obtenerProyectos());

    setTitulo("");
    setCategoria("");
    setEstado("");
  };

  const eliminar = (id) => {
    eliminarProyecto(id);

    setProyectos(proyectos.filter((proyecto) => proyecto.id !== id));
  };

  const verDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
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
    <main className="contenedor">
      <div className="centrado">
        <h2 id="titulo-proyecto">
          <strong>Lista de Proyectos</strong>
        </h2>
      </div>

      <div className="margen">
        <input type="text" placeholder="Buscar proyecto" onChange={buscar} />
      </div>

      <hr />

      <section className="margen">
        <h3>Agregar Proyecto</h3>

        <div className="formulario-proyecto">
          <input
            type="text"
            placeholder="Titulo"
            value={titulo}
            onChange={(encontrar) => setTitulo(encontrar.target.value)}
          />

          <input
            type="text"
            placeholder="Categoria"
            value={categoria}
            onChange={(encontrar) => setCategoria(encontrar.target.value)}
          />

          <select
            value={estado}
            onChange={(encontrar) => setEstado(encontrar.target.value)}
          >
            <option value="">Seleccione un estado</option>

            <option value="Pendiente">Pendiente</option>

            <option value="En curso">En curso</option>

            <option value="Finalizado">Finalizado</option>
          </select>

          <button onClick={agregar}>Agregar</button>
        </div>
      </section>

      <hr />

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

      <DetalleProyecto proyecto={proyectoSeleccionado} />
    </main>
  );
};

export default ListaProyectos;
