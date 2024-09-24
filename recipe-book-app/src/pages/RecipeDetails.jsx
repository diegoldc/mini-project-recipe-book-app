import recipes from "../data/recipes.json"
import { useParams , useLocation } from "react-router-dom"
import imgPlatoVacio from "../assets/plato-vacio.jpg"
import { useEffect } from "react"



function RecipeDetails(props) {

  
  const location = useLocation()
  
  const parametrosDinamicos = useParams()
  
  let recipeToDisplay
  
  if (location.state === "fav"){
    recipeToDisplay = props.recetasFavoritas.find((recipe) => recipe.id === parametrosDinamicos.recipeId )
  }
  if (location.state === "home"){
    recipeToDisplay = props.listaDeRecetas.find((recipe) => recipe.id === parametrosDinamicos.recipeId )
  }
  
  useEffect(() => {
    const titulo = document.querySelector("#tituloPestaña")
    titulo.innerText = `${recipeToDisplay.name} - Hecho en Casa`
  },[])

  return (
    <div className="singleRecipePage">
      <h1>{recipeToDisplay.name}</h1>
      <h3>Calorias: {recipeToDisplay.calories}</h3>
      { recipeToDisplay.servings === 1 ? (
        <h4>Con esta receta come 1 persona.</h4>
      ) : (
        <h4>Con esta receta comen {recipeToDisplay.servings} personas.</h4>
      )}
      <img src={recipeToDisplay.image === "" ? imgPlatoVacio : recipeToDisplay.image} alt="imagen de la receta" />
    </div>
  )
}

export default RecipeDetails