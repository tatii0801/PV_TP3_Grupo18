const DetalleProyecto = ({ proyecto }) => {

    if (!proyecto) {

        return (
            <p>
                Seleccione un proyecto
            </p>
        );
    }

    return (

        <section className="detalle-proyecto">

            <h2>
                {proyecto.titulo}
            </h2>

            <p>
                {proyecto.descripcion}
            </p>

            <p>
                Este proyecto busca mejorar la organizacion y gestion educativa utilizando herramientas tecnologicas modernas.
            </p>

            <h3>
                Recursos
            </h3>

            <ul>

                <li>
                    PDF:
                    {' '}
                    {proyecto.recursos.pdf}
                </li>

                <li>
                    Drive:
                    {' '}
                    {proyecto.recursos.drive}
                </li>

                <li>
                    GitHub:
                    {' '}
                    {proyecto.recursos.github}
                </li>

            </ul>

            <h3>
                Equipo
            </h3>

            <ul>

                {
                    proyecto.equipo.map((persona, index) => (

                        <li key={index}>

                            {persona.nombre}
                            {' - '}
                            {persona.rol}

                        </li>
                    ))
                }

            </ul>

        </section>
    );
};

export default DetalleProyecto;