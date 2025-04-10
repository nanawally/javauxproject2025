import { HeroImage } from "./HeroImage";
import styles from "./LandingFeed.module.css";
import { CategoryScroll } from "./CategoryScroll";
import { RandomSmoothie } from "./RandomSmoothie";
import { useRef } from "react";
import { ScrollButton } from "../UI/ScrollButton";

export function LandingFeed() {
    const consistencyWrapperRef = useRef<HTMLDivElement>(null);
    const howToWrapperRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <HeroImage />
            <section className={styles.shortDescription}>
                <div className={styles.descriptionText}>
                    <h2>Vi är <span>Smoothify</span> - här gör vi smoothies enkla, goda och inspirerande!</h2>
                </div>
                <div className={styles.descriptionImage}>
                    <img src="/assets/smiley-wink-vit.jpg" alt="vit ikon    " />
                </div>
            </section>
            <section className={styles.smoothieOfTheDay}>
                <RandomSmoothie />
            </section>
            <section className={styles.categoryScroll}>
                <CategoryScroll category="Kalorisnåla" />
            </section>
            <section className={styles.consistencyTip}>
                <h2 className={styles.consistencyTitle}>Hur får man till krämigheten?</h2>
                <div className={styles.tipOuterWrapper} ref={consistencyWrapperRef}>
                    <div className={styles.tipContainer} >
                        <section>
                            <img src="assets/nut.jpg" alt="" />
                            <h4>Ger en fylligare konsistens och extra smak.</h4>
                        </section>
                        <section>
                            <img src="assets/banana.jpg" alt="" />
                            <h4>Klassiker som gör smoothien både söt och krämig.</h4>
                        </section>
                        <section>
                            <img src="assets/avocado.jpg" alt="" />
                            <h4>Superkrämig konsistens utan att påverka smaken mycket.</h4>
                        </section>
                        <section>
                            <img src="assets/coconut.jpg" alt="" />
                            <h4>Ger en rik och fyllig textur.</h4>
                        </section>
                    </div>
                </div>
                <div className={styles.buttonDisplay}>
                    <ScrollButton scrollRef={consistencyWrapperRef} />
                </div>
            </section>
            <section className={styles.categoryScroll}>
                <CategoryScroll category="Påskinspirerade" />
            </section>
            <section className={styles.allergyTip}>
                <div className={styles.allergyText}>
                    <h2>Allergier? Inga problem!</h2>
                    <div className={styles.logoContainer}>
                        <img className={styles.allergyLogo} src="assets/Laktos-b.jpg" alt="" />
                        <h4>Laktos</h4>
                        <img className={styles.allergyLogo} src="assets/Gluten-b.jpg" alt="" />
                        <h4>Gluten</h4>
                        <img className={styles.allergyLogo} src="assets/Nut-allergy-b.jpg" alt="" />
                        <h4>Nötter</h4>
                    </div>
                    <h4>
                        Det är enkelt att göra våra smoothies allergivänliga - byt bara ut allergener mot likvärdiga alternativ.
                        Till exempel kan du ersätta mejeriprodukter med havremjölk, mandelmjölk, sojayoghurt eller kokosmjölk - lika gott och krämigt!
                    </h4>
                </div>
                <div className={styles.allergyImage}>
                    <img src="assets/smiley-wink-röd.jpg" alt="röd smiley" />
                </div>
            </section>
            <section className={styles.categoryScroll}>
                <CategoryScroll category="Somriga" />
            </section>
            <section className={styles.howToTip}>
                <h2 className={styles.howToTitle}>Perfekt smoothie varje gång</h2>
                <div className={styles.tipOuterWrapper} ref={howToWrapperRef}>
                    <div className={styles.howToContainer}>
                        <section>
                            <h1>1</h1>
                            <h4> <span className={styles.tipTitle}>Vätska först</span>  <br /> Hjälper knivarna att snurra fritt och drar ner ingredienserna i mixern</h4>
                        </section>
                        <section>
                            <h1>2</h1>
                            <h4> <span className={styles.tipTitle}>Mjuka ingredienser</span> <br /> Mixas enkelt och skapar en slät bas</h4>
                        </section>
                        <section>
                            <h1>3</h1>
                            <h4> <span className={styles.tipTitle}>Frysta frukter och is</span> <br /> Mixern kan fastna om de läggs för tidigt</h4>
                        </section>
                        <section>
                            <h1>4</h1>
                            <h4> <span className={styles.tipTitle}>Torrvaror och frön</span> <br /> Undviker att de fastnar på kanterna</h4>
                        </section>
                    </div>
                </div>
                <div className={styles.buttonDisplay}>
                    <ScrollButton scrollRef={howToWrapperRef} />
                </div>
            </section>
        </>
    );
}
