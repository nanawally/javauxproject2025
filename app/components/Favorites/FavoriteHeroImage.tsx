import styles from "./FavoriteHeroImage.module.css"

export function HeroImage() {
    return (
        <>
            <section className={styles.bannerSection}>
                <picture className={styles.heroContainer}>
                    <img 
                        src="/assets/favorite-time.png" 
                        alt="" 
                        loading="lazy" 
                        className={styles.heroImage}
                    />
                </picture>
            </section>
        </>
    )
}
