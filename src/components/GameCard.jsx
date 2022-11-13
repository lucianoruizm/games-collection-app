import { Link } from 'react-router-dom';
import styles from './GameCard.module.css';

export function GameCard({ games }) {

    return (
        <li className={styles.gameCard}>
            <Link to={'/games/details/' + games.id}>
            <img
              src={games.background_image} 
              alt={games.name}
              className={styles.gameImage} 
            />
            {/* <ul>
                {game.parent_platforms &&
                   game.parent_platforms.map((platform) => {
                    const { id, name } = platform.platform;
                    return (
                        <li key={id}>
                            {name}
                        </li>
                    )
                   })}
            </ul> */}
            <div className={styles.gameTitle}>{games.name}</div>
            </Link>
        </li>
    )
}
