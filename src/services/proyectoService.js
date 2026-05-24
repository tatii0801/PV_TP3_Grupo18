const proyectos = [
    {
        id: 1,
        titulo: "Sistema de Biblioteca",
        categoria: "Educacion",
        estado: "En curso"
    },
    {
        id: 2,
        titulo: "Pagina Web Escolar",
        categoria: "Diseño Web",
        estado: "Finalizado"
    },
    {
        id: 3,
        titulo: "App de Tareas",
        categoria: "Productividad",
        estado: "Pendiente"
    },
    {
        id: 4,
        titulo: "Sistema de Inscripciones",
        categoria: "Administracion",
        estado: "En curso"
    },
    {
        id: 5,
        titulo: "Plataforma Educativa",
        categoria: "Educacion",
        estado: "Finalizado"
    }
];

export const obtenerProyectos = () => proyectos;

export const agregarProyecto = (nuevoProyecto) => {

    console.log(
        `Se agrego el proyecto ${nuevoProyecto.titulo}`
    );

    proyectos.push(nuevoProyecto);
};

export const eliminarProyecto = (id) => {

    console.log(
        `Se eliminara el proyecto con id ${id}`
    );

    proyectos.splice(
        proyectos.findIndex(
            proyecto => proyecto.id === id
        ),
        1
    );
};

export const buscarProyecto = (texto) => {

    return proyectos.filter(
        proyecto =>
            proyecto.titulo
                .toLowerCase()
                .includes(texto.toLowerCase())
    );
};