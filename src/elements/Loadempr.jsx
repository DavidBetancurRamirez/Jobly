import '../styles/App.css';

const Loadempr = (props) => {
    const { info } = props;
    return (
        <div>
            <h1 className='secondary-heading'>{info.nombre}</h1>

            <div className="div-container">

            <div className='secondary-text col'>{info.descripcion}</div>

            <div className='secondary-text col'> Contacto: {info.contacto} </div>

            </div>
        </div>
    )
}

export default Loadempr