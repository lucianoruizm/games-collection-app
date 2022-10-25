import games from "../gamesdb.json";
import { GameCard } from "./GameCard";
import styles from './GamesGrid.module.css';

export function GamesGrid() {
    return (
        <ul className={styles.gamesGrid}>
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </ul>
    )
}
