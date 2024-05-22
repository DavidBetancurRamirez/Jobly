import { useState } from 'react';
import * as S from '../styles/perfil';
import { MdCancel, MdDeleteForever } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from 'react-icons/fa';
import { axiosPrivate, BASE_URL } from '../api/axios';


const InfoExtra = ({ adding, setAdding, info_id="", nombre="", descripcion="", setUpdate, editarInfo }) => {
    const [edit, setEdit] = useState(adding)
    const [name, setName] = useState(nombre)
    const [description, setDescription] = useState(descripcion)

    const handleAgregar = async () => {
        try {
            await axiosPrivate.post(
                BASE_URL.user + "Provider/extraInfo",
                JSON.stringify({ 
                    extraInfo: {
                        name, 
                        description 
                    }
                })
            )
            
            setAdding(false)
            setEdit(false)
            setUpdate(false)
        } catch (error) {
            console.error(error)
        }
        
    }

    const handleCancelar = () => {
        if (adding) setAdding(false)
        setEdit(false)
    }

    const handleEditar = () => {
        editarInfo({ 
            info_id, 
            info_name: name, 
            info_description: description 
        })
    }

    const handleEliminar = () => {
        // Actualmente no se puede eliminar
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
                            {adding ?
                                <S.Button
                                    type='button'
                                    $width="auto"
                                    $padding="5px 15px"
                                    $margin="0 15px"
                                    onClick={handleAgregar}
                                >
                                    <span>Agregar</span><IoIosAddCircle />
                                </S.Button>
                            :
                                <S.Button
                                    type='button'
                                    $width="auto"
                                    $padding="5px 15px"
                                    $margin="0 15px"
                                    onClick={handleEditar}
                                >
                                    <span>Editar</span><FaEdit />
                                </S.Button>
                            }
                        </S.CButtons>
                    </> 
                : 
                    <>
                        <p>{description}</p>
                        <S.ButtonsEdit className='edit'>
                            <div onClick={handleEliminar}>
                                <MdDeleteForever />
                            </div>
                            <div onClick={() => setEdit(!edit)}>
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