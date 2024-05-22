import styled from 'styled-components';

const CardTrabajo = styled.article`
/* Basic Card Styling */
  width: 60vh;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; /* Add space between cards */

  /* Element Spacing and Alignment */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; /* Align content to the left */

  /* Title Styling */
  .title {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 10px; /* Add space below title */
  }

  /* Description Styling */
  .description {
    margin-bottom: 10px; /* Add space below description */
  }

  /* Remuneracion Styling */
  .remuneracion {
    font-weight: bold;
  }
`

const Titulo = styled.article`
title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px; /* Add space below title */
}
`

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #283583;
  justify-content: center;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
`;

const Trabajoc = (props) => {
  //console.log(props.cargo)
  return (
    <CardTrabajo>
      <Titulo className='title'>{props.props.cargo} {props.props.fecha}</Titulo>

      <div className='description'>{props.props.descripcion}</div>

      <div className='remuneracion'>{props.props.remuneracion}</div>
      <ButtonContainer>
        <a href='/trabajo/id'>
          <Button>Ver mas</Button>
        </a>
      </ButtonContainer>
    </CardTrabajo>
  )
}

export default Trabajoc