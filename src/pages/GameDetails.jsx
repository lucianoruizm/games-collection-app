import styles from './GameDetails.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gameDetailsGet } from '../utils/httpClient';
// import game from './game.json';
// import genre from './genres.json';

export function GameDetails() {
    const { gameId } = useParams();
    console.log(gameId);
    const [gameDetails, setGameDetails] = useState();

    useEffect(() => getGameDetails(gameId), [gameId]);

    const getGameDetails = (game_id) => {
        fetch(gameDetailsGet(game_id))
          .then(res => res.json())
          .then(data => {
            setGameDetails(data)
          })
          .catch(error => console.log(error));
    }
    
    // const {
    //     name,
    //     released,
    //     platforms,
    //     description,
    //     rating,
    // } = game;

    console.log(gameDetails)

    return (
        <div className={styles.detailsContainer}>
            {/* <img
              className={`${styles.col} ${styles.gameImage}`} 
              src={game.background_image} 
              alt={game.name}
            /> */}
            <div className={`${styles.col} ${styles.gameDetails}`}>
                <p><strong>Name</strong>{gameDetails.name}</p>
                {/* <p><strong>Genre</strong>: {genre.results.map(nam => nam.name).join(", ")}</p>
                <p><strong>Release date</strong>: {gameDetails.released}</p>
                <p><strong>Platforms</strong>: {gameDetails.platforms.map(plat => plat.platform.slug).join(", ")}</p>
                <p><strong>Requirements</strong>: {gameDetails.platforms.map(req => req.requirements.recommended).join(", ")}</p>
                <p><strong>Description</strong>: {gameDetails.description}</p>
                <p><strong>Rating</strong>: {gameDetails.rating}</p> */}
            </div>
        </div>
    )
}
