# PV_TP3_Grupo18

## Trabajo Practico N° 3 - React Parte 1, Parte 2, Parte 3, Parte 4 y Parte 5

### React - Componentes - Hooks - Props - Servicios - React Router - SPA - Context API - LocalStorage - React Bootstrap

---

## Integrantes con sus usuarios de GitHub

Agustin Pablo Portillo
DNI: 38976086
LU: APU006548
Usuario GitHub: PortilloAgustin95

Moisés Antonio Israel Flores Navajas
DNI: 38973565
LU: 5307
Usuario GitHub: MoisesFloresNavajas

Tatiana Valeria Nieva
DNI: 43139597
LU: 3866
Usuario GitHub: tatii0801

Yesarela Febe Manuelita Flores Navajas
DNI: 41041662
LU: 6000
Usuario GitHub: YesarelaFloresNavajas

---

# Estructura del Proyecto

## src/components/

Contiene componentes reutilizables:

* Header.jsx
* Nav.jsx
* Footer.jsx
* ProyectoCard.jsx
* RegistroActividad.jsx
* FormularioProyecto.jsx

---

## src/views/

Contiene las vistas principales:

* Dashboard.jsx
* ListaProyectos.jsx
* DetalleProyecto.jsx
* PerfilUsuario.jsx

---

## src/services/

Contiene la lógica del proyecto:

* proyectoService.js

---

## src/context/

Contiene el manejo del estado global:

* UsuarioContext.jsx

---

## src/css/

Contiene estilos CSS.

---

## Archivos principales

* App.jsx
* main.jsx

---

# Tecnologías Utilizadas

* React
* Vite
* JavaScript
* JSX
* CSS
* React Router DOM
* React Bootstrap
* Context API
* LocalStorage
* Node.js
* npm
* Git
* GitHub

---

# Hooks Utilizados

* useState
* useEffect
* useRef
* useParams
* useContext

---

# Comandos Utilizados

### Crear proyecto

```bash
npm create vite@latest
```

### Instalar dependencias

```bash
npm install
```

### Instalar React Router

```bash
npm install react-router-dom
```

### Instalar React Bootstrap

```bash
npm install react-bootstrap bootstrap
```

### Ejecutar proyecto

```bash
npm run dev
```

---

# Objetivo del Trabajo

Aplicar conceptos fundamentales y avanzados de React mediante el desarrollo de una aplicación web interactiva utilizando componentes, hooks, rutas dinámicas, estado global y persistencia de datos.

---

# Descripción

Este trabajo práctico consistió en desarrollar una aplicación de Gestión de Proyectos Educativos utilizando React y Vite.

Durante las distintas partes del trabajo se incorporaron conceptos como:

* Componentes funcionales
* JSX
* Props
* Hooks
* Servicios
* React Router
* Context API
* Estado global
* Persistencia con LocalStorage
* Diseño mediante React Bootstrap

La aplicación permite:

* Visualizar proyectos
* Buscar proyectos
* Agregar proyectos
* Eliminar proyectos
* Ver detalle por URL
* Gestionar perfil de usuario
* Persistir información

---

# Funcionalidades Implementadas en React Parte 2

* Creación de ProyectoCard
* Uso de Props
* Desestructuración
* Refactorización del renderizado
* Creación de DetalleProyecto
* Visualización de recursos
* Visualización del equipo

---

# Funcionalidades Implementadas en React Parte 3

### Registro de Actividad

* Componente RegistroActividad
* Fecha y hora de última actualización

### Hooks

* Implementación de useEffect
* Implementación de useRef

### Formulario

* Creación de FormularioProyecto
* Elevación del estado
* Validaciones

---

# Funcionalidades Implementadas en React Parte 4

## React Router

* Navegación SPA
* Configuración de rutas

Rutas:

* /dashboard
* /proyectos
* /proyectos/:id
* /perfil

### Rutas Dinámicas

* Implementación de useParams
* Obtención del proyecto desde URL
* Conservación del detalle al actualizar

### Persistencia de Proyectos

* Uso de LocalStorage
* Conservación de proyectos agregados

---

# Funcionalidades Implementadas en React Parte 5

## Implementación de Context API

Se incorporó Context API para compartir información entre componentes sin utilizar Props.

Se creó:

```plaintext
src/context/UsuarioContext.jsx
```

---

## Estado Global del Usuario

Se creó un estado centralizado para almacenar:

* Nombre
* DNI
* Rol
* Institución

Además se implementó:

```js
actualizarPerfil()
```

para modificar el perfil desde cualquier componente.

---

## UsuarioProvider

La aplicación fue envuelta mediante:

```jsx
<UsuarioProvider>
```

en App.jsx.

Esto permitió compartir datos entre:

* Header
* PerfilUsuario
* Rutas
* Componentes

---

## Consumo del Contexto Global

Se utilizó:

```js
useContext()
```

para obtener información del usuario.

Componentes conectados:

* Header.jsx
* PerfilUsuario.jsx

---

## Encabezado Dinámico

Header ahora muestra:

* Nombre del usuario
* Rol

Los cambios aparecen automáticamente cuando el perfil se actualiza.

---

## Refactorización Dinámica del Perfil

PerfilUsuario dejó de utilizar datos fijos.

La vista obtiene los datos directamente desde Context.

Se utilizaron componentes visuales de React Bootstrap:

* Card
* Container
* Form
* Button
* Badge
* Row
* Col

---

## Interactividad del Perfil

Se implementó:

* Botón Editar Perfil
* Formulario dinámico
* Botón Guardar Cambios

Permite modificar:

* Nombre
* DNI
* Rol
* Institución

Los cambios impactan inmediatamente en Header y Perfil.

---

## Persistencia del Estado Global

Se utilizó:

```js
useEffect()
```

junto con:

```js
localStorage
```

Cada cambio del usuario se guarda mediante:

```js
JSON.stringify(usuario)
```

Al iniciar:

* Si existen datos → carga LocalStorage
* Si no → carga datos por defecto

Esto permite mantener el perfil después de presionar F5.

---

# Conclusión

Durante el desarrollo del Trabajo Práctico N° 3 se construyó una aplicación SPA completa utilizando React.

Se aplicaron conceptos relacionados con:

* Componentes
* Hooks
* Servicios
* React Router
* Context API
* Estado global
* Persistencia con LocalStorage

La aplicación final permite administrar proyectos educativos y gestionar el perfil del usuario mediante una interfaz dinámica, organizada y reutilizable siguiendo buenas prácticas de desarrollo.
