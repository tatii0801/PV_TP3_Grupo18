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

  // 1. ESTADO UNIFICADO DEL FORMULARIO (Cumple la consigna de desestructuración)
  const [form, setForm] = useState({
    titulo: "",
    categoria: "",
    estado: "",
    descripcionRaw: "",
    pdf: "",
    drive: "",
    github: "",
    equipoRaw: "",
  });

  // 2. DESESTRUCTURACIÓN DE LOS CAMPOS PARA EL USO EN EL RENDER
  const {
    titulo,
    categoria,
    estado,
    descripcionRaw,
    pdf,
    drive,
    github,
    equipoRaw,
  } = form;

  // 3. MANEJADOR DE EVENTOS GENÉRICO (Desestructura name y value de e.target)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const agregar = () => {
    if (!titulo || !descripcionRaw) {
      alert("Por favor, completa al menos el título y la descripción.");
      return;
    }

    // Convertimos el contenido a string plano tal como lo lee el Detalle del compañero
    const descripcionTextoPlano = descripcionRaw.trim();

    // Procesamos el string del equipo para generar el array de objetos { nombre, rol }
    const arrayEquipo = equipoRaw

      .split("\n")
      .filter((linea) => linea.includes("-"))
      .map((linea) => {
        const [nombre, rol] = linea.split("-");
        return {
          nombre: nombre.trim(),
          rol: rol.trim(),
        };
      });

    const nuevoId =
      proyectos.length > 0 ? proyectos[proyectos.length - 1].id + 1 : 1;

    // Objeto final adaptado exactamente a las keys de DetalleProyecto
    const nuevoProyecto = {
      id: nuevoId,
      titulo,
      categoria,
      estado,
      descripcion: descripcionTextoPlano, // Cambiado para emparejar con el detalle ajeno
      recursos: {
        pdf: pdf.trim(),
        drive: drive.trim(),
        github: github.trim(),
      },
      equipo: arrayEquipo,
    };

    agregarProyecto(nuevoProyecto);
    setProyectos(obtenerProyectos());

    // Reseteo limpio del estado unificado
    setForm({
      titulo: "",
      categoria: "",
      estado: "",
      descripcionRaw: "",
      pdf: "",
      drive: "",
      github: "",
      equipoRaw: "",
    });
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
    <main className="contenedor">
      <div className="centrado">
        <h2 id="titulo-proyecto">
          <strong>Lista de Proyectos</strong>
        </h2>
      </div>

      <div className="margen">
        <input type="text" placeholder="Buscar proyecto" onChange={buscar} />
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

      <DetalleProyecto proyecto={proyectoSeleccionado} />

      <hr />

      <section className="margen">
        <h3>Agregar Proyecto</h3>

        <div
          className="formulario-proyecto"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "500px",
          }}
        >
          <input
            type="text"
            name="titulo"
            placeholder="Título del Proyecto"
            value={titulo}
            onChange={handleChange}
          />

          <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={categoria}
            onChange={handleChange}
          />

          <select name="estado" value={estado} onChange={handleChange}>
            <option value="">Seleccione un estado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En curso">En curso</option>
            <option value="Finalizado">Finalizado</option>
          </select>

          {/* INPUT PARA DESCRIPCIÓN */}
          <textarea
            rows="4"
            name="descripcionRaw"
            placeholder="Descripción extendida del proyecto"
            value={descripcionRaw}
            onChange={handleChange}
          />

          {/* INPUTS PARA RECURSOS */}
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <label
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Recursos:
            </label>
            <input
              type="text"
              name="pdf"
              placeholder="Enlace o nombre del PDF"
              value={pdf}
              onChange={handleChange}
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <input
              type="text"
              name="drive"
              placeholder="Enlace Google Drive"
              value={drive}
              onChange={handleChange}
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <input
              type="text"
              name="github"
              placeholder="Enlace GitHub"
              value={github}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </div>

          {/* INPUT PARA EQUIPO */}
          <textarea
            rows="3"
            name="equipoRaw"
            placeholder="Equipo de trabajo (Formato: Nombre - Rol. Uno por línea)&#10;Ej: Juan Pérez - Desarrollador"
            value={equipoRaw}
            onChange={handleChange}
          />

          <button onClick={agregar}>Agregar Proyecto</button>
        </div>
      </section>
    </main>
  );
};

export default ListaProyectos;
