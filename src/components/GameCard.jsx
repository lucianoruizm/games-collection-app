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
            <h3 className={styles.gameTitle}>{games.name}</h3>
            </Link>
        </div>
    )
}
