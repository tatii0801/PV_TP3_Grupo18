import Menu from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="header-contenido">
        <div>
          <h1>Gestión de Proyectos Educativos</h1>
          <h2 id="header-h2">
            <strong>Proyectos</strong>
          </h2>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
