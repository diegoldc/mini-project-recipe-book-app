import recipes from "../data/recipes.json";
import { useState } from "react";
import ListItem from "./ListItem";

function List() {
  const [listaDeRecetas, setlistaDeRecetas] = useState(recipes);

  const eliminarTarjeta = (index) => {
    const clone = listaDeRecetas.slice(0);
    clone.splice(index, 1);
    setlistaDeRecetas(clone);
  };

  return (
    <ul className="contenido">
      {listaDeRecetas.map((plato, index) => (
        <ListItem
          index={index}
          img={plato.image}
          nombre={plato.name}
          calorias={plato.calories}
          porciones={plato.servings}
          eliminarTarjeta={eliminarTarjeta}
        />
      ))}
    </ul>
  );
}

export default List;