import styles from "./favorites.module.css"
import { useRecipeContext } from "~/components/Recipes/RecipeContext";
import { Link } from "react-router";

export function Favorites() {
    const { favorites, setRecipeIndex } = useRecipeContext();

    function handleRecipeClick(id: number) {
        setRecipeIndex(id);
    }

    return (
        <>
            <main className={styles.favoriteTheme}>
                <div className={styles.pageWrapper}>
                    <h1>Dina favoriter</h1>
                    {favorites.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Du har inga sparade recept.</p>
                        </div>
                    ) : (
                        <div className={styles.grid}>
                            {favorites.map((recipeId) => (
                                <Link to="recipe" className={styles.recipeLink} onClick={() => handleRecipeClick(recipeId)}>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}