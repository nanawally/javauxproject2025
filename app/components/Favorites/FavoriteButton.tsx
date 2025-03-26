import styles from "./FavoriteButton.module.css";
import { useRecipeContext } from "../Recipes/RecipeContext";

interface FavoriteButtonProps {
    recipeId: number;
}

export function FavoriteButton({ recipeId }: FavoriteButtonProps) {
    const { favorites, toggleFavorite } = useRecipeContext();
    const isFav = favorites.includes(recipeId);

    return (
        <button
            className={`${styles.favoriteButton} ${isFav ? styles.favorited : ""}`}
            onClick={() => toggleFavorite(recipeId)}>
            {isFav ? <img src="/assets/Favorite-filled.jpg" /> : <img src="/assets/Favorite-empty.jpg" />}
        </button>
    )
}