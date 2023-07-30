import React, { FormEvent, useState } from 'react'
import { recipeApi, useCreateRecipeMutation } from '../store/api/recipe.api'
import { IRecipeData } from '../types/recipe.types'

const defaultValue:IRecipeData = {
    name: '',
    image: '',
}

export default function CreateRecipe() {
const [recipe, setRecipe] = useState<IRecipeData>(defaultValue)

const [createRecipe] = useCreateRecipeMutation()

const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
   createRecipe(recipe).then(() => {
    setRecipe(defaultValue)
   })
}


  return (
    <div>
        <p>Create new recipe</p>
      <form onSubmit={handleSubmit}>
       <label>
        <input
         type="text" 
         placeholder='Name'
         value={recipeApi.name}
         onChange={e => setRecipe({...
         recipe, name: e.target.value})}/>
      </label>
      <label>
        <input
         type="text" 
         placeholder='Image'
         value={recipeApi.image}
         onChange={e => setRecipe({...
         recipe, image: e.target.value})}/>
      </label>
      <button type='submit'>
        Create
      </button>
      </form>
    </div>
  )
}


