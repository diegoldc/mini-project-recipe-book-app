import checkImg from "../assets/check.png";
import crossImg from "../assets/cross.png";
import { Link } from "react-router-dom";

function ListItem(props) {
  // const {id,name,calories,image,servings} = props
  return (
    <li key ={props.id} className="recipeCard">
      <Link to={`/recipes/${props.id}`}>
      <img className="fotoDeReceta" src={props.image} alt="foto de receta" />
      <section>
        <h1>{props.name}</h1>
        <p>Calorias: {props.calories}</p>
        <p>Servings: {props.servings}</p>
        <p>
          Bajo en Calorías: 
          <img
            style={{ height: "20px" }}
            src={props.calories <= 200 ? checkImg : crossImg}
            alt="cross"
            />
        </p>
      </section>
    </Link>
      <button onClick={() => props.eliminarTarjeta(props.index)}>Delete</button>
    </li>
  );
}

export default ListItem;