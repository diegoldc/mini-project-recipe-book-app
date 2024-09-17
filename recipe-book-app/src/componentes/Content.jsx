import listaDeRecetas from '../data/recipes.json'

function Content() {
  return (
    <ul className="contenido">

    {listaDeRecetas.map((plato, index) => {
      return (
        <li key={index} className="recipeCard">
          <img className="fotoDeReceta" src={plato.image} alt="foto de receta" />
          <section>
            <h1>{plato.name}</h1>
            <p>Calorias: {plato.calories}</p>
            <p>Servings: {plato.servings}</p>
          </section>
          <button>Delete</button>
        </li>
      )
    })}





    </ul>
  )
}

export default Content