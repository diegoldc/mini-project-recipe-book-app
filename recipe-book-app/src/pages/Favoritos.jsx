import ItemFavorito from "../componentes/ItemFavorito"

function Favoritos({recetasFavoritas,setRecetasFavoritas}) {
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