import { useState } from 'react';
import * as S from '../styles/perfil';
import { MdCancel, MdDeleteForever } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from 'react-icons/fa';


const InfoExtra = ({ adding, setAdding, nombre="", descripcion="" }) => {
    const [edit, setEdit] = useState(adding)
    const [name, setName] = useState(nombre)
    const [description, setDescription] = useState(descripcion)

    const handleAgregar = () => {

    }

    const handleCancelar = () => {
        if (adding) setAdding(false)
        setEdit(false)
    }

    const handleEliminar = () => {

    }

    return (
        <S.IExtra>
            <S.CIExtraLeft>
                {edit ?
                    <textarea 
                        required
                        name='nombre'
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                :
                    <p>{name}</p>
                }
            </S.CIExtraLeft>
            <S.CIExtraRight>
                {edit ? 
                    <>
                        <textarea 
                            required
                            name='descripcion'
                            placeholder="Descripción"
                            value={description}
                            rows={4}
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
                    </> 
                : 
                    <>
                        <p>{description}</p>
                        <S.ButtonsEdit className='edit'>
                            <div
                                onClick={handleEliminar}
                            >
                                <MdDeleteForever />
                            </div>
                            <div
                                onClick={() => setEdit(!edit)}
                            >
                                <FaEdit />
                            </div>
                        </S.ButtonsEdit>
                    </>
                }
            </S.CIExtraRight>
        </S.IExtra>
    )
}

export default InfoExtra;