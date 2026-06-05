# PV_TP3_Grupo18

## Trabajo Practico N° 3 - React Parte 1, Parte 2 y Parte 3

### React - Componentes - Hooks - Props - Servicios

---

## Integrantes con sus usuarios de GitHub

Agustin Pablo Portillo DNI: 38976086 LU: APU006548 Usuario GitHub: PortilloAgustin95

Moisés Antonio Israel Flores Navajas DNI: 38973565 LU: 5307 Usuario GitHub: MoisesFloresNavajas

Tatiana Valeria Nieva DNI: 43139597 LU: 3866 Usuario GitHub: tatii0801

Yesarela Febe Manuelita Flores Navajas DNI: 41041662 LU: 6000 Usuario GitHub: YesarelaFloresNavajas

---

## Estructura del Proyecto

### src/components/

Contiene los componentes reutilizables de React:

* Header.jsx
* Nav.jsx
* Footer.jsx
* ListaProyectos.jsx
* ProyectoCard.jsx
* DetalleProyecto.jsx
* RegistroActividad.jsx
* FormularioProyecto.jsx

### src/services/

Contiene la lógica del proyecto:

* proyectoService.js

### src/css/

Contiene los archivos de estilos CSS del proyecto.

### Archivos principales

* App.jsx
* main.jsx

---

## Tecnologías Utilizadas

* React
* Vite
* JavaScript
* JSX
* CSS
* Bootstrap
* Node.js
* npm
* Git
* GitHub

---

## Hooks Utilizados

* useState
* useEffect
* useRef

---

## Comandos Utilizados

### Crear proyecto con Vite

* npm create vite@latest

### Instalar dependencias

* npm install

### Ejecutar proyecto

* npm run dev

---

## Objetivo del Trabajo

Aplicar conceptos fundamentales de React mediante el desarrollo de una aplicación web interactiva utilizando componentes, props, hooks y módulos de JavaScript, siguiendo buenas prácticas de organización, reutilización y separación de responsabilidades.

---

## Descripción

En este trabajo práctico se realizó la migración de una plataforma web desarrollada previamente en HTML y CSS hacia React utilizando Vite.

El proyecto consiste en una aplicación de Gestión de Proyectos Educativos, aplicando conceptos fundamentales de React como:

* Componentes funcionales
* JSX
* Props
* Hooks
* Modularización
* Manipulación dinámica de datos
* Renderizado de listas con .map()
* Eventos en React
* Importación y exportación de módulos
* Desestructuración de objetos
* Separación de lógica y vista

La aplicación permite:

* Visualizar proyectos
* Buscar proyectos en tiempo real
* Agregar proyectos
* Eliminar proyectos
* Ver detalles de cada proyecto
* Mostrar información extendida
* Gestionar información mediante un módulo de servicios

---

## Funcionalidades Implementadas en React Parte 2

* Creación del componente ProyectoCard.jsx
* Uso de props para enviar información entre componentes
* Desestructuración de propiedades de proyectos
* Refactorización del renderizado de proyectos
* Creación del componente DetalleProyecto.jsx
* Visualización de descripción extendida
* Visualización de recursos:

  * PDF
  * Drive
  * GitHub
* Visualización del equipo de trabajo y roles
* Actualización del arreglo de proyectos con nueva información
* Mejora en la organización y reutilización del código

---

## Funcionalidades Implementadas en React Parte 3

### Registro de Actividad

* Creación del componente RegistroActividad.jsx.
* Visualización de la fecha y hora de la última modificación realizada sobre la lista de proyectos.
* Integración del componente al final de ListaProyectos.jsx.

### Uso del Hook useEffect

* Implementación de useEffect para detectar cambios en el estado de proyectos.
* Actualización automática de la fecha y hora cada vez que se agrega o elimina un proyecto.
* Captura de la fecha actual mediante el objeto Date de JavaScript.

### Formato Dinámico de Fecha y Hora

Se implementó el siguiente formato solicitado por la consigna:

Última actualización de la lista: DD/MM/AAAA a las HH:MM hs.

### Optimización con useRef

* Implementación de useRef para evitar la ejecución inicial del useEffect.
* El componente RegistroActividad no se muestra al cargar la página por primera vez.
* La información aparece únicamente luego de agregar o eliminar proyectos.

### Aislamiento del Filtro de Búsqueda

* El filtro de búsqueda quedó aislado del registro de actividad.
* Buscar proyectos no modifica la fecha y hora de la última actualización.
* El registro solo cambia cuando ocurre una modificación real en la lista.

### Componentización del Formulario

* Creación del componente FormularioProyecto.jsx.
* Migración del estado local del formulario al nuevo componente.
* Migración de la función handleChange al componente hijo.
* Implementación de elevación de estado mediante callback.
* Envío del nuevo proyecto desde el componente hijo al componente padre.
* Mantenimiento del funcionamiento de alta de proyectos.

---

## Conclusión

Durante el desarrollo del Trabajo Práctico N° 3 se aplicaron conceptos fundamentales de React relacionados con componentes, props, hooks, servicios y manejo de estados.

Además, se incorporaron hooks avanzados como useEffect y useRef para controlar efectos secundarios y optimizar el comportamiento de la aplicación.

La aplicación final permite gestionar proyectos educativos mediante una interfaz dinámica, organizada y reutilizable, siguiendo buenas prácticas de desarrollo y componentización.
