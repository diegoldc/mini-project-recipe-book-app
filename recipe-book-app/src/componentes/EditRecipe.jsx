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
    // let newId = Math.random()*1000
    // nameValue !== "" ? clone[index].id = nameValue : clone[index].id = newId
    nameValue !== "" && (clone[index].name = nameValue) 
    caloriesValue !== "" && (clone[index].calories = caloriesValue) 
    servingsValue !== "" && (clone[index].servings = servingsValue) 
    imgValue !== "" && (clone[index].image = imgValue) 
    setTodasLasRecetas(clone)
    console.log(todasLasRecetas)
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
          placeholder={todasLasRecetas[index].name}
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
          placeholder={todasLasRecetas[index].calories}
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
          placeholder={todasLasRecetas[index].servings}
          onChange={ () => setServingsValue(event.target.value)}
          value={servingsValue}
        />
        </div>
        <button type="submit">Update</button>
    </form>
  )
}

export default EditRecipe