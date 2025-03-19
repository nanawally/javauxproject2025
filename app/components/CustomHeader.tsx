import { Link } from "react-router";
import styles from "./CustomHeader.module.css"

export function CustomHeader() {
    return (
        <header className={styles.centerHeader}>

            <Link to="../" className={styles.link}>
                <img src="app\components\images\image.png" alt="Smoothies" className={styles.logo} />
                <h1>Smoothie</h1>
            </Link>



        </header>
    )
}