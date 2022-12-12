import { Link } from 'react-router-dom';
import styles from './GameCard.module.css';

export function GameCard({ games }) {

    return (
        <div className={styles.gameCard}>
            <Link to={'/games/details/' + games.id}>
            <img
              src={games.background_image}
              alt={games.name}
              className={styles.gameImage}
            />
            <div className={styles.GameCardBody}>
                <h3 className={styles.gameTitle}>{games.name}</h3>
                <p className={styles.gamePlatform}>{games.platforms?.map(plat => plat.platform.name).join('- ')}</p>
            </div>
            </Link>
        </div>
    )
}
