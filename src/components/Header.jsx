import { useContext } from "react";

import Menu from "./Nav";
import { useLocation } from "react-router-dom";

import { UsuarioContext } from "../context/UsuarioContext";
const Header = () => {
  const location = useLocation();

  // Obtiene datos del usuario desde el contexto
  const { usuario } = useContext(UsuarioContext);

  let tituloSeccion = "Proyectos";

  if (location.pathname === "/" || location.pathname === "/dashboard") {
    tituloSeccion = "Dashboard";
  } else if (location.pathname === "/proyectos") {
    tituloSeccion = "Proyectos";
  } else if (location.pathname.startsWith("/proyectos/")) {
    tituloSeccion = "Detalle del Proyecto";
  } else if (location.pathname === "/perfil") {
    tituloSeccion = "Perfil";
  }

  return (
    <header>
      <div className="header-contenido">
        <div>
          <h1>Gestión de Proyectos Educativos</h1>

          <h2 id="header-h2">
            <strong>{tituloSeccion}</strong>
          </h2>
        </div>
      </div>

      {/* Información dinámica */}
      <div
        style={{
          textAlign: "right",
          marginRight: "20px",
        }}
      >
        {/* EVITAR ERROR SI usuario NO EXISTE */}
        <strong>{usuario?.nombre}</strong>

        <br />

        <small>{usuario?.rol}</small>
      </div>

      <Menu />
    </header>
  );
};

export default Header;
