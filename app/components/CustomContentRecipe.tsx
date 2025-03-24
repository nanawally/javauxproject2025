import { useEffect, useState } from "react";
import styles from "./CustomContentRecipe.module.css";
import type { Recipe } from "~/types/recipe";
import { useRecipeContext } from "./RecipeContext";

export function CustomContentRecipe() {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const { recipeIndex } = useRecipeContext();

  useEffect(() => {
    async function fetchRecipes() {
      const result = await fetch("/recipelist.JSON");
      const recipes: Recipe[] = await result.json();
      setRecipeList(recipes);
    }
    fetchRecipes();
  }, []);

  const selectedRecipe = recipeList[recipeIndex-1];

  return (
    <>
      <main className={styles.recipeTheme}>
        {selectedRecipe ? (
          <div className={styles.pageWrapper}>
            <div className={styles.center}>
              <h2 className={styles.title}>{selectedRecipe.name}</h2>
            </div>
            <div className={styles.center}>
              <div className={styles.posts}>
                <div className={styles.individualpost}>
                  <img src={selectedRecipe.image} alt={selectedRecipe.name} />
                  <p>{selectedRecipe.description}</p>
                  <p>Mängd: {selectedRecipe.amount}</p>
                  <h3>Ingredienser:</h3>
                  <ul>{selectedRecipe.ingredients.join(", ")}</ul>
                </div>
                <div className={styles.individualpost}>
                  <h3>Gör så här:</h3>
                  <p>{selectedRecipe.instructions}</p>
                </div>
                <div className={styles.individualpost}>
                  <p>{selectedRecipe.tips}</p>
                  <p>Kategori: {selectedRecipe.category.join(", ")}</p>
                  <p>Rating: {selectedRecipe.rating}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Recipe not found.</p>
        )}
      </main>
    </>
  );
}
