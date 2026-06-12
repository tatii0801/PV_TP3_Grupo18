import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ListaProyectos from "./components/ListaProyectos";
import DetalleProyecto from "./components/DetalleProyecto";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Página principal */}
        <Route path="/" element={<ListaProyectos />} />

        {/* Detalle */}
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
