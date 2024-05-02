import '../styles/App.css';
import { useState } from "react";
import styled from 'styled-components';
import colores from '../styles/colores';
import Foto from "../images/EstudianteBG.jpg"; 
import { useNavigate } from 'react-router-dom';
import { HiOutlineBars3 } from "react-icons/hi2";
import StoreFrontIcon from "@mui/icons-material/Storefront"
import AccountCircle from "@mui/icons-material/AccountCircle";
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, List } from "@mui/material";


const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    padding: 20px;
    background-color: ${colores.principal};
`
const Logo = styled.section`
    display: flex;
    align-items: center;

    article {
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom: 5px;
    }
`
const Links = styled.div`
    display: flex;
    margin-left: 20px;
    
    p {
        color: #fff;
        margin: 0 10px;
        cursor: pointer;
        font-size: 1.1rem;
        font-weight: bold;
    }
`
const Imagen = styled.section`
    width: 50px;
    height: 50px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid ${colores.claro};

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`


const menuOptions = [
    {
        text: "Estudiantes",
        icon: <ContactEmergencyIcon />,
    },
    {
        text: "Empresas",
        icon: <StoreFrontIcon />,
    },
    {
        text: "Login",
        icon: <AccountCircle/>,
    },
]


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    const navigate = useNavigate()

    return (
        <Nav>
            <Logo>
                <article onClick={() => navigate("/")}>Jobly.</article>
                <Links>
                    <p onClick={() => navigate("/estudiantes")}>Estudiante</p>
                    <p onClick={() => navigate("/empresas")}>Empresa</p>
                </Links>
            </Logo>

            <Imagen>
                <img src={Foto} alt='Foto de perfil' />
            </Imagen>

            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </Nav>
    )
}

export default Navbar;