import { Navbar } from "./components/navbar";
import { Inicio } from "./components/inicio";
import { Proyectos } from "./components/proyectos";
import { Contacto } from "./components/contacto";

export const App = () => {
    return (
        <div className="scroll-smooth">
            <Navbar />
            <Inicio />
            <Proyectos />
            <Contacto />
        </div>
    )
}
