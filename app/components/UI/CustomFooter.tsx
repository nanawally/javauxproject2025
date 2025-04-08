import styles from "./CustomFooter.module.css"

export function CustomFooter() {
    return (
        <>
            <footer className={styles.centerFooter}>
                <h2>All rights reserved ©</h2>
                <h3>Mixad av Smoothify</h3>
                <img src="/assets/logo-rosa.jpg" alt="Logo" className={styles.logo} />
            </footer>
        </>
    )
}