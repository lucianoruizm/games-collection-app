import games from "../videogamesdb.json";
import { VideoGameCard } from "./VideoGameCard";
import styles from './VideoGamesGrid.module.css';

export function VideoGamesGrid() {
    return (
        <ul className={styles.gamesGrid}>
            {games.map((game) => (
                <VideoGameCard key={game.id} game={game} />
            ))}
        </ul>
    )
}
