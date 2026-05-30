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

  const [descripcionRaw, setDescripcionRaw] = useState("");
  const [pdf, setPdf] = useState("");
  const [drive, setDrive] = useState("");
  const [github, setGithub] = useState("");
  const [equipoRaw, setEquipoRaw] = useState("");

  const agregar = () => {
    if (!titulo || !descripcionRaw) {
      alert("Por favor, completa al menos el título y la descripción.");
      return;
    }

    const parrafosDescripcion = descripcionRaw
      .split("\n")
      .filter((p) => p.trim() !== "");

    const arrayEquipo = equipoRaw
      .split("\n")
      .filter((linea) => linea.includes("-"))
      .map((linea) => {
        const [nombre, rol] = linea.split("-");
        return { nombre: nombre.trim(), rol: rol.trim() };
      });

    const nuevoId = proyectos.length > 0 ? proyectos[proyectos.length - 1].id + 1 : 1;

    const nuevoProyecto = {
      id: nuevoId,
      titulo: titulo,
      categoria: categoria,
      estado: estado,
      descripcionExtendida: parrafosDescripcion, 
      recursos: {
        pdf: pdf.trim(),
        drive: drive.trim(),
        github: github.trim(),
      },
      equipo: arrayEquipo,
    };

    agregarProyecto(nuevoProyecto);
    setProyectos(obtenerProyectos());

    setTitulo("");
    setCategoria("");
    setEstado("");
    setDescripcionRaw("");
    setPdf("");
    setDrive("");
    setGithub("");
    setEquipoRaw("");
  };

  const eliminar = (id) => {
    eliminarProyecto(id);
    setProyectos(proyectos.filter((proyecto) => proyecto.id !== id));
    if (proyectoSeleccionado?.id === id) setProyectoSeleccionado(null);
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

        <div className="formulario-proyecto" style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px' }}>
          <input
            type="text"
            placeholder="Título del Proyecto"
            value={titulo}
            onChange={(encontrar) => setTitulo(encontrar.target.value)}
          />

          <input
            type="text"
            placeholder="Categoría"
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

          {/* NUEVOS INPUTS EN EL FORMULARIO */}
          <textarea
            rows="4"
            placeholder="Descripción extendida (Mínimo 2 párrafos, separalos pulsando Enter)"
            value={descripcionRaw}
            onChange={(e) => setDescripcionRaw(e.target.value)}
          />

          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Recursos (URLs):</label>
            <input
              type="url"
              placeholder="Link PDF (ej: https://...)"
              value={pdf}
              onChange={(e) => setPdf(e.target.value)}
              style={{ width: '100%', marginBottom: '5px' }}
            />
            <input
              type="url"
              placeholder="Link Google Drive"
              value={drive}
              onChange={(e) => setDrive(e.target.value)}
              style={{ width: '100%', marginBottom: '5px' }}
            />
            <input
              type="url"
              placeholder="Link GitHub"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <textarea
            rows="3"
            placeholder="Equipo de trabajo (Un miembro por línea formato: Nombre - Rol)&#10;Ejemplo:&#10;Juan Pérez - Desarrollador Frontend&#10;Lucas Gómez - Tester"
            value={equipoRaw}
            onChange={(e) => setEquipoRaw(e.target.value)}
          />

          <button onClick={agregar}>Agregar Proyecto</button>
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