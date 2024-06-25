import Layout from '../../elements/Layout'
import * as F from "../../styles/formulario";
import Regresar from '../../elements/Regresar';

const FormEmpresa = () => {
  return (
    <Layout>
        <F.FormContainer>
            <F.Titulo>Inserta la información de la empresa</F.Titulo>

            <F.Label htmlFor="name">Nombre</F.Label>
            <F.InputField type="text" id="name" name="name" />

            <F.Label htmlFor="Contactn">Contacto</F.Label>
            <F.InputField type="text" id="Contactn" name="Contactn" />

            <F.Label htmlFor="Contacti">Info Contacto</F.Label>
            <F.InputField type="text" id="Contacti" name="Contacti" />

            <F.Label htmlFor="description">Description</F.Label>
            <F.TextArea id="description" name="description" />
            
            <F.Botones>
                <Regresar />
                <F.SubmitButton type="submit" value="Pulbicar" />
            </F.Botones>
        </F.FormContainer>
    </Layout>
  )
}

export default FormEmpresa