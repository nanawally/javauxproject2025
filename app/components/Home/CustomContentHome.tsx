import styles from "./CustomContentHome.module.css";
import { useEffect, useState } from "react";
import { HeroImage } from "./HeroImage";
import { SearchBar } from "../Search/SearchBar";
import { useRecipeContext } from "../Recipes/RecipeContext";
import { Link } from "react-router";

export function CustomContentHome() {
  const { setRecipeIndex } = useRecipeContext();
  const [recipeList, setRecipeList] = useState<
    { id: number; name: string; image: string; description: string; amount: string }[]
  >([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const result = await fetch("/recipelist.JSON");
        if (!result.ok) throw new Error('Failed to fetch recipes');
        const recipes = await result.json();
        setRecipeList(recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    fetchRecipes();
  }, []);

  function handleRecipeClick(id: number) {
    setRecipeIndex(id);
  }

  return (
    <>
      <HeroImage />
      <SearchBar />
      <div className={styles.list}>
        {recipeList.map(({ id, name, image, description, amount }) => (
          <div className={styles.recipeWrapper} key={id}>
            <Link to="recipe" className={styles.recipeLink} onClick={() => handleRecipeClick(id)}>
              <img src={image} alt={name} />
              <h3>{name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
