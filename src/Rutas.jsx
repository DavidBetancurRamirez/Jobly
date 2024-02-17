import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './components/App';
import Sesion from "./components/Sesion";

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/sesion" element={<Sesion />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;