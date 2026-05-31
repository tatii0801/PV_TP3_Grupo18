const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {

  const {
    id,
    titulo,
    categoria,
    estado
  } = proyecto;

  return (

    <article className="proyecto card shadow-sm">

      <div className="card-body">

        <h3 className="card-title">
          {titulo}
        </h3>

        <p className="card-text">
          <strong>Categoría:</strong> {categoria}
        </p>

        <p className="card-text">
          <strong>Estado:</strong> {estado}
        </p>

        <button
          className="btn btn-danger me-2"
          onClick={() => onEliminar(id)}
        >
          Eliminar
        </button>

        <button
          className="btn btn-primary"
          onClick={() => onVerDetalle(proyecto)}
        >
          Ver detalle
        </button>

      </div>

    </article>

  );
};

export default ProyectoCard;