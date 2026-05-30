const proyectos = [

    {
        id: 1,

        titulo: "Sistema de Biblioteca",

        categoria: "Educacion",

        estado: "En curso",

        descripcion:
            `Sistema diseñado para administrar libros, préstamos y usuarios dentro de una institución educativa. Permite registrar, organizar y consultar el catálogo bibliográfico de manera eficiente, facilitando el acceso a la información y el control de los recursos disponibles.

Además, gestiona los préstamos y devoluciones de libros, manteniendo un seguimiento actualizado de los usuarios y sus movimientos. Esto contribuye a optimizar la administración de la biblioteca, mejorar el servicio a la comunidad educativa y garantizar un control adecuado del material bibliográfico.`,

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
            `Página web desarrollada para mostrar información institucional, brindando a estudiantes, docentes y familias un acceso rápido y organizado a los datos más relevantes de la institución educativa. Su diseño facilita la navegación y la consulta de contenidos de manera clara y accesible.

            Además, permite publicar noticias, eventos y actividades escolares, manteniendo informada a toda la comunidad educativa sobre las novedades y acontecimientos importantes. De esta forma, fortalece la comunicación y promueve una mayor participación en las actividades de la institución.`,

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
            `Aplicación creada para organizar tareas académicas y mejorar la productividad de los estudiantes. Permite gestionar actividades, establecer prioridades y llevar un seguimiento de las responsabilidades escolares de manera sencilla y eficiente.

            Además, ofrece herramientas que ayudan a planificar el tiempo y mantener un mejor control de las fechas de entrega, contribuyendo a una organización más efectiva. De esta manera, facilita el cumplimiento de los objetivos académicos y fomenta hábitos de estudio más productivos.`,

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
            `Sistema orientado a gestionar las inscripciones de estudiantes en cursos y materias universitarias. Permite registrar, actualizar y consultar la información académica de manera organizada, facilitando el proceso de matriculación dentro de la institución.

            Además, brinda herramientas para administrar la disponibilidad de cursos, controlar los cupos y realizar un seguimiento de las inscripciones efectuadas. Esto contribuye a optimizar la gestión académica y mejorar la experiencia tanto de los estudiantes como del personal administrativo.`,

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
            `Plataforma virtual diseñada para compartir contenidos educativos, facilitando el acceso a materiales de estudio, recursos didácticos y documentos relevantes para el proceso de aprendizaje. Su entorno digital permite una interacción más dinámica entre estudiantes y docentes.

Además, incorpora herramientas para la gestión de actividades y el seguimiento académico, permitiendo monitorear el progreso de los estudiantes, registrar evaluaciones y mantener una comunicación constante. De esta manera, contribuye a fortalecer la enseñanza y mejorar la organización de las actividades educativas.`,

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