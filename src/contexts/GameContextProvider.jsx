import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { newGamesGet, popularGamesGet, searchGamesGet, upcomingGamesGet } from '../utils/httpClient';

export const GameContext = createContext();

const GameContextProvider = ({children}) => {

    const [popularGames, setPopularGames] = useState([]);
    const [upcomingGames, setUpcomingGames] = useState([]);
    const [newGames, setNewGames] = useState([]);
    const [fetchedPopularGames, setFetchedPopularGames] = useState(false)
    const [fetchedUpcomingGames, setFetchedUpcomingGames] = useState(false)
    const [fetchedNewGames, setFetchedNewGames] = useState(false)

    const [searchTerm, setSearchTerm] = useState("")
    const [queryGame, setQueryGame] = useState([])
    const [fetchedSearch, setFetchedSearch] = useState(false);
    
    useEffect(() => { 
        const getPopularGames = async () => {
            let response = await fetch(popularGamesGet());
            let data = await response.json();
            setFetchedPopularGames(true)
            setFetchedSearch(false)
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
            setFetchedUpcomingGames(true)
            setFetchedSearch(false)
            setUpcomingGames(data.results)
          })
          .catch(error => console.log(error));
    }

    const getNewGames = () => {
        fetch(newGamesGet())
          .then(res => res.json())
          .then(data => {
            setFetchedNewGames(true)
            setFetchedSearch(false)
            setNewGames(data.results)
          })
          .catch(error => console.log(error));
    }

    const getQueryGame = async (slug) => { 
      setQueryGame([])
      let response = await fetch(searchGamesGet(slug));
      let data = await response.json()
      setFetchedPopularGames(false)
      setFetchedUpcomingGames(false)
      setFetchedNewGames(false)
      setQueryGame(data.results)
      data ? setFetchedSearch(true) : setFetchedSearch(false)
      setSearchTerm("")
  }

    return (
      <GameContext.Provider value={{popularGames, upcomingGames, newGames, fetchedPopularGames, fetchedUpcomingGames, fetchedNewGames, fetchedSearch, searchTerm, setSearchTerm, getQueryGame, queryGame}}>
        <Outlet />
      </GameContext.Provider>
    )
}

export default GameContextProvider;