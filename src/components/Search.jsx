import styles from './Search.module.css';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { searchGamesGet } from '../utils/httpClient';

export function Search() {

    const [searchTerm, setSearchTerm] = useState("")
    const [queryGame, setQueryGame] = useState([])

   

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let slug = searchTerm.split(' ').join('-').toLowerCase()
        getQueryGame(slug)
    }

    const getQueryGame = async (slug) => { 
        setQueryGame([])
        let response = await fetch(searchGamesGet(slug));
        let data = await response.json()
        setQueryGame(data)
        setSearchTerm("")
    }

    console.log(queryGame)
//     fetch(searchGamesGet(slug))
//         .then(res => res.json())
//         .then(({queryResult}) => {
//             queryResult === undefined ? alert('no games found') : queryGame(queryResult) 
//         })

    
// {
//   let response = await fetch(searchGamesGet(slug));
//   let data = await response.json()
//   return data;
// }

// getUserAsync('yourUsernameHere')
//   .then(data => console.log(data)); 

    return (
        <form className={styles.searchContainer} onSubmit={onSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} type="text" value={searchTerm} onChange={handleChange} />
                <button className={styles.searchButton} type="submit">
                  <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}
