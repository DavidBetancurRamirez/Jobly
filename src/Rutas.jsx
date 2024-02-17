import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './components/App';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;