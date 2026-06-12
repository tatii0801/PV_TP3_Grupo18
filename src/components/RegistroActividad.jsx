import Alert from "react-bootstrap/Alert";

const RegistroActividad = ({ fechaHora }) => {
  if (!fechaHora) return null;

  const fecha = new Date(fechaHora);

  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const anio = fecha.getFullYear();

  const horas = String(fecha.getHours()).padStart(2, "0");
  const minutos = String(fecha.getMinutes()).padStart(2, "0");

  return (
    <Alert variant="info" className="mt-4">
      <Alert.Heading>Registro de Actividad</Alert.Heading>

      <p className="mb-0">
        Última actualización de la lista: {dia}/{mes}/{anio} a las {horas}:
        {minutos} hs.
      </p>
    </Alert>
  );
};

export default RegistroActividad;