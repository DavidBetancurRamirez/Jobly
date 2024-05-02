import styled from 'styled-components'
import colores from '../styles/colores'
import { useNavigate } from 'react-router-dom';
import { rutasPublicas } from '../utils/rutas';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram, FaTiktok } from "react-icons/fa";


const CPrincipal = styled.footer`
  background-color: ${colores.celeste};
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  padding: 20px;

  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
`
const CNombre = styled.section`
  article {
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 5px;
  }

  @media (max-width: 550px) {
    margin-bottom: 10px;

    article {
      font-size: 2rem;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.9rem;
    }
  }
`
const CColumnas = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }
`
const SColumna = styled.article`
  margin: 0px 30px;
  transition: all 5s ease;

  p {
    font-weight: bold;
    font-size: 1.6rem;
  }

  ul { list-style-type: none; }

  a {
    color: #000;
    text-decoration: none;
  }

  li {
    margin: 8px 0;
    font-size: 1.1rem;
    cursor: pointer;
    transition: border-bottom 0.5s ease;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid black;
    }
  }

  @media (max-width: 770px) {
    margin-top: ${props => (props.$contactenos ? "10px" : "0px")};
  }

  @media (max-width: 550px) {
    width: 100%;
    margin: 5px auto 0 auto;
    border-top: 1px dashed #000;
    display: flex;
    align-items: center;
    justify-content: center;

    p { margin-right: 20px; }
  }
`
const Contactos = styled.article`
  display: flex;
  margin-top: 15px;

  svg {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    cursor: pointer;
    color: #000;
  }

  @media (max-width: 550px) {
    margin-top: 5px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`


const dudas = [
  {
    nombre: "Terminos y condiciones",
    url: "https://www.thejobly.com/_files/ugd/65010f_d3c612e9c9ee481ab9f56ce5aeaaaa99.pdf"
  },
  {
    nombre: "Politica de privacidad de datos",
    url: "https://www.thejobly.com/_files/ugd/65010f_e4728011ccdb41e7986ec3dca699ed6e.pdf"
  }
]
const contactenos = [
  {
    nombre: "Info@joblycolombia.com",
    url: "Info@joblycolombia.com"
  }
]
const redes = [
  { 
    url: "https://www.instagram.com/thejobly",
    element: <FaInstagram />
  },
  { 
    url: "https://www.linkedin.com/company/thejobly",
    element: <AiOutlineLinkedin />
  },
  { 
    url: "https://www.tiktok.com/@the_jobly",
    element: <FaTiktok />
  }
]


const Footer = () => {
  const paginas = [
    {
      nombre: "Home",
      url: rutasPublicas.app.path
    },
    {
      nombre: "Estudiante",
      url: rutasPublicas.estudiantes.path
    },
    {
      nombre: "Empresa",
      url: rutasPublicas.empresas.path
    }
  ]

  return (
    <CPrincipal>
        <CNombre>
            <article>Jobly.</article>
            <p>© 2024 Jobly.</p>
        </CNombre>

        <CColumnas>
          <Columna 
            titulo="Paginas"
            links={paginas}
          />

          <Columna 
            titulo="¿Dudas?"
            links={dudas}
          />

          <Columna
            titulo="Contáctenos"
            links={contactenos}
            contactenos={true}
          />
        </CColumnas>
    </CPrincipal>
  );
};

const Columna = ({ titulo, links, contactenos=false }) => {
  const navigate = useNavigate()

  const handleClick = (url) => {
    if (url.startsWith('http')) {
      // Si es una URL externa, abre en una nueva pestaña
      window.open(url, '_blank');
    } else {
      // Si es una URL interna, usa navigate de React Router
      navigate(url);
      
      // Mueve la vista hacia arriba
      window.scrollTo(0, 0);
    }
  };

  return (
    <SColumna $contactenos={contactenos}>
      <p>{titulo}</p>
      <ul>
        {links.map((link, i) => (
          <li key={i} onClick={() => handleClick(link.url)}>{link.nombre}</li>
        ))}

        {contactenos &&
          <Contactos>
            {redes.map((red, i) => (
              <div key={i} onClick={() => handleClick(red.url)}>{red.element}</div>
            ))}
          </Contactos>
        }
      </ul>
    </SColumna>
  )
}
  
export default Footer;