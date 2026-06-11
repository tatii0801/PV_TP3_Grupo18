import { useState } from "react";

//Los inputs, selectores y botones del componente
//<FormularioProyecto /> deben heredar la estética del framework seleccionado
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

const FormularioProyecto = ({ onAgregar }) => {
  const [mensaje, setMensaje] = useState("");

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
    if (!titulo || !categoria || !estado || !descripcionRaw) {
      setMensaje(
        "Por favor, completa al menos el título, catergoria, estado y la descripción.",
      );
      return;
    }

    // Verificamos que cada integrante tenga formato Nombre - Rol
    // Si el campo está vacío, no permitimos agregar el proyecto
    if (equipoRaw.trim() === "") {
      setMensaje("Debe ingresar al menos un integrante del equipo.");
      return;
    }

    // Verificamos que cada línea tenga el formato:
    // Nombre - Rol
    const formatoValido = equipoRaw.split("\n").every((linea) => {
      // Separamos la línea usando el guion "-"
      const partes = linea.split("-");

      // Debe haber exactamente dos partes:
      // una para el nombre y otra para el rol
      return (
        partes.length === 2 &&
        // El nombre no puede estar vacío
        partes[0].trim() !== "" &&
        // El rol tampoco puede estar vacío
        partes[1].trim() !== ""
      );
    });

    // Si alguna línea no cumple el formato,
    // mostramos un mensaje y cancelamos el alta
    if (!formatoValido) {
      setMensaje(
        "Formato incorrecto. Debes ingresar el nombre seguido del rol. Ejemplo: Juan Pérez - Desarrollador.",
      );
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

    // const nuevoId =
    //   proyectos.length > 0 ? proyectos[proyectos.length - 1].id + 1 : 1;

    // Objeto final adaptado exactamente a las keys de DetalleProyecto
    const nuevoProyecto = {
      //   id: nuevoId,

      //     id: Date.now(),

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
    setMensaje("");

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
  /*<div
        className="formulario-proyecto card p-9 mx-auto bg-info-subtle shadow"
        style={{
          maxWidth: "500px",
        }}
      >*/
  return (
    <section>
      <h2 className="mb-3" id="titulo-proyecto">
        <strong>Agregar Proyecto</strong>
      </h2>

      {mensaje && (
        <Alert variant="danger" dismissible onClose={() => setMensaje("")}>
          {mensaje}
        </Alert>
      )}

      <Card
        className="mx-auto shadow border-0"
        style={{
          maxWidth: "600px",
          borderRadius: "15px",
          backgroundColor: "#5ea58a", // verde suave
        }}
      >
        <Card.Body>
          <Form.Control
            type="text"
            name="titulo"
            placeholder="Título del Proyecto"
            value={titulo}
            onChange={handleChange}
            className="mb-3"
            style={{
              backgroundColor: "#f1f5f9", // gris suave
              border: "1px solid #cbd5e1",
            }}
          />

          <Form.Control
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={categoria}
            onChange={handleChange}
            className="mb-3"
            style={{
              backgroundColor: "#f1f5f9", // gris suave
              border: "1px solid #cbd5e1",
            }}
          />

          <Form.Select
            name="estado"
            value={estado}
            onChange={handleChange}
            className="mb-3"
            style={{
              backgroundColor: "#f1f5f9", // gris suave
              border: "1px solid #cbd5e1",
            }}
          >
            <option value="">Seleccione un estado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En curso">En curso</option>
            <option value="Finalizado">Finalizado</option>
          </Form.Select>

          {/* INPUT PARA DESCRIPCIÓN */}
          <Form.Control
            as="textarea"
            rows="4"
            name="descripcionRaw"
            placeholder="Descripción extendida del proyecto"
            value={descripcionRaw}
            onChange={handleChange}
            className="form-control mb-3"
            style={{
              backgroundColor: "#f1f5f9", // gris suave
              border: "1px solid #cbd5e1",
            }}
          />

          {/* INPUTS PARA RECURSOS */}
          <div
            className="rounded p-3 mb-3"
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #cbd5e1",
            }}
          >
            <label className="form-label fw-bold">Recursos:</label>

            <Form.Control
              type="text"
              name="pdf"
              placeholder="Enlace o nombre del PDF"
              value={pdf}
              onChange={handleChange}
              className="form-control mb-2"
            />

            <Form.Control
              type="text"
              name="drive"
              placeholder="Enlace Google Drive"
              value={drive}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <Form.Control
              type="text"
              name="github"
              placeholder="Enlace GitHub"
              value={github}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* INPUT PARA EQUIPO */}
          <Form.Control
            as="textarea"
            rows="3"
            name="equipoRaw"
            placeholder="Equipo de trabajo (Formato: Nombre - Rol. Uno por línea)&#10;Ej: Juan Pérez - Desarrollador"
            value={equipoRaw}
            onChange={handleChange}
            className="form-control mb-3"
            style={{
              backgroundColor: "#f1f5f9", // gris suave
              border: "1px solid #cbd5e1",
            }}
          />
          {/* className="d-block me-auto"  --- alianiacion a la izquierda */}
          <Button variant="success" onClick={agregar} className="float-end">
            Agregar Proyecto
          </Button>
        </Card.Body>
      </Card>
      <hr />
      {mensaje && (
        <Alert variant="danger" dismissible onClose={() => setMensaje("")}>
          {mensaje}
        </Alert>
      )}
    </section>
  );
};
export default FormularioProyecto;
