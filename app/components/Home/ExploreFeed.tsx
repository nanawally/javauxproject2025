import styles from "./ExploreFeed.module.css";
import { useState } from "react";
import { SearchBar } from "../Search/SearchBar";
import { useRecipeContext } from "../Recipes/RecipeContext";
import { Link } from "react-router";
import { FavoriteButton } from "../Favorites/FavoriteButton";
import { DifficultyIcon } from "../Favorites/DifficultyIcon";

export function ExploreFeed() {
    const { recipes, setRecipeIndex } = useRecipeContext();
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);

    function handleRecipeClick(id: number) {
        setRecipeIndex(id);
    }

    return (
        <>
            <SearchBar recipes={recipes} onFilteredRecipesChange={setFilteredRecipes} />
            <img className={styles.imagewrapper} src="assets/heroimage-alla.jpg" alt="" />
            <div className={styles.container}>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(({ id, name, image, description, difficulty }) => (
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
                    <section className={styles.pageTitle}>
                <h1>Oops, inga smoothies i sikte, </h1>
                <p>Prova att söka efter en annan ingrediens eller bläddra bland recepten - din nästa favorit är kanske bara en mix bort!</p>
            </section> // If no results match the search term
                )}
            </div>
        </>
    );
}