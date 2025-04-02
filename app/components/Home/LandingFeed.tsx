import { Link } from "react-router";
import { useRecipeContext } from "../Recipes/RecipeContext";
import { HeroImage } from "./HeroImage";
import styles from "./LandingFeed.module.css";

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
                {smoothieOfTheDay ? (
                    <Link to="../recipe" onClick={() => handleRecipeClick(smoothieOfTheDay.id)}
                        className={styles.smoothieLink}>
                        <section className={styles.smoothieText}>
                            <h2>Dagens Smoothie!</h2>
                            <h3>{smoothieOfTheDay.name}</h3>
                            <p>{smoothieOfTheDay.description}</p>
                            <section className={styles.categoryNames}>
                            <span className={styles.categoryName}>{smoothieOfTheDay.category[0]}</span>
                            <span className={styles.categoryName}>{smoothieOfTheDay.category[1]}</span>  
                            <span className={styles.allergens}>L</span>
                            </section>
                        </section>
                        <section className={styles.smoothieImage}>
                            <img src={smoothieOfTheDay.image} alt={smoothieOfTheDay.name} />
                        </section>
                    </Link>
                ) : (
                    <p>Laddar dagens smoothie...</p>
                )}
            </section>
        </>
    );
}
