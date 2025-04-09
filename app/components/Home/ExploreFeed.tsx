import styles from "./ExploreFeed.module.css";
import { useEffect, useState } from "react";
import { SearchBar } from "../Search/SearchBar";
import { useRecipeContext } from "../Recipes/RecipeContext";
import { Link } from "react-router";
import { FavoriteButton } from "../Favorites/FavoriteButton";
import { CategoryButton } from "./CategoryButton";

export function ExploreFeed() {
    const { recipes, setRecipeIndex } = useRecipeContext();
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        let result = recipes;
        if (selectedCategory) {
            result = result.filter((recipe) => recipe.category === selectedCategory);
        }

        setFilteredRecipes(result);
    }, [selectedCategory, recipes]);

    const handleCategoryFilter = (category: string) => {
        setSelectedCategory(prev => (prev === category ? null : category));
    };

    function handleRecipeClick(id: number) {
        setRecipeIndex(id);
    }

    return (
        <>
            <div className={styles.searchOverlay}>
                <div className={styles.searchContainer}>
                    <img src="assets/logo.jpg" alt="" />
                    <SearchBar recipes={recipes} onFilteredRecipesChange={setFilteredRecipes} />
                    <div className={styles.categoryButtons}>
                        {["Kalorisnåla", "Krämiga", "Proteinrika", "Mättande", "Påskinspirerade", "Dessertinspirerade", "Somriga", "Tropiska"].map((category) => (
                            <CategoryButton
                                key={category}
                                category={category}
                                isActive={selectedCategory === category}
                                onFilter={handleCategoryFilter}
                            />
                        ))}
                    </div>
                </div>
                <img className={styles.imagewrapper} src="assets/heroimage-alla.jpg" alt="" />
            </div>

            <div className={styles.container}>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(({ id, name, image, description }) => (
                        <div className={styles.recipeWrapper} key={id}>
                            <Link to="../recipe" className={styles.recipeLink} onClick={() => handleRecipeClick(id)}>
                                <img src={image} alt={name} />
                                <h3>{name}</h3>
                                <h4>{description}</h4>
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