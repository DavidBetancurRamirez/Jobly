import styled from "styled-components";
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
`;

const Content = styled.div`
    flex-grow: 1;
`;


const Layout = ({ children }) => {
    // Para colocar el Header y el footer en la pagina
    return (
        <Wrapper>
            <Navbar />
            <Content>{children}</Content>
            <Footer />
        </Wrapper>
    );
};

export default Layout;