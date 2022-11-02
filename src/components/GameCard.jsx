import { Link } from 'react-router-dom';
import styles from './GameCard.module.css';

export function GameCard({ game }) {
    return (
        <li className={styles.gameCard}>
            <Link to={'/games/' + game.id}>
            <img  
              src={game.background_image} 
              alt={game.name}
              className={styles.gameImage} />
            <div>{game.name}</div>
            </Link>
        </li>
    )
}
