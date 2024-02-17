import './styles/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import Rutas from './Rutas.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Distintos URLs de la pagina */}
    <Rutas />

  </React.StrictMode>,
);
