import Bloque from '../Bloque/Bloque'
import './Tablero.css'

export default function Tablero ({ bloques, animacion, handleBloqueClick }) {
    return (
        <div className='tablero'> 
            {bloques.map((bloque, i) => {
                return <Bloque key={`${i} ${bloque.emoji}`} bloque={bloque} animacion={animacion} handleBloqueClick={handleBloqueClick} />
            })}
        </div>
    )
}