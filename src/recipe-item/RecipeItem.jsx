import React from 'react'
import styles from './RecipeItem.module.css'
import { useActions } from '../hooks/useActions'
import { useFavorites } from '../hooks/useFavorites'



const RecipeItem = ( {recipe} ) => {
    const { favorites } = useFavorites()

    const {toggleFavorites} = useActions()

    const isExists = favorites.some(r => r.id === recipe.id)

  return (
    <div className={ styles.item }>
      <img src={recipe.image} alt={recipe.name} width={100} />
        <h2>{recipe.name}</h2>
        <button onClick = {() =>
                toggleFavorites(recipe)}>
                {isExists ? 'Remove from' : 'Add to'} favorites
              </button>
    </div>
  )
}

export default RecipeItem