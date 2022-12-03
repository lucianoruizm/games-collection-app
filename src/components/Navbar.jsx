import { useState } from 'react';
import styles from './Navbar.module.css';
import { HiMenu } from "react-icons/hi";

export function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleClick = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <>
          <header>
            <div className={styles.headerNavigation}>
              <nav className={styles.desktopNavbar}>
                    <ul className={styles.desktopNavbarItems}>
                        <li>Categoría 1</li>
                        <li>Categoría 2</li>
                        <li>Categoría 3</li>
                    </ul>
              </nav>
              <HiMenu className={styles.hiMenu} onClick={handleClick} />
              <div className={styles.logoContainer}>
                <a href="/"><img className={styles.logo} src='./logoGamedictionPortalDark.png' alt=''/></a>
                </div>
            </div>
          </header>
          <div className={`${navbarOpen ? styles.showMenu : styles.hideMenu}`}>
              <nav className={styles.modalNavbar}>
                <ul className={styles.modalNavbarItems}>
                    <li>Categoría 1</li>
                    <li>Categoría 2</li>
                    <li>Categoría 3</li>
                </ul>
              </nav>
          </div>
        </>
    )
}
