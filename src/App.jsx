import ListaProyectos from "./components/ListaProyectos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetalleProyecto from "./components/DetalleProyecto";

function App() {

    return (
        <>
            <Header/>
            <DetalleProyecto/>
            <ListaProyectos />
            <Footer/>
        </>
    );
}

export default App;