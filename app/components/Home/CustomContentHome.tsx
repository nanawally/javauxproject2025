import styles from "./CustomContentHome.module.css";
import { useEffect, useState } from "react";
import { HeroImage } from "./HeroImage";
import { SearchBar } from "../Search/SearchBar";
import { useRecipeContext } from "../Recipes/RecipeContext";
import { Link } from "react-router";
import { FavoriteButton } from "../Favorites/FavoriteButton";

export function CustomContentHome() {
    const { recipes, setRecipeIndex, favorites, toggleFavorite } = useRecipeContext();
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const filtered = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.ingredients.some((ingredient) =>
                ingredient.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredRecipes(filtered);
    }, [searchTerm, recipes]);

    function handleRecipeClick(id: number) {
        setRecipeIndex(id);
    }

    return (
        <>
            <HeroImage />
            <SearchBar onSearchChange={(term: string) => setSearchTerm(term)} />
            <div className={styles.list}>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(({ id, name, image }) => (
                        <div className={styles.recipeWrapper} key={id}>
                            <Link to="recipe" className={styles.recipeLink} onClick={() => handleRecipeClick(id)}>
                                <img src={image} alt={name} />
                                <h3>{name}</h3>
                            </Link>
                            <FavoriteButton recipeId={id} />
                        </div>
                    ))
                ) : (
                    <p>Ingen match</p> // If no results match the search term
                )}
            </div>
        </>
    );
}
