import checkImg from "../assets/check.png";
import crossImg from "../assets/cross.png";

function ListItem(props) {
  return (
    <li key ={props.key} className="recipeCard">
      <img className="fotoDeReceta" src={props.img} alt="foto de receta" />
      <section>
        <h1>{props.nombre}</h1>
        <p>Calorias: {props.calorias}</p>
        <p>Servings: {props.porciones}</p>
        <p>
          Bajo en Calorías: 
          <img
            style={{ height: "20px" }}
            src={props.calorias <= 200 ? checkImg : crossImg}
            alt="cross"
          />
        </p>
      </section>
      <button onClick={() => props.eliminarTarjeta(props.index)}>Delete</button>
    </li>
  );
}

export default ListItem;