import styles from './GameCard.module.css';

export function GameCard({ game }) {
    return (
        <li className={styles.gameCard}>
            <img  
              src={game.background_image} 
              alt={game.name}
              className={styles.gameImage} />
            <div>{game.name}</div>
        </li>
    )
}
