import styles from './GameDetails.module.css';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { gameDetailsGet, gameScreenshotsGet } from '../utils/httpClient';

export function GameDetails() {
    const { gameId } = useParams();
    const [gameDetails, setGameDetails] = useState([]);
    const [gameScreenshots, setGameScreenshots] = useState([]);

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

    const getGameScreenshots = useCallback(async () => {
      try {
        const response = await fetch(gameScreenshotsGet(gameId));
        const json = await response.json();
        setGameScreenshots(json);
      } catch (e) {
        console.error(e);
      }
    }, [gameId]);
  
    useEffect(() => {
      getGameDetails();
    }, [getGameDetails]);

    useEffect(() => {
      getGameScreenshots();
    }, [getGameScreenshots]);

    console.log(gameDetails);
    console.log(gameScreenshots);
    
    const {
        name,
        released,
        platforms,
        // background_image,
        genres,
        description_raw,
    } = gameDetails;

    return (
        <div className={styles.detailsContainer}>
          <div className={`${styles.col} ${styles.gameDetails}`}>
             <p><strong>Name: </strong>{name}</p>
             <p><strong>Genres: </strong> {genres?.map(nam => nam.name).join(", ")}</p>
             <p><strong>Release date: </strong>{released}</p>
             <p><strong>Platforms: </strong> {platforms?.map(plat => plat.platform.name).join(", ")}</p>
             <p>
               <strong>Description: </strong>
               {description_raw}
             </p>
          </div>
          {/* <img className={`${styles.col} ${styles.gameImage}`} src={background_image} alt={name} /> */}
          <div className={styles.imagesContainer}>
            { gameScreenshots.results?.map((screenshot) => (
              <div key={screenshot.id} className={styles.imageContainer}>
                <img
                  className={`${styles.gameImage}`}
                  src={screenshot.image}
                  alt={screenshot.id}
                />
              </div>
            ))}
          </div>
        </div>
    )
}
