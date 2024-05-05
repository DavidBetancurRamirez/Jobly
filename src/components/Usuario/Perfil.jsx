import * as S from '../../styles/perfil';
import Rating from "@mui/material/Rating";
import Layout from '../../elements/Layout';
import Google from '../../images/google.png';
import Foto from "../../images/anonymous.png";
import CaraFeliz from '../../images/FotoPerfilPrueba.jpg';


const Perfil = () => {
    return (
        <Layout>
            <S.CPrincipal>
                <S.CInfoBasica>
                    <S.Imagen>
                        <img src={Foto} alt='Foto de perfil' />
                    </S.Imagen>

                    <S.Datos>
                        <p>Anonymous</p>
                        <p>anonymous@anonimato.com</p>
                        <p>3046295800</p>
                    </S.Datos>
                </S.CInfoBasica>

                <S.CInfo>
                    <Certificaciones />
                    <InfoExtra />
                    <Reviews />
                </S.CInfo>
            </S.CPrincipal>
        </Layout>
    );
}


const Certificaciones = () => {
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
            <p className='titulo'>Certificaciones</p>
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

const InfoExtra = () => {
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
    
    return (
        <S.Info>
            <p className='titulo'>Información Extra</p>
            <article>
                {infoExtra.map((info, i) => (
                    <S.IExtra key={i}>
                        <div className='name'>{info.name}</div>
                        <div className='description'>{info.description}</div>
                    </S.IExtra>
                ))}
            </article>
        </S.Info>
    )
}

const Reviews = () => {
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
            <p className='titulo'>Reviews</p>
            <article>
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
            </article>
        </S.Info>
    )
}


export default Perfil