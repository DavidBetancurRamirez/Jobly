import styled from 'styled-components';

// Reusing the styled components from your example for consistent styling
const Titulo = styled.article`
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    padding: 0.25rem 0;
    border-bottom: 2px solid black;
`;

const FormContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 15px auto; /* Auto margins for horizontal centering */
    width: 50%; /* Adjust width as necessary for the form */

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    gap: 1rem;
`;

const InputField = styled.input`
    width: 80%;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Label = styled.label`
    display: block; /* Ensures the label takes up the full width */
    text-align: left;
    width: 80%;
    margin-top: 10px; /* Space above the label */
    margin-bottom: 5px; /* Space below the label before the input field */
    font-size: 1rem; /* Adjust the font size as needed */
    color: black; /* Darker text for better readability */
    
`;

const TextArea = styled.textarea`
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    height: 100px; /* Adjust the height as needed */
    resize: vertical; /* Allows the user to vertically resize the textarea */
`;

const SubmitButton = styled.input`
    background-color: #ddd;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;

    transition: background-color 0.3s; /* Smooth transition for background color */

    &:hover {
        background-color: #3a92e4; /* Color changes when hovered */
    }
`;

const FormTrabajo = () => {
    return (
        <FormContainer>
            <Titulo>Inserta la información del trabajo</Titulo>

            <Label htmlFor="name">Cargo</Label>
            <InputField type="text" id="name" name="name" />

            <Label htmlFor="closing_date">Fecha Cierre</Label>
            <InputField type="date" id="closing_date" name="closing_date" />

            <Label htmlFor="closing_date">Fecha Inicio</Label>
            <InputField type="date" id="start_date" name="start_date" />
            
            <Label htmlFor="closing_date">Fecha Fin</Label>
            <InputField type="date" id="end_date" name="end_date" />

            <Label htmlFor="closing_date">Pago</Label>
            <InputField type="text" id="payment" name="payment" />

            <Label htmlFor="description">Description</Label>
            <TextArea id="description" name="description" />

            <SubmitButton type="submit" value="Pulbicar" />
        </FormContainer>
    );
};

export default FormTrabajo;
