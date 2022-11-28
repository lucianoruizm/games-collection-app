import { useContext } from 'react';
import { GamesGrid } from '../components/GamesGrid';
import { Search } from '../components/Search';
import { GameContext } from '../contexts/GameContextProvider';
import styles from './LandingPage.module.css';

export const LandingPage = () => {

    const {
        popularGames,
        upcomingGames,
        newGames,
    } = useContext(GameContext);

    return (
        <main> 
            <div className={styles.bgImageCtn}>
                <Search />
            </div>
            <GamesGrid 
              popularGames={popularGames}
              upcomingGames={upcomingGames}
              newGames={newGames}
            />
        </main>
    )
}
