import styles from './Details.module.css'

export const Details = ({ gameDetails, gameScreenshots}) => {
    const {
        name,
        released,
        platforms,
        // background_image,
        genres,
        description_raw,
    } = gameDetails;
  
  return (
    <div className={styles.detailsContainer}>
          <div className={`${styles.col} ${styles.gameDetails}`}>
             <p><strong>Name: </strong>{name}</p>
             <p><strong>Genres: </strong> {genres?.map(nam => nam.name).join(", ")}</p>
             <p><strong>Release date: </strong>{released}</p>
             <p><strong>Platforms: </strong> {platforms?.map(plat => plat.platform.name).join(", ")}</p>
             <p>
               <strong>Description: </strong>
               {description_raw}
             </p>
          </div>
          {/* <img className={`${styles.col} ${styles.gameImage}`} src={background_image} alt={name} /> */}
          <div className={styles.imagesContainer}>
            { gameScreenshots.results?.map((screenshot) => (
              <div key={screenshot.id} className={styles.imageContainer}>
                <img
                  className={`${styles.gameImage}`}
                  src={screenshot.image}
                  alt={screenshot.id}
                />
              </div>
            ))}
          </div>
        </div>
  )
}