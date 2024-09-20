import recipes from "../data/recipes.json"
import { useParams } from "react-router-dom"


function RecipeDetails(props) {
// poner un link en la lista a esta pagina
  const {listaDeRecetas} = props

  const parametrosDinamicos = useParams()
  console.log(parametrosDinamicos)

  const recipeToDisplay = listaDeRecetas.find((recipe) => recipe.id === parametrosDinamicos.recipeId )
  console.log(recipeToDisplay.name)

  return (
    <div className="singleRecipePage">
      <h1>{recipeToDisplay.name}</h1>
      <h3>Calorias: {recipeToDisplay.calories}</h3>
      { recipeToDisplay.servings === 1 ? (
        <h4>Con esta receta come 1 persona.</h4>
      ) : (
        <h4>Con esta receta comen {recipeToDisplay.servings} personas.</h4>
      )}
      <img src={recipeToDisplay.image} alt="imagen de la receta" />
    </div>
  )
}

export default RecipeDetails