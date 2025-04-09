import { Link } from "react-router";
import { useRecipeContext } from "../Recipes/RecipeContext"
import styles from "./RandomSmoothie.module.css"
import { Label } from "../Recipes/Label";

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
                        <h4>{smoothieOfTheDay.description}</h4>
                        <Label profiles={smoothieOfTheDay.profile} allergens={smoothieOfTheDay.allergens}/>
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