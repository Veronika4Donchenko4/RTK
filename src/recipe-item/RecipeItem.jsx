import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import styles from './RecipeItem.module.css'
import { actions } from '../store/favorite/favorite.slice'


const RecipeItem = ( {recipe} ) => {
    const { favorites } = useSelector(state => state)
    console.log( favorites)

    const dispatch = useDispatch()

    const isExists = favorites.some(r => r.id === recipe.id)

    console.log(favorites)
  return (
    <div className={ styles.item }>
        <h2>{recipe.name}</h2>
        <button onClick = {() =>
            dispatch(actions.
                toggleFavorites(recipe))}>
                {isExists ? 'Remove from' : 'Add to'} favorites
            Add to favorites</button>
    </div>
  )
}

export default RecipeItem