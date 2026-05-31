import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="contenedor header-contenido">
        <h1>Gestión de Proyectos Educativos</h1>
      </div>
      <h2 id="header-h2">
        <strong>Proyectos</strong>
      </h2>
      <Nav />
    </header>
  );
};

export default Header;
