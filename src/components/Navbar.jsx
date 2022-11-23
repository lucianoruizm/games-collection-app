import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarText}>
                <li><a href="#logo">Logo</a></li>
                <li><a href="#about">About</a></li>
                <Link to={'/search'}>
                    <p>Search</p>
                </Link>
            </ul>
        </nav>
    )
}
