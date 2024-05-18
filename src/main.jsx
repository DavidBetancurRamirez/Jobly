import './styles/main.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthProvider.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersistLogin from './components/Usuario/PersistLogin.jsx';
import { rutasPublicas, rutasProtegidas } from './utils/rutas.jsx';
import { RequiereRole } from './components/Usuario/PagProtegida.jsx';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

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
                    <Route element={<PersistLogin />}>
                    
                        {/* Rutas publicas  */}
                        {Object.keys(rutasPublicas).map((routeKey, index) => (
                            <Route
                                key={index}
                                path={rutasPublicas[routeKey].path}
                                element={rutasPublicas[routeKey].element}
                            />
                        ))}

                        {/* Rutas protegidas */}
                        <Route element={<RequiereRole allowedRoles={[0]} />}>
                            {Object.keys(rutasProtegidas).map((routeKey, index) => (
                                <Route
                                    key={index}
                                    path={rutasProtegidas[routeKey].path}
                                    element={rutasProtegidas[routeKey].element}
                                />
                            ))}
                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>

        </AuthProvider>

    </React.StrictMode>,
);
