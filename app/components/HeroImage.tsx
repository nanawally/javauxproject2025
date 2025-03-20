import styles from "./HeroImage.module.css"

export function HeroImage() {
    return (
        <>
            <section className={styles.center}>
                <img src="/pictures/HeroImage.jpg" alt="Banner" className={styles.heroimage} />
            </section>
        </>
    )
}