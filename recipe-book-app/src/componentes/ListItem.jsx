import checkImg from "../assets/check.png";
import crossImg from "../assets/cross.png";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditRecipe from "./EditRecipe";
import imgPlatoVacio from "../assets/plato-vacio.jpg"
import { useState } from "react";

function ListItem(props) {
  // const {id,name,calories,image,servings} = props
  const eliminarTarjeta = (index) => {
    const clone = [...props.todasLasRecetas]
    clone.splice(index, 1);
    props.setTodasLasRecetas(clone);
  }



  const handleFavorite = (index) => {


    const newFav = {
      id:props.todasLasRecetas[index].id,
      name:props.todasLasRecetas[index].name,
      calories:props.todasLasRecetas[index].calories,
      image:props.todasLasRecetas[index].image,
      servings:props.todasLasRecetas[index].servings,
    }


    const newFavArr = [...props.recetasFavoritas]

    const isRepeted = props.recetasFavoritas.find((plato) => plato.id === newFav.id)
    !isRepeted && newFavArr.unshift(newFav)

    props.setRecetasFavoritas(newFavArr)

  }

  return (
    <li key={props.index} className="recipeCard">
      <Link to={`/recipes/${props.id}`} state={"home"} style={{textDecoration: "none", color:"black"}}>
      <img className="fotoDeReceta" src={props.image === "" ? imgPlatoVacio : props.image} alt={"Pic URN not found"} />
      <section>
        <h1>{props.name}</h1>
        <p>Calorias: {props.calories}</p>
        <p>Servings: {props.servings}</p>
        <p>
          Bajo en Calorías: 
          <img
            style={{ height: "20px", marginLeft: "5px" }}
            src={props.calories <= 200 ? checkImg : crossImg}
            alt="cross"
            />
        </p>
      </section>
    </Link>
      <button className="cardButton del" onClick={() => eliminarTarjeta(props.index)}>Delete</button>
      <Popup trigger={<button className="cardButton edit">Edit</button>} position="bottom">
        {(close) => (
          <EditRecipe
            todasLasRecetas={props.todasLasRecetas}
            setTodasLasRecetas={props.setTodasLasRecetas}
            index={props.index}
            close={close}
          />
        )}
      </Popup>
      <button className="cardButton fav" onClick={() => handleFavorite(props.index)} >Favorito</button>
    </li>
  );
}

export default ListItem;