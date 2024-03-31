import './styles/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import { AuthProvider } from './context/AuthProvider.jsx';

import App from './components/App.jsx';
import Sesion from './components/Sesion.jsx';
import Loader from './elements/Loader.jsx';
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
                    <Route path='/sesion' element={<Sesion />} />
                    <Route element={<PersistLogin />}>
                        {/* Rutas publicas */}
                        <Route path='/' element={<App />} />
                        <Route path='/unauthorized' element={<div>No esta autorizado</div>} />

                        {/* Rutas protegidas */}
                        <Route element={<RequiereAuth />}>
                            <Route path='/loader' element={<Loader />} />
                        </Route>

                        {/* Ruta no encontrada */}
                        <Route path='*' element={<div>Error 404</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </AuthProvider>

    </React.StrictMode>,
);
