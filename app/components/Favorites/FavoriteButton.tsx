import { useFavorites } from "./FavoritesContext";
import styles from "./FavoriteButton.module.css";

interface FavoriteButtonProps {
    recipeId: number;
}

export function FavoriteButton({ recipeId }: FavoriteButtonProps) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFav = favorites.includes(recipeId);

    return (
        <button
            className={`${styles.favoriteButton} ${isFav ? styles.favorited : ""}`}
            onClick={() => toggleFavorite(recipeId)}>
            {isFav ? <img src="/assets/Favorite-filled.jpg" /> : <img src="/assets/Favorite-empty.jpg" />}
        </button>
    )
}