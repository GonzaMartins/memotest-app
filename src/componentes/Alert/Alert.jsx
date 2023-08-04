import './Alert.css'

export default function Alert({ handleOnClick }) {
    return (
        <div className='contenedorAlert'> 
            <div className='titulo'>
                Ganaste!
            </div>
            <button className='boton' onClick={()=>handleOnClick()}>
                Volver a jugar
            </button>
            <div className='gif'>
                <iframe src="https://giphy.com/embed/nhJWU3aiNb7zM65jwc" title="iframe"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
        </div>
    )
}