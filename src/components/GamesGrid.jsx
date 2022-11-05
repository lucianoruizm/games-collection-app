// import games from "../gamesdb.json";
import { useEffect, useState } from "react";
import { newGamesGet } from "../utils/httpClient";
import { GameCard } from "./GameCard";
import styles from './GamesGrid.module.css';

export function GamesGrid() {

    const [newGames, setNewGames] = useState([]);

    // useEffect(() => {
    //     getNewGames().then(data => {
    //         setGames(data.results);
    //       });
    // }, []);

    useEffect(() => getNewGames(), []);

    const getNewGames = () => {
        fetch(newGamesGet())
          .then(res => res.json())
          .then(data => {
            setNewGames(data.results)
          })
          .catch(error => console.log(error));
      }

      console.log(newGames)

    return (
        <div className={styles.listContainer}>
            <h1>New Games</h1>
            <ul className={styles.gamesGrid}>
                {newGames.map((newGame) => (
                    <GameCard key={newGame.id} game={newGame} />
                ))}
            </ul>
        </div>
    )
}
