import Layout from "../../elements/Layout";
import * as F from "../../styles/formulario";
import Regresar from "../../elements/Regresar";


const FormTrabajo = () => {
    return (
        <Layout>
            <F.FormContainer>
                <F.Titulo>Inserta la información del trabajo</F.Titulo>

                <F.Label htmlFor="name">Cargo</F.Label>
                <F.InputField type="text" id="name" name="name" />

                <F.Label htmlFor="closing_date">Fecha Cierre</F.Label>
                <F.InputField type="date" id="closing_date" name="closing_date" />

                <F.Label htmlFor="closing_date">Fecha Inicio</F.Label>
                <F.InputField type="date" id="start_date" name="start_date" />
                
                <F.Label htmlFor="closing_date">Fecha Fin</F.Label>
                <F.InputField type="date" id="end_date" name="end_date" />

                <F.Label htmlFor="closing_date">Pago</F.Label>
                <F.InputField type="text" id="payment" name="payment" />

                <F.Label htmlFor="description">Description</F.Label>
                <F.TextArea id="description" name="description" />
            
                <F.Botones>
                    <Regresar />
                    <F.SubmitButton type="submit" value="Pulbicar" />
                </F.Botones>
            </F.FormContainer>
        </Layout>
    );
};

export default FormTrabajo;
