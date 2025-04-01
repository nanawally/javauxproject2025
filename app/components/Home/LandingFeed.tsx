import { HeroImage } from "./HeroImage";
import styles from "./LandingFeed.module.css";

export function LandingFeed() {
    return (
        <>
            <HeroImage />
            <section className={styles.shortDescription}>
                <h2>Vi är Smoothify - här gör vi smoothies enkla, goda och inspirerande!</h2>
            </section>
        </>
    );
}
