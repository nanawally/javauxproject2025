import { Link } from "react-router";
import styles from "./CustomHeader.module.css"

export function CustomHeader() {
    return (
        <header className={styles.centerHeader}>
            <Link to="../" className={styles.link}>
                <img src="/pictures/logo.jpg" alt="Smoothies" className={styles.logo} />
            </Link>
        </header>
    )
}