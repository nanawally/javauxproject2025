import { CustomContentRecipe } from "~/components/CustomContentRecipe";
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
