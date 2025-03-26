import { Link } from "react-router";
import styles from "./CustomHeader.module.css"
import { HamburgerMenu } from "./HamburgerMenu";

export function CustomHeader() {
    return (
        <header className={styles.centerHeader}>
            <HamburgerMenu/>
            <Link to="../" className={styles.link}>
                <img src="/assets/logo.jpg" alt="Logo" className={styles.logo} />
            </Link>
        </header>
    )
}