import React from 'react'
import { useState } from 'react'

function EditRecipe(props) {
  const { todasLasRecetas, setTodasLasRecetas , index, close} = props
  // const { name , calories , img , servings } = props
  
  const [ nameValue , setNameValue ] = useState ("")
  const [ caloriesValue , setCaloriesValue ] = useState ("")
  const [ servingsValue , setServingsValue ] = useState ("")
  const [ imgValue , setImgValue ] = useState ("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const clone = [...todasLasRecetas]
    console.log(clone)
    nameValue !== "" && (clone[index].name = nameValue) 
    caloriesValue !== "" && (clone[index].calories = caloriesValue) 
    servingsValue !== "" && (clone[index].servings = servingsValue) 
    imgValue !== "" && (clone[index].image = imgValue) 
    // clone[index].name = nameValue
    // clone[index].calories = caloriesValue
    // clone[index].servings = servingsValue
    // clone[index].image = imgValue
    setTodasLasRecetas(clone)
    close()
  }


  return (
    <form onSubmit={handleSubmit} className="formEdit">
      <h1>Editar receta:</h1>
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
        <button type="submit">Update</button>
    </form>
  )
}

export default EditRecipe