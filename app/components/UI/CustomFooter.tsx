import styles from "./CustomFooter.module.css"

export function CustomFooter() {
    return (
        <>
            <footer className={styles.centerFooter}>
                <img src="/assets/logo.jpg" alt="Logo" className={styles.logo} />
            </footer>
        </>
    )
}