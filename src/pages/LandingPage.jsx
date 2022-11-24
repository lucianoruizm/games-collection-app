import { GamesGrid } from '../components/GamesGrid';
import { Search } from '../components/Search';
import styles from './LandingPage.module.css';

export function LandingPage() {
    return (
        <main>
            <div className={styles.bgImageCtn}>
                <Search />
            </div>
            <GamesGrid />
        </main>
    )
}
