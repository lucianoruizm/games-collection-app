import styles from './Search.module.css';
import { FaSearch } from "react-icons/fa";
import { GameCard } from './GameCard';
import stylesGrid from './GamesGrid.module.css';

export function Search({searchTerm, setSearchTerm, getQueryGame, queryGame}) {

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let slug = searchTerm.split(' ').join('-').toLowerCase()
        getQueryGame(slug)
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
               { queryGame?.map((queryGame) => (
                  <GameCard key={queryGame.id} games={queryGame} />
               ))}
            </div>
        </div>
    )
}
