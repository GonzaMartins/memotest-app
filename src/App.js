import './App.css';
import { useEffect, useState } from 'react';
import Tablero from './componentes/Tablero/Tablero'
import Alert from './componentes/Alert/Alert'

// import Bloque from '../src/componentes/Bloque/Bloque'
// let emojis = ['😊', '🚀', '🍕', '🌈', '🎉'];
// const emojis = ["🐟", "🍕", "🧉", "🍻", "🌺", "🌞", "🚀", "🍹"];
const emojis = ["🚀", "👽", "🌌", "🪐", "🛰️", "🌠", "🔭", "👨‍🚀"];

export default function App (){

  const [bloquesMezclados, setBloquesMezclados] = useState([])
  const [bloqueSeleccionado, setBloqueSeleccionado] = useState(null)
  const [animacion, setAnimacion] = useState(false)
  const [final, setFinal] = useState(false)


  useEffect(() => {
    const emojisMezclados = mezclarBloques([...emojis, ...emojis])

    setBloquesMezclados(emojisMezclados.map((emoji, index) => ( {  flipped: false, index, emoji } )))

  }, [])

  useEffect(() => {

  }, [bloquesMezclados])

  function mezclarBloques(arr) {
    const copia = [...arr];
    const resultado = [];
    const indicesUsados = new Set();
    
    while (resultado.length < arr.length) {
      const indiceAleatorio = Math.floor(Math.random() * arr.length);
      
      if (!indicesUsados.has(indiceAleatorio)) {
        resultado.push(copia[indiceAleatorio]);
        indicesUsados.add(indiceAleatorio);
      }
    }
    
    return resultado;
  }

  let finnis = (bloquesMezcladosCopia) => {
    let win = true
    bloquesMezcladosCopia?.length > 0 && bloquesMezcladosCopia.forEach((bloque) => {
      if(bloque.flipped === false){
        win = false
       }
      })
    return win
  }

  let handleBloqueClick = (bloque) => {
    let bloqueFlipped = { ...bloque, flipped: true }
    let bloquesMezcladosCopia = [...bloquesMezclados]
    bloquesMezcladosCopia[bloque.index] = bloqueFlipped
    setBloquesMezclados(bloquesMezcladosCopia)

    if(!bloqueSeleccionado){
      setBloqueSeleccionado(bloqueFlipped)
    } else if(bloqueSeleccionado.emoji === bloque.emoji) {
      setBloqueSeleccionado(null)
      if(finnis(bloquesMezcladosCopia)){
        setFinal(true)
      }

    } else {
      setAnimacion(true)
      setTimeout(()=>{
        bloqueSeleccionado.flipped = false
        bloquesMezcladosCopia[bloque.index] = bloque
        bloquesMezcladosCopia[bloqueSeleccionado.index] = bloqueSeleccionado
        setBloquesMezclados(bloquesMezcladosCopia)
        setBloqueSeleccionado(null)
        setAnimacion(false)
      }, 1000)
    }
  }

  let jugarDevuelta = () => {
    const emojisMezclados = mezclarBloques([...emojis, ...emojis])

    setBloquesMezclados(emojisMezclados.map((emoji, index) => ( {  flipped: false, index, emoji } )))
    setAnimacion(false)
    setBloqueSeleccionado(null)
    setFinal(false)
  }
  return (
        <div>
            <Tablero bloques = {bloquesMezclados} animacion={animacion} handleBloqueClick={handleBloqueClick} />
            { final && <Alert handleOnClick={jugarDevuelta} />}
        </div>
        )
}
