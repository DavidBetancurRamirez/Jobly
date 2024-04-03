import '../styles/App.css';
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, List } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import StoreFrontIcon from "@mui/icons-material/Storefront"
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Inicio",
            icon: <HomeIcon />,
        },
        {
            text: "Estudiantes",
            icon: <ContactEmergencyIcon />,
        },
        {
            text: "Empresas",
            icon: <StoreFrontIcon />,
        },
        {
            text: "Info",
            icon: <InfoOutlinedIcon />,
        },
        {
            text: "Login",
            icon: <AccountCircle/>,
        },
    ]
    return (
        <nav>
            <div className="nav-logo-container">
                Jobly
            </div>
            <div className="navbar-links-container">
                <a href="/main">Inicio</a>
                <a href="">Info</a>
                <a href="">Empresas</a>
                <a href="/Estudiante">Estudiantes</a>
                <a href="/sesion">Login</a>
            </div>
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
        </nav>
    )
}

export default Navbar;