import styles from './GameDetails.module.css';
import game from './game.json';
import genre from './genres.json';

export function GameDetails() {

    return (
        <div className={styles.detailsContainer}>
            <img
              className={`${styles.col} ${styles.gameImage}`} 
              src={game.background_image} 
              alt={game.name}
            />
            <div className={`${styles.col} ${styles.gameDetails}`}>
                <p><strong>Name</strong>: {game.name}</p>
                <p><strong>Genre</strong>: {genre.results.map(nam => nam.name).join(", ")}</p>
                <p><strong>Release date</strong>: {game.released}</p>
                <p><strong>Platforms</strong>: {game.platforms.map(plat => plat.platform.slug).join(", ")}</p>
                <p><strong>Requirements</strong>: {game.platforms.map(req => req.requirements.recommended).join(", ")}</p>
                <p><strong>Description</strong>: {game.description}</p>
                <p><strong>Rating</strong>: {game.rating}</p>
            </div>
        </div>
    )
}
