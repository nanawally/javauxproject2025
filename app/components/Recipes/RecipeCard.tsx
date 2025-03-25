import { Link } from "react-router";
import type { Recipe, RecipeName } from "~/types/recipe";
import { useRecipeContext } from "./RecipeContext";
import styles from "./RecipeCard.module.css"

export function RecipeCardName({ id, name, image }: RecipeName) {
  const { setRecipeIndex } = useRecipeContext();

  return (
    <Link to="recipe" onClick={() => setRecipeIndex(id)} className={styles.recipeLink}>
      <img src={image} alt={name} />
      {name}
    </Link>
  );
}
