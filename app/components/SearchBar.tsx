import styles from "./SearchBar.module.css"

export function SearchBar() {
    return (
        <>
            <section className={styles.searchWrapper}>
                <input type="text" placeholder="Sök . . ." className={styles.searchBar} />
            </section>
        </>
    )
}