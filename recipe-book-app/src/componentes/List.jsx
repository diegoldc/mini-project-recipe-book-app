// import recipes from "../data/recipes.json";
import { useState } from "react";
import ListItem from "./ListItem";
import Form from "./Form";

function List(props) {
  // const [listaDeRecetas, setlistaDeRecetas] = useState(recipes);

  // const eliminarTarjeta = (index) => {
  //   const clone = listaDeRecetas.slice(0);
  //   clone.splice(index, 1);
  //   setlistaDeRecetas(clone);
  // };

  // console.log(props)

  return (
    <>
    <Form listaDeRecetas={props.todasLasRecetas} setTodasLasRecetas={props.setTodasLasRecetas}/>
    <ul className="contenido">
      {props.listaDeRecetas.map((plato, index) => (
        <ListItem
        {...plato}
        todasLasRecetas={props.listaDeRecetas}
        setTodasLasRecetas={props.setTodasLasRecetas}
        index={index}
        />
      ))}
    </ul>
    </>
  );
}

export default List;