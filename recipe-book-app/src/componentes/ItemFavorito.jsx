import { Link } from "react-router-dom"
import checkImg from "../assets/check.png";
import crossImg from "../assets/cross.png";
import imgPlatoVacio from "../assets/plato-vacio.jpg"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css' 
import EditRecipe from "./EditRecipe"

function ItemFavorito(props) {
  const handleDelete = (index) => {
    const clone = [...props.recetasFavoritas]
    clone.splice(index, 1);
    props.setRecetasFavoritas(clone);
  }
  return (
    <li key={props.index} className="favRecipeCard">
      <Link to={`/recipes/${props.id}`} state={"fav"} style={{display:"flex",gap:"50px",textDecoration: "none", color:"black"}}>
      <img className="fotoDeReceta" src={props.image === "" ? imgPlatoVacio : props.image} alt={"Pic URN not found"} />
      <section style={{width:"200px"}}>
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
      <div style={{display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",marginRight:"30px"}}>
      <button className="cardButton del" onClick={() => handleDelete(props.index)}>Delete</button>

      <Popup trigger={<button className="cardButton edit">Edit</button>} position="bottom">
          {(close) => (
            <EditRecipe
              todasLasRecetas={props.recetasFavoritas}
              setTodasLasRecetas={props.setRecetasFavoritas}
              index={props.index}
              close={close}
            />
          )}
        </Popup>
      </div>
    </li>
  )
}

export default ItemFavorito