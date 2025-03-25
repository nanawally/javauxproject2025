import { Link } from "react-router";
import styles from "./CustomHeader.module.css"

export function CustomHeader() {
    return (
        <header className={styles.centerHeader}>
            <Link to="../" className={styles.link}>
                <img src="/assets/logo.jpg" alt="Logo" className={styles.logo} />
            </Link>
        </header>
    )
}