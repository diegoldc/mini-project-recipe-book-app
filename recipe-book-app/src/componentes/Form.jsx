import { useState } from "react";

function Form(props) {

  const { listaDeRecetas , setTodasLasRecetas } = props

  const [ nameValue , setNameValue ] = useState ("")
  const [ caloriesValue , setCaloriesValue ] = useState ("")
  const [ servingsValue , setServingsValue ] = useState ("")
  const [ imgValue , setImgValue ] = useState ("")

  const handleSubmit = (event) => {
    event.preventDefault()
    let nuevaReceta = {
      id: nameValue,
      name: nameValue,
      calories: caloriesValue,
      image: imgValue,
      servings: servingsValue
    }

    setTodasLasRecetas((current) => {
      const clone = [...current]
      clone.unshift(nuevaReceta)
      return clone
    })

    setNameValue("")
    setCaloriesValue("")
    setServingsValue("")
    setImgValue("")
  }


  return (
    <form className="formAddNew">
      <h1>Agregar nueva receta:</h1>
      <div>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre de la receta"
          onChange={ () => setNameValue(event.target.value)}
          value={nameValue}
        />
      </div>
      <div>
      <label htmlFor="calories">Calorias: </label>
      <input
          type="number"
          name="calories"
          id="calories"
          placeholder="Cantidad de calorias"
          onChange={() => setCaloriesValue(event.target.value)}
          value={caloriesValue}
        />
        </div>
      <div>
      <label htmlFor="img">Foto de la receta: </label>
      <input
          type="text"
          name="img"
          id="img"
          placeholder="URL de la imagen"
          onChange={() => setImgValue(event.target.value)}
          value={imgValue}
        />
        </div>
        <div>
      <label htmlFor="servings">Cantidad de porciones: </label>
      <input
          type="number"
          name="servings"
          id="servings"
          placeholder="Porciones"
          onChange={ () => setServingsValue(event.target.value)}
          value={servingsValue}
        />
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;
