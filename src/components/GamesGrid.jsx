// import games from "../gamesdb.json";
import { useEffect, useState } from "react";
import { getNewGames } from "../utils/httpClient";
import { GameCard } from "./GameCard";
import styles from './GamesGrid.module.css';

export function GamesGrid() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        getNewGames().then(data => {
            setGames(data.results);
          });
    }, []);

    return (
        <ul className={styles.gamesGrid}>
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </ul>
    )
}
