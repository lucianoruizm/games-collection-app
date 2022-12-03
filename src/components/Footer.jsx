import styles from './Footer.module.css';

export function Footer() {
    return (
        <div className={styles.footer}>
             <p>&copy; 2022</p>
             <p>Author: Luciano Ruiz</p>
             <p>Powered By: RAWG</p>
        </div>
    )
}
