import React from 'react'
import styles from './RecipeItem.module.css'
import { useActions } from '../hooks/useActions'
import { useFavorites } from '../hooks/useFavorites'


const RecipeItem = ( {recipe} ) => {
    const { favorites } = useFavorites()

    const { toggleFavorites } = useActions()

    const isExists = favorites.some(r => r.id === recipe.id)

    console.log(favorites)
  return (
    <div className={ styles.item }>
        <h2>{recipe.name}</h2>
        <button onClick = {() =>
          toggleFavorites(recipe)}>
          {isExists ? 'Remove from' : 'Add to'} favorites</button>
    </div>
  )
}

export default RecipeItem