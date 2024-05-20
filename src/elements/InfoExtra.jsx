import { useState } from 'react';
import * as S from '../styles/perfil';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever, MdCancel } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const InfoExtra = () => {
    const [adding, setAdding] = useState(false)

    const infoExtra = [
        {
            name: "Experiencia laboral",
            description: "En Empresa XYZ, fui responsable de desarrollar y mantener sitios web para clientes de diversos sectores. Trabajé en equipo para diseñar y crear soluciones web personalizadas, utilizando tecnologías como HTML, CSS, JavaScript y WordPress. Además, colaboré estrechamente con diseñadores y clientes para asegurar la satisfacción del usuario final y cumplir con los plazos de entrega."
        },
        {
            name: "Educación",
            description: "Carrera: Ingeniería de sistemas\nFecha de graduación: 2018\n\nDurante mi carrera en la Universidad ABC, adquirí conocimientos sólidos en programación, bases de datos, diseño de software y desarrollo web. Participé en proyectos prácticos que me permitieron aplicar mis habilidades en situaciones del mundo real y trabajar en equipo para lograr objetivos comunes."
        }
    ]

    const togleAdding = () => {
        setAdding(!adding)
    }
    
    return (
        <S.Info>
            <div>
                <p>Información Extra</p>
                {!adding && (
                    <S.Button
                        type='button'
                        $width="auto"
                        $padding="5px 15px"
                        $margin="0 15px"
                        onClick={togleAdding}
                    >
                        <span>Agregar</span><IoIosAddCircle />
                    </S.Button>
                )}
            </div>
            <section>
                {adding && <InfoExtraEdit setAdding={setAdding} /> }

                {infoExtra.map((info, i) => (
                    <S.IExtra key={i}>
                        <S.CIExtraLeft>
                            <p>{info.name}</p>
                        </S.CIExtraLeft>
                        <S.CIExtraRight>
                            <p className='description'>{info.description}</p>
                            <S.ButtonsEdit className='edit'>
                                <div><MdDeleteForever /></div>
                                <div><FaEdit /></div>
                            </S.ButtonsEdit>
                        </S.CIExtraRight>
                    </S.IExtra>
                ))}
            </section>
        </S.Info>
    )
}

export const InfoExtraEdit = ({ setAdding, nombre="", descripcion="" }) => {
    const [name, setName] = useState(nombre)
    const [description, setDescription] = useState(descripcion)

    const handleCancelar = () => {
        if (setAdding) setAdding(false)
    }

    const handleAgregar = () => {

    }

    return (
        <S.IExtra>
            <S.CIExtraLeft>
                <textarea 
                    required
                    name='nombre'
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </S.CIExtraLeft>
            <S.CIExtraRight>
                <textarea 
                    required
                    name='descripcion'
                    placeholder="Descripción"
                    value={description}
                    rows={3}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <S.CButtons>
                    <S.Button
                        type='button'
                        $option="cancelar"
                        $width="auto"
                        $padding="5px 15px"
                        $margin="0 15px"
                        onClick={handleCancelar}
                    >
                        <span>Cancelar</span><MdCancel />
                    </S.Button>
                    <S.Button
                        type='button'
                        $width="auto"
                        $padding="5px 15px"
                        $margin="0 15px"
                        onClick={handleAgregar}
                    >
                        <span>Agregar</span><IoIosAddCircle />
                    </S.Button>
                </S.CButtons>
            </S.CIExtraRight>
        </S.IExtra>
    )
}

export default InfoExtra;