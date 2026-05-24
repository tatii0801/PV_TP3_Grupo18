import { useState } from "react";
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from "../services/proyectoService";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        obtenerProyectos()
    );

    const eliminar = (id) => {

        eliminarProyecto(id);

        setProyectos(proyectos => proyectos.filter(proyectos => proyectos.id !== id));
    };

    const buscar = (e) => {

        const texto = e.target.value;

        if (texto === " ") {

            setProyectos( obtenerProyectos() );

        } else {

            setProyectos(
                buscarProyecto(texto)
            );
        }
    };

    return (
        <main>

            <h1>Lista de Proyectos</h1>

            <input
                type="text"
                placeholder="Buscar proyecto"
                onChange={buscar}
            />

            {
                proyectos.map((proyecto) => (

                    <div key={proyecto.id}>

                        <h2>{proyecto.titulo}</h2>

                        <p>
                            Categoria: {proyecto.categoria}
                        </p>

                        <p>
                            Estado: {proyecto.estado}
                        </p>

                        <button
                            onClick={() =>
                                eliminar(proyecto.id)
                            }
                        >
                            Eliminar
                        </button>

                    </div>
                ))
            }

        </main>
    );
};

export default ListaProyectos;