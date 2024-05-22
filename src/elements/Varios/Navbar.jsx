import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colores from '../../styles/colores';
import Foto from "../../images/anonymous.png"; 
import { CiLogout } from "react-icons/ci";
import { FaUserCircle  } from "react-icons/fa";


const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    padding: 20px;
    background-color: ${colores.principal};

    @media (max-width: 550px) {
        height: 60px;
        padding: 10px;
    }
`
const Logo = styled.section`
    display: flex;
    align-items: center;

    article {
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        font-size: 2.5rem;
    }
`
const Links = styled.div`
    display: flex;
    margin-left: 20px;

    @media (max-width: 550px) {
        margin-left: 10px;
    }
`
const Link = styled.p`
    color: ${props => (props.$located ? colores.celeste : "#fff")};
    margin: 0 10px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover { color: ${colores.celeste}; }

    @media (max-width: 550px) {
        margin: 0 8px;
    }
`
const Imagen = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid ${colores.claro};

    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 550px) {
        width: 35px;
        height: 35px;
    }
`
const Menu = styled.div`
    z-index: 10;
    top: 12px;
    right: 75px;
    position: absolute;
    border-radius: 10px;
    padding: 2px 10px 7px 10px;
    background-color: ${colores.claro};
    display: ${({ open }) => open ? 'block' : 'none'};

    @media (max-width: 550px) {
        top: 52px;
        right: 10px;
    }
`
const MenuItem = styled.div`
    color: ${props => (props.$located ? colores.celeste : "#fff")};
    cursor: pointer;
    padding: 6px 5px;
    border-bottom: 1px dashed #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    svg {
        margin-right: 5px;
        height: 100%;
    }

    &:hover {
        color: ${colores.celeste};
    }
`

const Navbar = () => {    
    const [openMenu, setOpenMenu] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation();
    // const { auth, signOut } = useAuth();
    
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const logout = () => {
        signOut()
        navigate("/sesion")
    };

    return (
        <Nav>
            <Logo>
                <article onClick={() => navigate("/")}>Jobly.</article>
                <Links>
                    <Link 
                        $located={location.pathname=="/estudiantes"}
                        onClick={() => navigate("/estudiantes")}
                    >
                        Estudiante
                    </Link>
                    <Link 
                        $located={location.pathname=="/empresas"}
                        onClick={() => navigate("/empresas")}
                    >
                        Empresa
                    </Link>
                    <Link 
                        $located={location.pathname=="/admin"}
                        onClick={() => navigate("/admin")}
                    >
                        Admin
                    </Link>
                    <Link 
                        $located={location.pathname=="/trabajos"}
                        onClick={() => navigate("/trabajos")}
                    >
                        Trabajos
                    </Link>
                </Links>
            </Logo>

            {/* {auth.accessToken ?
                <Imagen onClick={toggleMenu}>
                    <img src={Foto} alt='Foto de perfil' />
                    <Menu open={openMenu}>
                        <MenuItem 
                            $located={location.pathname=="/perfil"}
                            onClick={() => navigate("/perfil")}
                        >
                            <FaUserCircle />Mi perfil
                        </MenuItem>
                        <MenuItem onClick={logout} $color={colores.oscuro}>
                            <CiLogout />Cerrar sesión
                        </MenuItem>
                    </Menu>
                </Imagen>
            :
                <Links>
                    <Link onClick={() => navigate("/sesion")}>Login</Link>
                </Links>
            } */}
        </Nav>
    )
}

export default Navbar;