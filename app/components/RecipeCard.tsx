import { Link } from "react-router";
import type { Recipe, RecipeName } from "~/types/recipe";
import styles from "./RecipeCard.module.css"

export function RecipeCard(props: Recipe) {
  return (
    <div>
      <img src={props.image} alt="image" />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.amount}</p>
      <p>{props.ingredients}</p>
      <p>{props.instructions}</p>
      <p>{props.tips}</p>
      <p>{props.category}</p>
      <p>{props.rating}</p>
    </div>
  );
}

export function RecipeCardName(props: RecipeName) {
  return (
    <div className={styles.recipeWrapper}>
      <Link to="recipe" className={styles.recipeLink}>
      <img src={props.image} alt="image" />
      <h1>{props.name}</h1>
      </Link>
    </div>
  );
}
