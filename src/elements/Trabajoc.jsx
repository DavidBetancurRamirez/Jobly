import React from 'react'
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

const Trabajoc = (props) => {
  //console.log(props.cargo)
  return (
    <CardTrabajo>
      <Titulo className='title'>{props.props.cargo} {props.props.fecha}</Titulo>

      <div className='description'>{props.props.descripcion}</div>

      <div className='remuneracion'>{props.props.remuneracion}</div>
    </CardTrabajo>
)}

export default Trabajoc