import { useState } from "react";

import {obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto } from "../services/proyectoService";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        obtenerProyectos()
    );

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");

    const agregar = () => {

        const nuevoProyecto = {
            
            id: proyectos[proyectos.length - 1].id + 1,
            titulo: titulo,
            categoria: categoria,
            estado: estado
        };

        agregarProyecto(nuevoProyecto);

        setProyectos(
            obtenerProyectos()
        );

        setTitulo("");
        setCategoria("");
        setEstado("");
    };

    const eliminar = (id) => {

        eliminarProyecto(id);

        setProyectos( proyectos.filter( proyecto => proyecto.id !== id ));
    };

    const buscar = (encontrar) => {

        const texto = encontrar.target.value;

        if (texto === "") {

            setProyectos( obtenerProyectos() );

        } else {

            setProyectos( buscarProyecto(texto) );
        }
    };

return (
    <main className="contenedor">

   
        <div className="centrado">
            <h2 id="titulo-proyecto"><strong>Lista de Proyectos</strong></h2>
        </div>


        <div className="margen">

            <input
                type="text"
                placeholder="Buscar proyecto"
                onChange={buscar}
            />

        </div>

        <hr />

        <section className="margen">

            <h3>Agregar Proyecto</h3>

            <div className="formulario-proyecto">

                <input
                    type="text"
                    placeholder="Titulo"
                    value={titulo}
                    onChange={(encontrar) =>
                        setTitulo(encontrar.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Categoria"
                    value={categoria}
                    onChange={(encontrar) =>
                        setCategoria(encontrar.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Estado"
                    value={estado}
                    onChange={(encontrar) =>
                        setEstado(encontrar.target.value)
                    }
                />

                <button onClick={agregar}>
                    Agregar
                </button>

            </div>

        </section>

        <hr />

 
        <section className="contenedor-proyectos">

            {
                proyectos.map((proyecto) => (

                    <article
                        className="proyecto"
                        key={proyecto.id}
                    >

                        <h2>
                            ID: {proyecto.id}
                        </h2>

                        <h3>
                            {proyecto.titulo}
                        </h3>

                        <p>
                            <strong>Categoria:</strong>
                            {' '}
                            {proyecto.categoria}
                        </p>

                        <p>
                            <strong>Estado:</strong>
                            {' '}
                            {proyecto.estado}
                        </p>

                        <button
                            onClick={() =>
                                eliminar(proyecto.id)
                            }
                        >
                            Eliminar
                        </button>

                    </article>

                ))
            }

        </section>

    </main>
);
};

export default ListaProyectos;