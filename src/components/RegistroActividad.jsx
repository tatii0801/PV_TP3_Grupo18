const RegistroActividad = ({ fechaHora }) => {

  if (!fechaHora) return null;

  const fecha = new Date(fechaHora);

  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const anio = fecha.getFullYear();

  const horas = String(fecha.getHours()).padStart(2, "0");
  const minutos = String(fecha.getMinutes()).padStart(2, "0");

  return (
    <section className="card shadow-sm mt-4 p-3">
      <h4>Registro de Actividad</h4>

      <p>
        Última actualización de la lista: {dia}/{mes}/{anio} a las {horas}:{minutos} hs.
      </p>
    </section>
  );
};

export default RegistroActividad;