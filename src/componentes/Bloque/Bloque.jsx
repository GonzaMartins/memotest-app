import './Bloque.css'

export default function Bloque ({bloque, animacion, handleBloqueClick}) {
    return (
        <div className='contenedorBloque'>
            <div onClick={() => !bloque.flipped && !animacion ? handleBloqueClick( bloque) : null} className={`bloque ${bloque.flipped && 'bloqueAtras'} stars`} >
            <div className='bloqueAdelante'>

            </div>
            <div className='bloqueAtras '>
                {bloque.emoji}
            </div>
            </div>
        </div>
    )
}