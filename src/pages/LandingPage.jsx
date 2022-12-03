import { useContext } from 'react';
import { GameCard } from '../components/GameCard';
import { GamesGrid } from '../components/GamesGrid';
import { Search } from '../components/Search';
import { GameContext } from '../contexts/GameContextProvider';
import styles from '../components/GamesGrid.module.css';

export const LandingPage = () => {

    const {
        popularGames,
        upcomingGames,
        newGames,
        fetchedSearch, 
        searchTerm, 
        setSearchTerm, 
        getQueryGame, 
        queryGame,
    } = useContext(GameContext);

    return (
        <main>
            <Search 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              getQueryGame={getQueryGame}
            />
            {fetchedSearch ? (
                <div className={styles.listContainer}>
                    <div className={styles.gamesGrid}>
                      { queryGame?.map((queryGame) => (
                        <GameCard key={queryGame.id} games={queryGame} />
                      ))}
                    </div>
                </div>
                ) : (
                <GamesGrid 
                  popularGames={popularGames}
                  upcomingGames={upcomingGames}
                  newGames={newGames}
                  queryGame={queryGame}
                  fetchedSearch={fetchedSearch}
                />
            )}
        </main>
    )
}
