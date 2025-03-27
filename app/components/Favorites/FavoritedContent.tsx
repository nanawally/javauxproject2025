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
        <main className={styles.favoriteTheme}>
            <div className={styles.pageWrapper}>
                <h1>Dina favoriter</h1>
                {favoritedRecipes.length === 0 ? (
                    <div className={styles.empty}>
                        <p>Du har inga sparade recept.</p>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        {favoritedRecipes.map((recipe) => (
                            <Link to="../recipe"
                                key={recipe.id}
                                className={styles.recipeLink}
                                onClick={() => handleRecipeClick(recipe.id)}
                            >
                                <img src={recipe.image} alt={recipe.name} />
                                <h3>{recipe.name}</h3>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
};