import Menu from "./Nav";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

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

        <Menu />
      </div>
    </header>
  );
};

export default Header;