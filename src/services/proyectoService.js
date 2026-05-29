const proyectos = [

    {
        id: 1,

        titulo: "Sistema de Biblioteca",

        categoria: "Educacion",

        estado: "En curso",

        descripcion:
            "Sistema diseñado para administrar libros, prestamos y usuarios dentro de una institucion educativa.",

        recursos: {

            pdf: "biblioteca.pdf",

            drive: "Drive Biblioteca",

            github: "GitHub Biblioteca"
        },

        equipo: [

            {
                nombre: "Pablo",
                rol: "Frontend"
            },

            {
                nombre: "Tatiana",
                rol: "Backend"
            }
        ]
    },

    {
        id: 2,

        titulo: "Pagina Web Escolar",

        categoria: "Diseño Web",

        estado: "Finalizado",

        descripcion:
            "Pagina web desarrollada para mostrar informacion institucional, noticias y actividades escolares.",

        recursos: {

            pdf: "web-escolar.pdf",

            drive: "Drive Web Escolar",

            github: "GitHub Web Escolar"
        },

        equipo: [

            {
                nombre: "Moisés",
                rol: "Diseñador"
            },

            {
                nombre: "Agustin",
                rol: "Desarrollador"
            }
        ]
    },

    {
        id: 3,

        titulo: "App de Tareas",

        categoria: "Productividad",

        estado: "Pendiente",

        descripcion:
            "Aplicacion creada para organizar tareas academicas y mejorar la productividad de los estudiantes.",

        recursos: {

            pdf: "app-tareas.pdf",

            drive: "Drive App Tareas",

            github: "GitHub App Tareas"
        },

        equipo: [

            {
                nombre: "Tatiana",
                rol: "Frontend"
            },

            {
                nombre: "Yesarela",
                rol: "Tester"
            }
        ]
    },

    {
        id: 4,

        titulo: "Sistema de Inscripciones",

        categoria: "Administracion",

        estado: "En curso",

        descripcion:
            "Sistema orientado a gestionar inscripciones de estudiantes en cursos y materias universitarias.",

        recursos: {

            pdf: "inscripciones.pdf",

            drive: "Drive Inscripciones",

            github: "GitHub Inscripciones"
        },

        equipo: [

            {
                nombre: "Agustin",
                rol: "Backend"
            },

            {
                nombre: "Yesarela",
                rol: "Base de Datos"
            }
        ]
    },

    {
        id: 5,

        titulo: "Plataforma Educativa",

        categoria: "Educacion",

        estado: "Finalizado",

        descripcion:
            "Plataforma virtual para compartir contenidos, actividades y seguimiento academico.",

        recursos: {

            pdf: "plataforma.pdf",

            drive: "Drive Plataforma",

            github: "GitHub Plataforma"
        },

        equipo: [

            {
                nombre: "Pablo",
                rol: "Frontend"
            },

            {
                nombre: "Moisés",
                rol: "Documentacion"
            }
        ]
    }
];

export const obtenerProyectos = () => [...proyectos];

export const agregarProyecto = (nuevoProyecto) => {

    if (
        nuevoProyecto.titulo === "" ||
        nuevoProyecto.categoria === "" ||
        nuevoProyecto.estado === ""
    ) {

        alert(
            "Complete todos los campos"
        );

        return;
    }

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