import { Link } from "react-router";
import { useRecipeContext } from "../Recipes/RecipeContext";
import styles from "./FavoritedContent.module.css"

export function FavoritedContent() {
    const { recipes, favorites, setRecipeIndex } = useRecipeContext();

    const favoritedRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

    function handleRecipeClick(id: number) {
        setRecipeIndex(id);
    }

    return (
        <>
            <section className={styles.pageTitle}>
                <h1>Dina favoriter</h1>
            </section>
            {favoritedRecipes.length === 0 ? (
                <div className={styles.empty}>
                    <p>Du har inga sparade recept.</p>
                </div>
            ) : (
                <div className={styles.list}>
                    {favoritedRecipes.map((recipe) => (
                        <div className={styles.recipeWrapper}>
                            <Link to="../recipe"
                                key={recipe.id}
                                className={styles.recipeLink}
                                onClick={() => handleRecipeClick(recipe.id)}
                            >
                                <img src={recipe.image} alt={recipe.name} />
                                <h3>{recipe.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
};