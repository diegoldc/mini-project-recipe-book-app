// import recipes from "../data/recipes.json";
import { useState } from "react";
import ListItem from "./ListItem";
import FormNewRecipe from "./FormNewRecipe";
import SearchBar from "./SearchBar";


function List(props) {
  // const [listaDeRecetas, setlistaDeRecetas] = useState(recipes);

  // const eliminarTarjeta = (index) => {
  //   const clone = listaDeRecetas.slice(0);
  //   clone.splice(index, 1);
  //   setlistaDeRecetas(clone);
  // };

  // console.log(props)

  const [ searchCalorias , setSearchCalorias ] = useState("")
  const [ caloriasMayor , setCaloriasMayor ] = useState(true)
  const [ searchPorciones , setSearchPorciones ] = useState("")
  const [ porcionesMayor , setPorcionesMayor ] = useState(true)
  
  return (
    <>
    <FormNewRecipe setTodasLasRecetas={props.setTodasLasRecetas}/>
    <SearchBar
    searchCalorias={searchCalorias}
    setSearchCalorias={setSearchCalorias}
    caloriasMayor={caloriasMayor}
    setCaloriasMayor={setCaloriasMayor}
    searchPorciones={searchPorciones}
    setSearchPorciones={setSearchPorciones}
    porcionesMayor={porcionesMayor}
    setPorcionesMayor={setPorcionesMayor}
    />
    <ul className="contenido">


      {props.listaDeRecetas.filter((plato) => {

        if (caloriasMayor) {
          if (plato.calories >= searchCalorias ) {
            return plato
          }
        } else {
          if (searchCalorias === "") {
            return plato
          }else if (plato.calories < searchCalorias) {
            return plato
          }
        }
      }).filter((plato) => {
        if (porcionesMayor) {
          if (plato.servings >= searchPorciones ) {
            return plato
          }
        } else {
          if (searchPorciones === "") {
            return plato
          }else if (plato.servings < searchPorciones) {
            return plato
          }
        }
      })
      .map((plato, index) => (
        <ListItem
        {...plato}
        todasLasRecetas={props.listaDeRecetas}
        setTodasLasRecetas={props.setTodasLasRecetas}
        recetasFavoritas={props.recetasFavoritas}
        setRecetasFavoritas={props.setRecetasFavoritas}
        index={index}
        />
      ))}


    </ul>
    </>
  );
}

export default List;