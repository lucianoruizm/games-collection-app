import { Search } from "./Search";
import styles from './HomeContainer.module.css';

export function HomeContainer() {
    return (
        <div>
            <div className={styles.bgImageCtn}>
                <Search />
            </div>
        </div>
    )
}
