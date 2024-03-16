import './styles/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
// import { GoogleOAuthProvider } from '@react-oauth/google';

import Rutas from './Rutas.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Contextos */}
    {/* <GoogleOAuthProvider clientId="<your_client_id>"> */}

      {/* Distintos URLs de la pagina */}
      <Rutas />

    {/* </GoogleOAuthProvider> */}

  </React.StrictMode>,
);
