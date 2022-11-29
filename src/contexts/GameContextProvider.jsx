import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { newGamesGet, popularGamesGet, searchGamesGet, upcomingGamesGet } from '../utils/httpClient';

export const GameContext = createContext();

const GameContextProvider = ({children}) => {

    const [popularGames, setPopularGames] = useState([]);
    const [upcomingGames, setUpcomingGames] = useState([]);
    const [newGames, setNewGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [queryGame, setQueryGame] = useState([])
    const [fetchedSearch, setFetchedSearch] = useState(false);
    
    useEffect(() => { 
        const getPopularGames = async () => {
            let response = await fetch(popularGamesGet());
            let data = await response.json();
            setPopularGames(data.results);
            setFetchedSearch(false);
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
            setFetchedSearch(false);
          })
          .catch(error => console.log(error));
    }

    const getNewGames = () => {
        fetch(newGamesGet())
          .then(res => res.json())
          .then(data => {
            setNewGames(data.results)
            setFetchedSearch(false);
          })
          .catch(error => console.log(error));
    }

    const getQueryGame = async (slug) => { 
      setQueryGame([])
      let response = await fetch(searchGamesGet(slug));
      let data = await response.json()
      setQueryGame(data.results)
      setSearchTerm("")
  }

    return (
      <GameContext.Provider value={{popularGames, upcomingGames, newGames, fetchedSearch, searchTerm, setSearchTerm, getQueryGame, queryGame}}>
        <Outlet />
      </GameContext.Provider>
    )
}

export default GameContextProvider;