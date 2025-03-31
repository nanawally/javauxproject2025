import { CustomRecipe } from "~/components/Recipes/CustomRecipe";
import styles from "./recipe.module.css";
import { CustomFooter } from "~/components/UI/CustomFooter";

export function Recipe() {
  return (
    <>
      <main className={styles.recipeTheme}>
        <CustomRecipe />
        <CustomFooter />
      </main>
    </>
  ); 
}
