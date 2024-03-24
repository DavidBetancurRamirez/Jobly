import './styles/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

// import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthProvider.jsx';

import { RouterProvider } from "react-router-dom";
import { router } from './utils/routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        {/* Contextos */}
        <AuthProvider>

            {/* Distintos URLs de la pagina */}
            <RouterProvider router={router} />

        </AuthProvider>

    </React.StrictMode>,
);
