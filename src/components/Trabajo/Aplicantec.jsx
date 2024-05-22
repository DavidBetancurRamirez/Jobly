import styled from 'styled-components';

const Card = styled.article`
  width: 100 vh; // Consider using % or px for responsiveness
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #283583;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Aplicantec = (props) => {
    return (
      <Card>
        <Title>{props.props.nombre}</Title>
        <Description>{props.props.descripcion}</Description>
        <ButtonContainer>
          <Button>Añadir</Button>
          <Button>Ver Perfil</Button>
        </ButtonContainer>
      </Card>
    );
  };
  
  export default Aplicantec;