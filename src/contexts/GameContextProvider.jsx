import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { newGamesGet, popularGamesGet, upcomingGamesGet } from '../utils/httpClient';

export const GameContext = createContext();

const GameContextProvider = ({children}) => {

    const [popularGames, setPopularGames] = useState([]);
    const [upcomingGames, setUpcomingGames] = useState([]);
    const [newGames, setNewGames] = useState([]);
    
    useEffect(() => { 
        const getPopularGames = async () => {
            let response = await fetch(popularGamesGet());
            let data = await response.json();
            setPopularGames(data.results);
        }
        getPopularGames()
    }, []);
    
    useEffect(() => getUpcomingGames(), []);
    useEffect(() => getNewGames(), []);

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
      <GameContext.Provider value={{popularGames, upcomingGames, newGames}}>
        <Outlet />
      </GameContext.Provider>
    )
}

export default GameContextProvider;