
import React from 'react'
import Navbar from '../elements/Navbar'
import Loadempr from '../elements/Loadempr';
import styled from 'styled-components';
import Trabajoc from '../elements/Trabajoc';

const iempresa = {
    nombre: "Bcookie",
    contacto: "Mateo Asmar +57 213 992 8129",
    descripcion: "Bcookie es una empresa que vende cookie dough con varios puntos de venta",
}

const trabajos = [
    {
        cargo: "Cajero",
        fecha: "Septiembre 12 - Septiembre 15",
        remuneracion: 150.000,
        descripcion: "Se busca cajero para la sede del mall la florida"
    },
    {
        cargo: "Mesero",
        fecha: "Jueves 12 de Agosto",
        remuneracion: 80.000,
        descripcion: "Se busca mesero el dia 12 de agosto para un evento en llanogrande. Se trabajara de 5pm a 9pm"
    },
]


const AltHeading = styled.h1`
  /* Alt Heading Styling */
  color: #333; /* Dark gray color */
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px; /* Add space below heading */
`;

const Empresa = () => {
    return (
        <div>
            <Navbar />

            <Loadempr info={iempresa} />

            <AltHeading>
                Trabajos Publicados
            </AltHeading>

            <div className="grid-container-2">
                {trabajos.map((trabajo, index) => (
                    <div className="grid-item" key={index}>
                        <Trabajoc props={trabajo} />
                    </div>
                ))}
            </div>

            <div className='center-grid'>
                <a href="/formtrabajo/ide">
                <button className="secondary-button" >
                    Añadir Trabajo
                </button>
                </a>
            </div>
        </div>
    )
}

export default Empresa;