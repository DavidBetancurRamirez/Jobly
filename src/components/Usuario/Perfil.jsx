import { useEffect, useState } from 'react';
import * as S from '../../styles/perfil';
import Rating from "@mui/material/Rating";
import Layout from '../../elements/Layout';
import Google from '../../images/google.png';
import Foto from "../../images/anonymous.png";
import { IoIosAddCircle } from "react-icons/io";
import InfoExtra from '../../elements/InfoExtra';
import CaraFeliz from '../../images/FotoPerfilPrueba.jpg';
import { axiosPrivate, BASE_URL } from '../../api/axios';


const Perfil = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [info, setInfo] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // Puedes usar await aquí
                const response = await axiosPrivate.get(
                    BASE_URL.user + "Provider/basicInfo"
                );
                setInfo(response.data);
            } catch(e) {
                console.log(e)
            }
        }

        fetchData();
    }, [])

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <Layout>
            <S.CPrincipal>
                <S.CInfoBasica>
                    <S.Imagen>
                        <img src={Foto} alt='Foto de perfil' />
                    </S.Imagen>

                    {isEditing ?
                        <EditInfoBasica toggleEdit={toggleEdit} />
                    :
                        <S.Datos>
                            <p>{info ? info.name : "Anonymous"}</p>
                            <p>{info ? info.email : "anonymous@anonimato.com"}</p>
                            <p>{info ? info.phone : "3046295800"}</p>
                            <S.Button 
                                $width="90%"
                                onClick={toggleEdit}
                            >
                                Editar informacion
                            </S.Button>
                        </S.Datos>
                    }
                </S.CInfoBasica>

                <S.CInfo>
                    {/* <Certificaciones /> */}
                    <InformacionExtra />
                    {/* <Reviews /> */}
                </S.CInfo>
            </S.CPrincipal>
        </Layout>
    );
}


const EditInfoBasica = ({ toggleEdit }) => {
    const [name, setName] = useState("Anonymous")
    const [email, setEmail] = useState("anonymous@anonimato.com")
    const [phone, setPhone] = useState("3046295800")

    const handleSubmit = async (e) => {
        e.preventDefault();
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

const Certificaciones = ({ certificaciones }) => {
    const certificados = [
        {
            name: "Full Stack REACT-NODE-MONGO",
            type: "Desarrollo web"
        },
        {
            name: "Bombero",
            type: "Proteccion de vida"
        },
        {
            name: "Porte de armas",
            type: "Proteccion de vida"
        },
        {
            name: "Manejo de madera estilada",
            type: "Carpinteria"
        },
        {
            name: "Desarrollador de video juegos",
            type: "Programación"
        }
    ]

    return (
        <S.Info>
            <div>
                <p>Certificaciones</p>
            </div>
            <S.CCertificados>
                {certificados.map((certificado, i) => (
                    <S.Certificado key={i}>
                        <div className='name'>{certificado.name}</div>
                        <div className='type'>{certificado.type}</div>
                    </S.Certificado>
                ))}
            </S.CCertificados>
        </S.Info>
    )
}

const InformacionExtra = () => {
    const [adding, setAdding] = useState(false);
    const [update, setUpdate] = useState(true);
    const [infoExtra, setInfoExtra] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPrivate.get(
                    BASE_URL.user + "Provider/extraInfo"
                );
                setInfoExtra(response?.data?.extra_info?.reverse());
                setUpdate(true)
            } catch(e) {
                console.log(e)
            }
        }

        fetchData();
    }, [update])

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
                {adding && 
                    <InfoExtra 
                        adding={adding}
                        setAdding={setAdding}
                        setUpdate={setUpdate}
                    /> 
                }

                {update && infoExtra?.length > 0 &&
                    infoExtra.map((info, i) => (
                        <InfoExtra 
                            key={i}
                            id={info.info_id}
                            nombre={info.info_name}
                            descripcion={info.info_description}
                            setUpdate={setUpdate}
                        /> 
                    ))
                }
            </section>
        </S.Info>
    )
}

const Reviews = ({ review }) => {
    const reviews = [
        {
            autor: {
                name: "Google",
                img: Google
            },
            date: "30/04/2024",
            rating: 5,
            description: "¡Increíble experiencia trabajando con Anonymous! Encontramos a Anonymous a través de la plataforma y su perfil destacó de inmediato. Su habilidad para trabajar en equipo y su capacidad para adaptarse a los cambios fueron realmente impresionantes. No solo entregó el proyecto a tiempo, sino que también superó nuestras expectativas en términos de calidad y creatividad. Definitivamente lo recomendaría para cualquier proyecto de desarrollo web"
        },
        {
            autor: {
                name: "Carlos Martínez",
                img: CaraFeliz
            },
            date: "20/04/2024",
            rating: 4,
            description: "Trabajar con Anonymous fue una experiencia muy positiva en general. Su conocimiento técnico y su capacidad para resolver problemas fueron impresionantes. Cumplió con los plazos establecidos y siempre estuvo dispuesto a escuchar nuestras necesidades. Sin embargo, hubo algunos detalles de diseño que podrían haberse mejorado. Aún así, recomendaría a Anonymous para cualquier proyecto de desarrollo web, especialmente para aquellos que requieren una solución rápida y eficiente"
        }
    ]
    
    return (
        <S.Info>
            <div>
                <p>Reviews</p>
            </div>
            <section>
                {reviews.map((review, i) => (
                    <S.Review key={i}>
                        <S.CReviewInfo>

                            <S.CReviewUser>
                                <S.Imagen
                                    $width={"30px"}
                                    $height={"30px"}
                                >
                                    <img src={review.autor.img} alt='Foto de perfil' />
                                </S.Imagen>
                                <div>
                                    <p>{review.autor.name}</p>
                                    <span className='date into'>{review.date}</span>
                                </div>
                            </S.CReviewUser>

                            <span className='date midle'>{review.date}</span>

                            <div className='estrellas'>
                                <Rating
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                        </S.CReviewInfo>

                        <p>{review.description}</p>
                    </S.Review>
                ))}
            </section>
        </S.Info>
    )
}


export default Perfil