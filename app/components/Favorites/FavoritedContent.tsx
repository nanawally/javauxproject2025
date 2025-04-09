import { Link } from "react-router";
import { useRecipeContext } from "../Recipes/RecipeContext";
import styles from "./FavoritedContent.module.css"
import { FavoriteButton } from "./FavoriteButton";
import { HeroImage } from "./FavoriteHeroImage";

export function FavoritedContent() {
    const { recipes, favorites, setRecipeIndex, clearFavorites } = useRecipeContext();

    const favoritedRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));
    const hasFavorites = favorites.length > 0;

    function handleRecipeClick(id: number) {
        setRecipeIndex(id);
    }

    return (
        <>
            <HeroImage />
            <section className={styles.pageTitle}>
                <h1>Dina favoriter</h1>
                <span className={styles.spacer}></span>
                {hasFavorites && (
                    <h3 onClick={clearFavorites}>Rensa alla</h3>
                )}
            </section>
            {favoritedRecipes.length === 0 ? (
                <div className={styles.empty}>
                    <p>Du har inga sparade recept.</p>
                </div>
            ) : (
                <div className={styles.list}>
                    {favoritedRecipes.map((recipe) => (
                        <div className={styles.recipeWrapper} key={recipe.id}>
                            <Link to="../recipe"
                                className={styles.recipeLink}
                                onClick={() => handleRecipeClick(recipe.id)}
                            >
                                <img src={recipe.image} alt={recipe.name} />
                                <h3>{recipe.name}</h3>
                            </Link>
                            <FavoriteButton recipeId={recipe.id} />
                        </div>
                    ))}
                </div>
            )}
        </>
    )
};