import ItemFavorito from "../componentes/ItemFavorito"
import { useEffect } from "react"

function Favoritos({recetasFavoritas,setRecetasFavoritas}) {

  useEffect(() => {
    const titulo = document.querySelector("#tituloPestaña")
    titulo.innerText = "Favoritos - Hecho en Casa"
  },[])

  if (recetasFavoritas.length === 0) {
    return(
      <h1>Agrega recetas que te gusten desde la página de inicio &#x2665;</h1>
    )
  }

  return (
    <ul>
      {recetasFavoritas.map((plato,index) => (
        <ItemFavorito
        {...plato}
        setRecetasFavoritas={setRecetasFavoritas}
        recetasFavoritas={recetasFavoritas}
        index={index}
        />
      ))}
    </ul>
  )
}

export default Favoritos