import { useContext, useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import Alert from "react-bootstrap/Alert";

import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  const [mensaje, setMensaje] = useState("");

  const [editando, setEditando] = useState(false);

  const [formulario, setFormulario] = useState({
    nombre: usuario?.nombre || "",
    dni: usuario?.dni || "",
    rol: usuario?.rol || "Alumno",
    institucion: usuario?.institucion || "",
  });

  const handleChange = (encontrar) => {
    const { name, value } = encontrar.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const guardar = () => {
    if (
      !formulario.nombre.trim() ||
      !formulario.dni.trim() ||
      !formulario.institucion.trim()
    ) {
      setMensaje("Complete todos los campos");
      return;
    }

    actualizarPerfil(formulario);

    setMensaje("");

    setEditando(false);
  };

  useEffect(() => {
    if (usuario) {
      setFormulario({
        nombre: usuario.nombre || "",
        dni: usuario.dni || "",
        rol: usuario.rol || "Alumno",
        institucion: usuario.institucion || "",
      });
    }
  }, [usuario]);

  return (
    <Container className="mt-4">
      <Card
        className="shadow border-0"
        style={{
          maxWidth: "700px",
          margin: "auto",
        }}
      >
        <Card.Header
          className="text-white"
          style={{
            backgroundColor: "#639682",
          }}
        >
          Perfil Usuario
        </Card.Header>

        <Card.Body>
          {mensaje && (
            <Alert variant="danger" dismissible onClose={() => setMensaje("")}>
              {mensaje}
            </Alert>
          )}

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>

              <Form.Control
                type="text"
                name="nombre"
                value={formulario.nombre}
                disabled={!editando}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>DNI</Form.Label>

              <Form.Control
                type="text"
                name="dni"
                value={formulario.dni}
                disabled={!editando}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>

              <Form.Select
                name="rol"
                value={formulario.rol}
                disabled={!editando}
                onChange={handleChange}
              >
                <option value="Docente">Docente</option>

                <option value="Alumno">Alumno</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Institución</Form.Label>

              <Form.Control
                type="text"
                name="institucion"
                value={formulario.institucion}
                disabled={!editando}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>

          {!editando ? (
            <Button variant="warning" onClick={() => setEditando(true)}>
              Editar Perfil
            </Button>
          ) : (
            <Button variant="info" onClick={guardar}>
              Guardar Cambios
            </Button>
          )}
        </Card.Body>
      </Card>

      <hr />
    </Container>
  );
};

export default PerfilUsuario;
