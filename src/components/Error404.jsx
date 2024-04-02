import styled from 'styled-components'
import Oficina from '../images/Oficina.png'
import colores from '../styles/colores'


const Fondo = styled.div`
    background-image: url(${Oficina});
    background-size: cover;
    background-position: center center;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    position: relative;
`

const Texto = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colores.principal};
    padding: 15px;
    border-radius: 10px;
    
    p {
        color: #fff;
        margin: 2px;
    }

    article {
        color: red;
        margin: auto;
        text-align: center;
        margin: 5px;
    }

    a {
        color: #fff;
    }
`

const Error404 = () => {
  return (
    <>
        <Fondo />
        <Texto>
            <p>¿No encuentras lo que buscabas?</p>
            <p>Nosotros tampoco</p>
            <article>ERROR 404</article>
            <a href='/'>Volver pagina principal</a>
        </Texto>
    </>
  )
}

export default Error404;