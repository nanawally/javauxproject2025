import { CustomContentRecipe } from "~/components/Recipes/CustomContentRecipe";
import styles from "./recipe.module.css";
import { CustomFooter } from "~/components/UI/CustomFooter";

export function Recipe() {
  return (
    <>
      <main className={styles.recipeTheme}>
        <CustomContentRecipe />
        <CustomFooter />
      </main>
    </>
  ); 
}
