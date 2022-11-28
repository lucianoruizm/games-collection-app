import styles from './Search.module.css';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { searchGamesGet } from '../utils/httpClient';
import { GameCard } from './GameCard';
import stylesGrid from './GamesGrid.module.css';

export function Search() {

    const [searchTerm, setSearchTerm] = useState("")
    const [queryGame, setQueryGame] = useState([])
    const [fetchedSearch, setFetchedSearch] = useState(false)

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
        data? setFetchedSearch(true) : setFetchedSearch(false)
        setQueryGame(data.results)
        setSearchTerm("")
    }

    return (
        <div>
            <form className={styles.searchContainer} onSubmit={onSubmit}>
                <div className={styles.searchBox}>
                    <input className={styles.searchInput} type="text" value={searchTerm} onChange={handleChange} />
                    <button className={styles.searchButton} type="submit">
                      <FaSearch size={20} />
                    </button>
                </div>
            </form>
            <div className={stylesGrid.gamesGrid}>
               {fetchedSearch? queryGame.map((queryGame) => (
                  <GameCard key={queryGame.id} games={queryGame} />
               )) : null}
            </div>
        </div>
    )
}
