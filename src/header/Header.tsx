import {BsFillBagHeartFill} from 'react-icons/bs'
import styles from './Header.module.css'
import { useFavorites } from '../hooks/useFavorites'

export default function Header(){
   const { favorites } = useFavorites()
   return ( 
    <header className={ styles.header }>
   <BsFillBagHeartFill/>
   <span>{ favorites.length }</span>
   </header>
   )
}