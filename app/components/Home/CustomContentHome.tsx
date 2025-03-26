import styles from "./CustomContentHome.module.css";
import { useEffect, useState } from "react";
import { HeroImage } from "./HeroImage";
import { SearchBar } from "../Search/SearchBar";
import { useRecipeContext } from "../Recipes/RecipeContext";
import { Link } from "react-router";
import { useFavorites } from "../Favorites/FavoritesContext";
import { FavoriteButton } from "../Favorites/FavoriteButton";

export function CustomContentHome() {
  const { setRecipeIndex } = useRecipeContext();
  const { favorites, toggleFavorite } = useFavorites();
  const [recipeList, setRecipeList] = useState<{ id: number; name: string; image: string; description: string; amount: string; ingredients: string[]; category: string[] }[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipeList);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const result = await fetch("/recipelist.JSON");
        if (!result.ok) throw new Error('Failed to fetch recipes');
        const recipes = await result.json();
        setRecipeList(recipes);
        setFilteredRecipes(recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    fetchRecipes();
  }, []);

  useEffect(() => {
    const filtered = recipeList.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
    ); // Filter by name OR ingredients
    setFilteredRecipes(filtered);
  }, [searchTerm, recipeList])

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
