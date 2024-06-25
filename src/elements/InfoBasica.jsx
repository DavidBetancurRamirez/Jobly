import * as S from '../styles/perfil';
import { useEffect, useState } from 'react';
import Foto from "../images/anonymous.png";
import { axiosPrivate, BASE_URL } from '../api/axios';
import validaciones, { validarEmail, validarName } from '../utils/validaciones';

const InfoBasica = () => {
    const [info, setInfo] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [update, setUpdate] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Puedes usar await aquí
                const response = await axiosPrivate.get(
                    BASE_URL.user + "Provider/basicInfo"
                );

                if (!response?.data) {
                    console.log("Error recibiendo los datos")
                    return;
                }

                // console.log(response.data)
                setInfo(response.data)
                setUpdate(true)
            } catch(e) {
                console.log(e)
            }
        }

        fetchData();
    }, [update])

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <S.CInfoBasica>
            <S.Imagen>
                <img src={Foto} alt='Foto de perfil' />
            </S.Imagen>

            {isEditing ?
                <EditInfoBasica 
                    info={info}
                    toggleEdit={toggleEdit}
                    setUpdate={setUpdate}
                />
            :
                info && (
                    <S.Datos>
                        <p>{info?.name}</p>
                        <p>{info?.email}</p>
                        <p>{info?.phone}</p>
                        <S.Button 
                            $width="90%"
                            onClick={toggleEdit}
                        >
                            Editar informacion
                        </S.Button>
                    </S.Datos>
                )
            }
        </S.CInfoBasica>
    )
}

const EditInfoBasica = ({ info, toggleEdit, setUpdate }) => {
    const [name, setName] = useState(info?.name)
    const [email, setEmail] = useState(info?.email)
    const [phone, setPhone] = useState(info?.phone ? info?.phone : "")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const funcionesValidacion = [validarName, validarEmail]
            const [errorValidacion] = validaciones({name, email, phone, funcionesValidacion})

            if (errorValidacion) {
                console.log(errorValidacion)
                return;
            }

            await axiosPrivate.put(
                BASE_URL.user + "Provider/basicInfo",
                JSON.stringify({ 
                    infoToUpdate: {
                        name,
                        phone
                    }
                })
            )

            setUpdate(false)
            toggleEdit()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <S.EditInfoBasica onSubmit={handleSubmit}>
            <input 
                required
                autoComplete="username"
                type="text"
                id = "username"
                placeholder="Nombre Usuario"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                disabled
                autoComplete="email"
                type="email"
                id = "email"
                placeholder="Correo Electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                autoComplete="phone"
                type="text"
                id = "phone"
                placeholder="Num telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <S.CButtons>
                <S.Button 
                    type="button" 
                    $option='cancelar'
                    onClick={toggleEdit}
                >
                    Cancelar
                </S.Button>
                <S.Button 
                    type="submit" 
                    $option='guardar'
                >
                    Guardar
                </S.Button>
            </S.CButtons>
        </S.EditInfoBasica>
    )
}

export default InfoBasica