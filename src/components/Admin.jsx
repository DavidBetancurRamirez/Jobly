
import React from 'react'
import Navbar from '../elements/Navbar'
import Empresac from '../elements/Empresac';

//Esto debe venir del backend realmente
const empresas = [
    {
        nombre: "Bcookie",
        trabajos: "3",
    },
    {
        nombre: "Qroom",
        trabajos: "2",
    }
]

const Admin = () => {
    return (
        <div>
            <Navbar />

            <h1 className='secondary-heading'>
                Empresas Registradas
            </h1>

            <div className="grid-container">
                {empresas.map((empresa, index) => (
                    <div className="grid-item" key={index}>
                        <Empresac info={empresa} />
                    </div>
                ))}
            </div>

            <div className='center-grid'>
                <a href="/formempresa">
                <button className="secondary-button">
                Añadir Empresa
                </button>
                </a>
            </div>

        </div>
    );
};

export default Admin