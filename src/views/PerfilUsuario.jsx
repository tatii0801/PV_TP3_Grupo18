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
    nombre: "",
    dni: "",
    rol: "",
    institucion: "",
  });

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

  const handleChange = (e) => {
    let { name, value } = e.target;

    // SOLO NUMEROS PARA DNI
    if (name === "dni") {
      value = value.replace(/\D/g, "");
    }

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

    if (formulario.dni.length < 7) {
      setMensaje("Ingrese un DNI válido");
      return;
    }

    actualizarPerfil(formulario);

    setMensaje("");

    setEditando(false);
  };

  return (
    <Container>
      <Card
        className="shadow border-0"
        style={{
          maxWidth: "750px",
          margin: "auto",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Card.Header
          style={{
            background: "linear-gradient(90deg,#639682,#4b7464)",
            color: "white",
            padding: "25px",
          }}
        >
          <Row>
            <Col>
              <h2>Perfil Usuario</h2>
            </Col>

            <Col className="text-end">
              <Badge bg="light" text="dark">
                {formulario.rol}
              </Badge>
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          {mensaje && (
            <Alert variant="danger" dismissible onClose={() => setMensaje("")}>
              {mensaje}
            </Alert>
          )}

          <div className="text-center mb-4">
            <div
              style={{
                width: "90px",
                height: "90px",
                background: "#639682",
                borderRadius: "50%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                color: "white",
              }}
            >
              👤
            </div>

            <h4 className="mt-3">{formulario.nombre}</h4>

            <p className="text-muted">{formulario.institucion}</p>
          </div>

          <Form>
            <Row>
              <Col md={6}>
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
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>DNI</Form.Label>

                  <Form.Control
                    type="text"
                    name="dni"
                    maxLength={8}
                    value={formulario.dni}
                    disabled={!editando}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
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
              </Col>

              <Col md={6}>
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
              </Col>
            </Row>

            <div className="text-end">
              {!editando ? (
                <Button variant="warning" onClick={() => setEditando(true)}>
                  Editar Perfil
                </Button>
              ) : (
                <Button variant="success" onClick={guardar}>
                  Guardar Cambios
                </Button>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>

      <hr />
    </Container>
  );
};

export default PerfilUsuario;
