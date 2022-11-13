import styles from './GameDetails.module.css';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { gameDetailsGet } from '../utils/httpClient';
// import game from './game.json';
// import genre from './genres.json';

export function GameDetails() {
    const { gameId } = useParams();
    // console.log(gameId);
    const [gameDetails, setGameDetails] = useState([]);

    // useEffect(() => getGameDetails(gameId), [gameId]);

    // const getGameDetails = (game_id) => {
    //      fetch(gameDetailsGet(game_id))
    //       .then(res => res.json())
    //       .then(data => {
    //         setGameDetails(data)
    //       })
    //       .catch(error => console.log(error));
    // }


    const getGameDetails = useCallback(async () => {
      try {
        const response = await fetch(gameDetailsGet(gameId));
        const json = await response.json();
        setGameDetails(json);
      } catch (e) {
        console.error(e);
      }
    }, [gameId]);
  
    useEffect(() => {
      getGameDetails();
    }, [getGameDetails]);
    
    const {
        name,
        background_image,
        released,
        // platforms,
        description_raw,
        rating,
    } = gameDetails;

    console.log(gameDetails)

    return (
        <div className={styles.detailsContainer}>
            <img
              className={`${styles.col} ${styles.gameImage}`} 
              src={background_image} 
              alt={name}
            />
            <div className={`${styles.col} ${styles.gameDetails}`}>
                <p><strong>Name</strong>{name}</p>
                {/* <p><strong>Genre</strong>: {genre.results.map(nam => nam.name).join(", ")}</p> */}
                <p><strong>Release date</strong>: {released}</p>
                {/* <p><strong>Platforms</strong>: {platforms.map(plat => plat.platform.slug).join(", ")}</p> */}
                {/* <p><strong>Requirements</strong>: {platforms.map(req => req.requirements.recommended).join(", ")}</p> */}
                <div>
                  <h3>Description:</h3>
                  <p>{description_raw}</p>
                </div>
                <p><strong>Rating</strong>: {rating}</p>
            </div>
        </div>
    )
}
