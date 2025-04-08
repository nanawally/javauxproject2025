import { HeroImage } from "./HeroImage";
import styles from "./LandingFeed.module.css";
import { CategoryScroll } from "./CategoryScroll";
import { RandomSmoothie } from "./RandomSmoothie";
import { useRecipeContext } from "../Recipes/RecipeContext";

export function LandingFeed() {
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
                <h2>Hur får man till krämigheten?</h2>
                <div className={styles.tipContainer}>
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
            </section>
            <section className={styles.categoryScroll}>
                <CategoryScroll category="Påskinspirerade" />
            </section>
            <section className={styles.allergyTip}>
                <div className={styles.allergyText}>
                    <h2>Laktosfri? Inga problem!</h2>
                    <h4>Visste du att du enkelt kan göra alla våra smoothies helt laktosfria? Byt bara ut mejeriprodukter mot alternativ
                        som havremjölk, mandelmjölk, sojayoghurt eller kokosmjölk - lika gott och krämigt!
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
                <h2>Perfekt smoothie varje gång</h2>
                <div className={styles.howToContainer}>
                    <section>
                        <h1>1</h1>
                        <h4>Vätska först <br /> Hjälper knivarna att snurra fritt och drar ner ingredienserna i mixern</h4>
                    </section>
                    <section>
                        <h1>2</h1>
                        <h4>Mjuka ingredienser <br /> Mixas enkelt och skapar en slät bas</h4>
                    </section>
                    <section>
                        <h1>3</h1>
                        <h4>Frysta frukter och is <br /> Mixern kan fastna om de läggs för tidigt</h4>
                    </section>
                    <section>
                        <h1>4</h1>
                        <h4>Torrvaror och frön <br /> Undviker att de fastnar på kanterna</h4>
                    </section>
                </div>
            </section>
        </>
    );
}
