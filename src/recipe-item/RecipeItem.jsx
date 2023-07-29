import React from 'react'
import styles from './RecipeItem.module.css'
import { useActions } from '../hooks/useActions'
import { useFavorites } from '../hooks/useFavorites'
import { actions }  from '../store/favorite/favorite.slice' 


const RecipeItem = ( {recipe} ) => {
    const { favorites } = useFavorites()

    const {toggleFavorites} = useActions()

    const isExists = favorites.some(r => r.id === recipe.id)

  return (
    <div className={ styles.item }>
      <img src={recipe.image} alt={recipe.name} width={200} />
        <h2>{recipe.name}</h2>
        <button onClick = {() =>
                toggleFavorites(recipe)}>
                {isExists ? 'Remove from' : 'Add to'} favorites
              </button>
    </div>
  )
}

export default RecipeItem