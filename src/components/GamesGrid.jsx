// import games from "../gamesdb.json";
import { useEffect, useState } from "react";
import { upcomingGamesGet, popularGamesGet, newGamesGet } from "../utils/httpClient";
import { GameCard } from "./GameCard";
import styles from './GamesGrid.module.css';

export function GamesGrid() {

    const [popularGames, setPopularGames] = useState([]);
    const [upcomingGames, setUpcomingGames] = useState([]);
    const [newGames, setNewGames] = useState([]);

    // useEffect(() => {
    //     getNewGames().then(data => {
    //         setGames(data.results);
    //       });
    // }, []);
    
    useEffect(() => getPopularGames(), []);
    useEffect(() => getUpcomingGames(), []);
    useEffect(() => getNewGames(), []);

    const getPopularGames = () => {
        fetch(popularGamesGet())
          .then(res => res.json())
          .then(data => {
            setPopularGames(data.results)
          })
          .catch(error => console.log(error));
    }

    const getUpcomingGames = () => {
        fetch(upcomingGamesGet())
          .then(res => res.json())
          .then(data => {
            setUpcomingGames(data.results)
          })
          .catch(error => console.log(error));
    }

    const getNewGames = () => {
        fetch(newGamesGet())
          .then(res => res.json())
          .then(data => {
            setNewGames(data.results)
          })
          .catch(error => console.log(error));
    }

    return (
        <div className={styles.listContainer}>
            <h1>Popular Games</h1>
            <ul className={styles.gamesGrid}>
                {popularGames.map((popularGame) => (
                    <GameCard key={popularGame.id} game={popularGame} />
                ))}
            </ul>
            <h1>Upcoming Games</h1>
            <ul className={styles.gamesGrid}>
                {upcomingGames.map((upcomingGame) => (
                    <GameCard key={upcomingGame.id} game={upcomingGame} />
                ))}
            </ul>
            <h1>New Games</h1>
            <ul className={styles.gamesGrid}>
                {newGames.map((newGame) => (
                    <GameCard key={newGame.id} game={newGame} />
                ))}
            </ul>
        </div>
    )
}
