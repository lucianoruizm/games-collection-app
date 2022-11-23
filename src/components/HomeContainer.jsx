import styles from './HomeContainer.module.css';
import { GamesGrid } from "./GamesGrid";

export function HomeContainer() {

    return (
        <div>
            <div className={styles.bgImageCtn}>
            </div>
            <GamesGrid />
        </div>
    )
}
