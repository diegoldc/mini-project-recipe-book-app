import checkImg from "../assets/check.png";
import crossImg from "../assets/cross.png";
import { Link } from "react-router-dom";

function ListItem(props) {
  // const {id,name,calories,image,servings} = props

  const eliminarTarjeta = (index) => {
    const clone = [...props.todasLasRecetas]
    clone.splice(index, 1);
    props.setTodasLasRecetas(clone);
  }
  
  return (
    <li key={props.id} className="recipeCard">
      <Link to={`/recipes/${props.id}`} style={{textDecoration: "none", color:"black"}}>
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
      <button className="delete" onClick={() => eliminarTarjeta(props.index)}>Delete</button>
    </li>
  );
}

export default ListItem;