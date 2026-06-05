import { useState } from "react";

const FormularioProyecto = ({ onAgregar }) => {
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

    // Verificamos que cada integrante tenga formato Nombre - Rol
    if (equipoRaw.trim() !== "") {
      const formatoValido = equipoRaw.split("\n").every((linea) => {
        const partes = linea.split("-");

        return (
          partes.length === 2 &&
          partes[0].trim() !== "" &&
          partes[1].trim() !== ""
        );
      });

      if (!formatoValido) {
        alert(
          "Formato incorrecto. Debes ingresar el nombre seguido del rol, separados por un guion medio (-). Ejemplo: Nombre - Rol.",
        );

        return;
      }
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

    // const nuevoId =
    //   proyectos.length > 0 ? proyectos[proyectos.length - 1].id + 1 : 1;

    // Objeto final adaptado exactamente a las keys de DetalleProyecto
    const nuevoProyecto = {
      //   id: nuevoId,

      id: Date.now(),

      titulo,
      categoria,
      estado,

      descripcion: descripcionTextoPlano,

      recursos: {
        pdf: pdf.trim(),
        drive: drive.trim(),
        github: github.trim(),
      },

      equipo: arrayEquipo,
    };

    // agregarProyecto(nuevoProyecto);

    // setProyectos(obtenerProyectos());

    // Envía el proyecto al componente padre
    onAgregar(nuevoProyecto);

    // Limpia el formulario
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

  return (
    <section>
      <h2 className="mb-3" id="titulo-proyecto">
        <strong>Agregar Proyecto</strong>
      </h2>

      <div
        className="formulario-proyecto card p-9 mx-auto bg-info-subtle shadow"
        style={{
          maxWidth: "500px",
        }}
      >
        
        <input
          type="text"
          name="titulo"
          placeholder="Título del Proyecto"
          value={titulo}
          onChange={handleChange}
          className="form-control mb-3"
        />
        
        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={categoria}
          onChange={handleChange}
          className="form-control mb-3"
        />
        
        <select
          name="estado"
          value={estado}
          onChange={handleChange}
          className="form-select mb-3"
        >
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
          className="form-control mb-3"
        />
        
        {/* INPUTS PARA RECURSOS */}
        <div className="border rounded p-3 mb-3">
          <label className="form-label fw-bold">Recursos:</label>

          <input
            type="text"
            name="pdf"
            placeholder="Enlace o nombre del PDF"
            value={pdf}
            onChange={handleChange}
            className="form-control mb-2"
          />

          <input
            type="text"
            name="drive"
            placeholder="Enlace Google Drive"
            value={drive}
            onChange={handleChange}
            className="form-control mb-2"
          />

          <input
            type="text"
            name="github"
            placeholder="Enlace GitHub"
            value={github}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        
        {/* INPUT PARA EQUIPO */}
        <textarea
          rows="3"
          name="equipoRaw"
          placeholder="Equipo de trabajo (Formato: Nombre - Rol. Uno por línea)&#10;Ej: Juan Pérez - Desarrollador"
          value={equipoRaw}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <button onClick={agregar} className="btn btn-success">
          Agregar Proyecto
        </button>
      
      </div>
    </section>
  );
};
export default FormularioProyecto;
