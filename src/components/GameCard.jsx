import { Link } from 'react-router-dom';
import styles from './GameCard.module.css';

export function GameCard({ game }) {
    return (
        <li className={styles.gameCard}>
            <Link to={'/games/' + game.id}>
            <img
              src={game.background_image} 
              alt={game.name}
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
            <div className={styles.gameTitle}>{game.name}</div>
            </Link>
        </li>
    )
}
