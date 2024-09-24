// import recipes from "../data/recipes.json";
import { useState , useEffect } from "react";
import ListItem from "../componentes/ListItem";
import FormNewRecipe from "../componentes/FormNewRecipe";
import SearchBar from "../componentes/SearchBar";



function List(props) {
  // const [listaDeRecetas, setlistaDeRecetas] = useState(recipes);

  // const eliminarTarjeta = (index) => {
  //   const clone = listaDeRecetas.slice(0);
  //   clone.splice(index, 1);
  //   setlistaDeRecetas(clone);
  // };

  // console.log(props)

  useEffect(() => {
    const titulo = document.querySelector("#tituloPestaña")
    titulo.innerText = "Home - Hecho en Casa"
  },[])

  const [ searchCalorias , setSearchCalorias ] = useState("")
  const [ caloriasMayor , setCaloriasMayor ] = useState(true)
  const [ searchPorciones , setSearchPorciones ] = useState("")
  const [ porcionesMayor , setPorcionesMayor ] = useState(true)
  const [ sortCards , setSortCards ] = useState("")
  const [ porNombre , setPorNombre ] = useState("")
  
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
    setSortCards={setSortCards}
    porNombre={porNombre}
    setPorNombre={setPorNombre}
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
      }).filter((plato) => {
        if (porNombre === ""){
          return plato
        } else {
          return plato.name.toLowerCase().includes(porNombre)
        }
      })
      .sort((a,b) => a[sortCards] - b[sortCards])
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