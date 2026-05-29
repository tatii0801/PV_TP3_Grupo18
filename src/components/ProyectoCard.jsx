const ProyectoCard = ({proyecto,onEliminar,onVerDetalle}) => {

    const {
        id,
        titulo,
        categoria,
        estado
    } = proyecto;

    return (

        <article className="proyecto">
{/* 
            <h3>
                ID: {id}
            </h3> */}

            <h3>
                {titulo}
            </h3>

            <p>
                <strong>Categoria:</strong>
                {' '}
                {categoria}
            </p>

            <p>
                <strong>Estado:</strong>
                {' '}
                {estado}
            </p>

            <button
                onClick={() => onEliminar(id)}
            >
                Eliminar
            </button>

            {' '}

            <button
                onClick={() => onVerDetalle(proyecto)}
            >
                Ver detalle
            </button>

        </article>
    );
};

export default ProyectoCard;