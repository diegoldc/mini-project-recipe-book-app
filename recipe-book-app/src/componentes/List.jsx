import recipes from "../data/recipes.json";
import { useState } from "react";
import ListItem from "./ListItem";

function List(props) {
  // const [listaDeRecetas, setlistaDeRecetas] = useState(recipes);

  // const eliminarTarjeta = (index) => {
  //   const clone = listaDeRecetas.slice(0);
  //   clone.splice(index, 1);
  //   setlistaDeRecetas(clone);
  // };

  console.log(props)

  return (
    <ul className="contenido">
      {props.listaDeRecetas.map((plato, index) => (
        <ListItem
          {...plato}
          eliminarTarjeta={props.eliminarTarjeta}
          index={index}
          />
      ))}
    </ul>
  );
}

export default List;