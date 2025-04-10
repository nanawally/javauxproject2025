import styles from "./ExploreFeed.module.css";
import { useEffect, useState } from "react";
import { SearchBar } from "../Search/SearchBar";
import { useRecipeContext } from "../Recipes/RecipeContext";
import { Link } from "react-router";
import { FavoriteButton } from "../Favorites/FavoriteButton";
import { CategoryButton } from "./CategoryButton";
import { DifficultyIcon } from "../Favorites/DifficultyIcon";

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

            {filteredRecipes.length > 0 ? (
                <div className={styles.container}>
                    {filteredRecipes.map(({ id, name, image, description, difficulty }) => (
                        <div className={styles.recipeWrapper} key={id}>
                            <Link to="../recipe" className={styles.recipeLink} onClick={() => handleRecipeClick(id)}>
                                <img src={image} alt={name} />
                                <h3>{name}</h3>
                                <h4>{description}</h4>
                            </Link>
                            <FavoriteButton recipeId={id} />
                            <DifficultyIcon difficulty={difficulty} />
                        </div>
                    ))}
                </div>
            ) : (
                // Empty container is rendered outside of the main .container
                <div className={styles.emptyContainer}>
                    <h2>Oops, inga smoothies i sikte</h2>
                    <h4>Prova att söka efter en annan ingrediens eller bläddra bland recepten – din nästa favorit är kanske bara en mix bort!</h4>
                </div>
            )}
        </>
    )
};