import './styles/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import { AuthProvider } from './context/AuthProvider.jsx';

import App from './components/App.jsx';
import Sesion from './components/Sesion.jsx';
import Perfil from './components/Perfil.jsx';
import Error404 from './components/Error404.jsx';
import Recuperar from './components/Recuperar.jsx';
import Estudiante from './components/Estudiante.jsx';
import RequiereAuth from './elements/RequiereAuth.jsx';
import PersistLogin from './elements/PersistLogin.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        {/* Contextos */}
        <AuthProvider>

            {/* URLs de la app */}
            <BrowserRouter>
                <Routes>
                    <Route path='/recuperar-contraseña' element={<Recuperar />} />
                    <Route element={<PersistLogin />}>
                        {/* Rutas publicas */}
                        <Route path='/' element={<App />} />
                        <Route path='/sesion' element={<Sesion />} />
                        <Route path='/perfil' element={<Perfil />} />
                        <Route path='/estudiante' element={<Estudiante />} />
                        <Route path='/unauthorized' element={<div>No esta autorizado</div>} />

                        {/* Rutas protegidas */}
                        <Route element={<RequiereAuth />}>
                            <Route path='/protegida' element={<h2>Esta pagina esta protegida, solo los que hallan iniciado sesion pueden verla</h2>} />
                        </Route>

                        {/* Ruta no encontrada */}
                        <Route path='*' element={<Error404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </AuthProvider>

    </React.StrictMode>,
);
