import { Link } from "react-router";
import { useRecipeContext } from "../Recipes/RecipeContext";
import { HeroImage } from "./HeroImage";
import styles from "./LandingFeed.module.css";
import { CategoryScroll } from "./CategoryScroll";
import { RandomSmoothie } from "./RandomSmoothie";

export function LandingFeed() {
    const { smoothieOfTheDay, setRecipeIndex } = useRecipeContext();

    function handleRecipeClick(id: number) {
        setRecipeIndex(id);
    }

    return (
        <>
            <HeroImage />
            <section className={styles.shortDescription}>
                <h2>Vi är <span>Smoothify</span> - här gör vi smoothies enkla, goda och inspirerande!</h2>
                <img src="/assets/smiley-wink-vit.jpg" alt="vit ikon    " />
            </section>
            <section className={styles.smoothieOfTheDay}>
                <RandomSmoothie />
            </section>
            <section className={styles.categoryScroll}>
                <CategoryScroll category="Kalorisnåla"/>
            </section>
        </>
    );
}
