import { useEffect, useState } from 'react';
import * as S from '../../styles/perfil';
import Rating from "@mui/material/Rating";
import Layout from '../../elements/Layout';
import Google from '../../images/google.png';
import { IoIosAddCircle } from "react-icons/io";
import InfoExtra from '../../elements/InfoExtra';
import CaraFeliz from '../../images/FotoPerfilPrueba.jpg';
import { axiosPrivate, BASE_URL } from '../../api/axios';
import InfoBasica from '../../elements/InfoBasica';


const Perfil = () => {

    return (
        <Layout>
            <S.CPrincipal>
                <InfoBasica />

                <S.CInfo>
                    <Certificaciones />
                    <InformacionExtra />
                    <Reviews />
                </S.CInfo>
            </S.CPrincipal>
        </Layout>
    );
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

    const editarInfo = async ({ info_id, info_name, info_description }) => {
        try {
            const extra_info = infoExtra.map(info => 
                info.info_id === info_id 
                    ? { ...info, info_name, info_description } 
                    : info
            );

            await axiosPrivate.put(
                BASE_URL.user + "Provider/extraInfo",
                JSON.stringify({ 
                    infoToUpdate: extra_info.reverse()
                })
            )

            setUpdate(false)
        } catch (error) {
            console.error(error)
        }
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
                            info_id={info.info_id}
                            nombre={info.info_name}
                            descripcion={info.info_description}
                            setUpdate={setUpdate}
                            editarInfo={editarInfo}
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