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
        <main>

            <h1>Lista de Proyectos</h1>

            <input
                type="text"
                placeholder="Buscar proyecto"
                onChange={buscar}
            />

            <hr />

            <h2>Agregar Proyecto</h2>

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

            <hr />

            {
                proyectos.map((proyecto) => (
                    <div
                        key={proyecto.id}
                        style={{ marginBottom: "20px" }}
                        >

                        <h2>
                            ID: {proyecto.id}
                        </h2>
                    
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