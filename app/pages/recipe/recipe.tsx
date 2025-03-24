import styles from "./recipe.module.css";
import { CustomHeader } from "~/components/CustomHeader";
import { CustomFooter } from "~/components/CustomFooter";
import { useEffect, useState } from "react";
import type { Recipe } from "~/types/recipe";

export function Recipe() {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [recipeIndex, setRecipeIndex] = useState<number>(1);

  useEffect(() => {
    async function fetchRecipes() {
      const result = await fetch("/recipelist.JSON");
      const recipes: Recipe[] = await result.json();
      setRecipeList(recipes);
    }
    fetchRecipes();
  }, []);

  const selectedRecipe = recipeList[recipeIndex];

  return (
    <>
      <div className={styles.pageWrapper}>
        <CustomHeader />

        <div>
          {selectedRecipe ? (
            <div>
              <h2>{selectedRecipe.name}</h2>
              <p>{selectedRecipe.description}</p>
              <p>Mängd: {selectedRecipe.amount}</p>
              <p>Ingredienser: {selectedRecipe.ingredients.join(", ")}</p>
              <p>Instruktioner: {selectedRecipe.instructions}</p>
              <p>TIPS! {selectedRecipe.tips}</p>
              <p>Kategori: {selectedRecipe.category.join(", ")}</p>
              <p>Rating: {selectedRecipe.rating}</p>
              <img src={selectedRecipe.image} alt={selectedRecipe.name} />
            </div>
          ) : (
            <p>Recipe not found.</p>
          )}
        </div>

        <main className={styles.recipeTheme}>
          <div className={styles.center}>
            <h2 className={styles.title}>Banansmoothie</h2>
          </div>
          <div className={styles.center}>
            <section>
              <div className={styles.posts}>
                <article className={styles.individualpost}>
                  <img
                    src="/assets/smoothies/Banansmoothie.jpg"
                    alt="bananaSmoothie"
                  />
                  <h3>Ingredienser</h3>

                  <ul>
                    <li>1 banan</li>
                    <li>3 dl havrebaserad dryck</li>
                    <li>2 tsk brun farin</li>
                    <li>1 krm mald kanel (kan uteslutas)</li>
                  </ul>
                </article>
                <article className={styles.individualpost}>
                  <h3>Gör så här</h3>
                  <p>
                    Blanda alla ingredienser i en blender, matberedare eller
                    mixa med en mixerstav.
                  </p>
                </article>
              </div>
            </section>
          </div>
        </main>
        <CustomFooter />
      </div>
    </>
  );
}
