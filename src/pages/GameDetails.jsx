import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { gameDetailsGet, gameScreenshotsGet } from '../utils/httpClient';
import { Spinner } from '../components/Spinner';
import { Details } from '../components/Details';

export function GameDetails() {
    const { gameId } = useParams();
    const [gameDetails, setGameDetails] = useState([]);
    const [gameScreenshots, setGameScreenshots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false)
      } catch (e) {
        console.error(e);
      }
    }, [gameId]);

    const getGameScreenshots = useCallback(async () => {
      try {
        const response = await fetch(gameScreenshotsGet(gameId));
        const json = await response.json();
        setGameScreenshots(json);
        setIsLoading(false)
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

    return (
        <div>
          {isLoading? (
            <Spinner />
          ) : (
            <Details 
               gameDetails={gameDetails} 
               gameScreenshots={gameScreenshots} />
          )}
        </div>
    )
}
