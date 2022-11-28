// import games from "../gamesdb.json";
import { GameCard } from "./GameCard";
import styles from './GamesGrid.module.css';

export function GamesGrid({popularGames, upcomingGames, newGames}) {

    return (
        <div className={styles.listContainer}>
            <h1>Popular Games</h1>
            <div className={styles.gamesGrid}>
                {popularGames.map((popularGame) => (
                    <GameCard key={popularGame.id} games={popularGame} />
                ))}
            </div>
            <h1>Upcoming Games</h1>
            <div className={styles.gamesGrid}>
                {upcomingGames.map((upcomingGame) => (
                    <GameCard key={upcomingGame.id} games={upcomingGame} />
                ))}
            </div>
            <h1>New Games</h1>
            <div className={styles.gamesGrid}>
                {newGames.map((newGame) => (
                    <GameCard key={newGame.id} games={newGame} />
                ))}
            </div>
        </div>
    )
}
