import styled from 'styled-components';


const Titulo = styled.article`
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    padding: 0.25rem 0;
    border-bottom: 2px solid black;
`
const CardEmpresa = styled.div`
  /* Basic Card Styling */
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 15px;
  width: 30vh;

  /* Element Spacing and Alignment */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  /* Increased Spacing */
  gap: 1.5rem; /* Adds space between child elements */

  /* Button Styling (optional) */
  .secondary-button {
    background-color: #ddd;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
`;


const Empresac = ({ info }) => {
    return (
      <CardEmpresa>
        <Titulo> {info.nombre} </Titulo>
  
        <div>
          <h3> Total trabajos {info.trabajos} </h3>
        </div>

        <a href="/empresa/id">
          <button className="secondary-button">Expandir</button>
        </a>
      </CardEmpresa>
    );
  };

export default Empresac