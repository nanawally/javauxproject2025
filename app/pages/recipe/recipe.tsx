import { CustomContentRecipe } from "~/components/Recipes/CustomContentRecipe";
import styles from "./recipe.module.css";

export function Recipe() {
  return (
    <>
      <main className={styles.recipeTheme}>
        <CustomContentRecipe />
      </main>
    </>
  ); 
}
