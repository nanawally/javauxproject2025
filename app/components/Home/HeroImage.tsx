import styles from "./HeroImage.module.css"

export function HeroImage() {
    return (
        <>
            <section className={styles.bannerSection}>
                <picture className={styles.heroContainer}>
                    <source media="(max-width: 431px)" srcSet="/assets/Herosmall.jpg"/>
                    <img src="/assets/Herolarge-b.jpg" alt="" loading="lazy" className={styles.heroImage}/>
                </picture>
            </section>
        </>
    )
}