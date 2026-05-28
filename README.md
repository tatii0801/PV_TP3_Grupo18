# PV_TP3_Grupo18

## Trabajo Practico N° 3 - React Parte 1 y Parte 2

### React - Componentes - Hooks - Props - Servicios

---

## Integrantes con sus usuarios de GitHub

* Agustin Pablo Portillo DNI: 38976086 LU: APU006548 Usuario GitHub: PortilloAgustin95

* Josias Daniel Rodriguez DNI: 42748497 LU: 6682 Usuario GitHub: 42748497

* Moises Antonio Israel Flores Navajas DNI: 38973565 LU: 5307 Usuario GitHub: MoisesFloresNavajas

* Tatiana Valeria Nieva DNI: 43139597 LU: 3866 Usuario GitHub: tatii0801

* Yesarela Febe Manuelita Flores Navajas DNI: 41041662 LU: 6000 Usuario GitHub: YesarelaFloresNavajas

---

## Estructura del Proyecto

* `src/components/`
  Contiene los componentes reutilizables de React:

  * Header.jsx
  * Nav.jsx
  * Footer.jsx
  * ListaProyectos.jsx
  * ProyectoCard.jsx
  * DetalleProyecto.jsx

* `src/services/`
  Contiene la logica del proyecto:

  * proyectoService.js

* `src/css/`
  Contiene los archivos de estilos CSS del proyecto.

* `src/App.jsx`
  Componente principal de la aplicacion.

* `src/main.jsx`
  Punto de entrada principal de React.

---

## Tecnologias Utilizadas

* React
* Vite
* JavaScript
* JSX
* CSS
* Node.js
* npm
* Git
* GitHub

---

## Comandos Utilizados

Crear proyecto con Vite:

* npm create vite@latest

Instalar dependencias:

* npm install

Ejecutar proyecto:

* npm run dev

---

## Objetivo del Trabajo

Aplicar conceptos fundamentales de React mediante el desarrollo de una aplicacion web interactiva utilizando componentes, props, hooks y modulos de JavaScript, siguiendo buenas practicas de organizacion, reutilizacion y separacion de responsabilidades.

---

## Descripcion

En este trabajo practico se realizo la migracion de una plataforma web desarrollada previamente en HTML y CSS hacia React utilizando Vite.

El proyecto consiste en una aplicacion de Gestion de Proyectos Educativos, aplicando conceptos fundamentales de React como:

* Componentes funcionales
* JSX
* Props
* Hooks (`useState`)
* Modularizacion
* Manipulacion dinamica de datos
* Renderizado de listas con `.map()`
* Eventos en React
* Importacion y exportacion de modulos
* Desestructuracion de objetos
* Separacion de logica y vista

La aplicacion permite:

* Visualizar proyectos
* Buscar proyectos en tiempo real
* Agregar proyectos
* Eliminar proyectos
* Ver detalles de cada proyecto
* Mostrar informacion extendida
* Gestionar informacion mediante un modulo de servicios

---

## Funcionalidades Implementadas en React Parte 2

* Creacion del componente `ProyectoCard.jsx`
* Uso de props para enviar informacion entre componentes
* Desestructuracion de propiedades de proyectos
* Refactorizacion del renderizado de proyectos
* Creacion del componente `DetalleProyecto.jsx`
* Visualizacion de descripcion extendida
* Visualizacion de recursos:

  * PDF
  * Drive
  * GitHub
  
* Visualizacion del equipo de trabajo y roles
* Actualizacion del arreglo de proyectos con nueva informacion
* Mejora en la organizacion y reutilizacion del codigo
