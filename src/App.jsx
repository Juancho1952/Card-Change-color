import { useState } from 'react'
import './App.css'
import QuotesBox from './Components/QuotesBox'
import quotes from './json/quotes.json'
import color from './js/Color.js'

function App() {
  window.addEventListener("load", () => {
    const loaderTittle = document.querySelector(".loader-tittle")
    setTimeout(() => {
      loaderTittle.style.display = "none";
    }, 2000);
  })
  // Obtengo el indice random 
  const getIndexrandom = arr => {
    return Math.floor(Math.random() * arr.length)
  }
  // lo almaceno dentro de una variable para despues ser utilizado por medio de una prop con el useState que cambia el estado de un componente
  const FirstElement = quotes[getIndexrandom(quotes)];
  const [RandomQuote, setRandomQuote] = useState(FirstElement)

  // Obtengo el color random con la misma funcionalidad del indice 
  const Color = color[getIndexrandom(color)]
  const [RandomColor, setRandomColor] = useState(Color)

  const getrandomAll = () => {
    setRandomQuote(quotes[getIndexrandom(quotes)])
    setRandomColor(color[getIndexrandom(color)])
  }
  console.log(getrandomAll);

  const ColorObject = {
    backgroundColor: RandomColor
  }

  return (
    <>
      <div class="loader" id="loader">
        <h1 class="loader-tittle">Bienvenid@</h1>
      </div>
      <div style={ColorObject}>
        <QuotesBox
          RandomQuote={RandomQuote}
          RandomColor={RandomColor}
          getrandomAll={getrandomAll}
        />
      </div>
    </>
  )
}

export default App
