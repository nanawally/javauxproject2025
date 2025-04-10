import { Link } from "react-router";
import { useRecipeContext } from "../Recipes/RecipeContext";
import styles from "./FavoritedContent.module.css"
import { FavoriteButton } from "./FavoriteButton";
import { HeroImage } from "./FavoriteHeroImage";
import { DifficultyIcon } from "./DifficultyIcon";

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

            {favoritedRecipes.length === 0 ? (
                <div className={styles.empty}>
                    <h2>Du har inga sparade recept.</h2>
                    <h4>Inget sparat än? Dags att börja samla! Klicka på hjärtat nästa gång en smoothie ser extra god ut så hittar du den här när det är dags att mixa.</h4>
                </div>
            ) : (
                <>
                    <section className={styles.pageTitle}>
                        <h1>Dina favoriter</h1>
                        <span className={styles.spacer}></span>
                        {hasFavorites && (
                            <h3 onClick={clearFavorites}>Rensa alla</h3>
                        )}
                    </section>
                    <div className={styles.list}>
                        {favoritedRecipes.map((recipe) => (
                            <div className={styles.recipeWrapper} key={recipe.id}>
                                <Link to="../recipe"
                                    className={styles.recipeLink}
                                    onClick={() => handleRecipeClick(recipe.id)}
                                >
                                    <img src={recipe.image} alt={recipe.name} />
                                    <h3>{recipe.name}</h3>
                                    <h4>{recipe.description}</h4>
                                </Link>
                                <FavoriteButton recipeId={recipe.id} />
                                <DifficultyIcon difficulty={recipe.difficulty} />
                            </div>
                        ))}
                    </div>
                </>

            )}
        </>
    )
};