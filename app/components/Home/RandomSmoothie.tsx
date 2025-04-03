import { Link } from "react-router";
import { useRecipeContext } from "../Recipes/RecipeContext"
import styles from "./RandomSmoothie.module.css"

export function RandomSmoothie() {
    const {smoothieOfTheDay, setRecipeIndex} = useRecipeContext();

    function handleRecipeClick(id: number) {
        setRecipeIndex(id);
    }

    return (
        <>
            {smoothieOfTheDay ? (
                <Link to="../recipe" onClick={() => handleRecipeClick(smoothieOfTheDay.id)}
                    className={styles.smoothieLink}>
                    <section className={styles.smoothieText}>
                        <h2>Dagens Smoothie!</h2>
                        <h3>{smoothieOfTheDay.name}</h3>
                        <section className={styles.categoryNames}>
                            <span className={styles.categoryName}>{smoothieOfTheDay.profile[0]}</span>
                            <span className={styles.categoryName}>{smoothieOfTheDay.profile[1]}</span>
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
        </>
    )
}