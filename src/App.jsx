import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./views/Dashboard";
import ListaProyectos from "./views/ListaProyectos";
import DetalleProyecto from "./views/DetalleProyecto";
import PerfilUsuario from "./views/PerfilUsuario";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Proyectos */}
        <Route path="/proyectos" element={<ListaProyectos />} />
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />

        {/* Perfil */}
        <Route path="/perfil" element={<PerfilUsuario />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;