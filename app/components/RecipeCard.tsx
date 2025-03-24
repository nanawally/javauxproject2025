import type { Recipe, RecipeName } from "~/types/recipe";
import { useRecipeContext } from "./RecipeContext";
import { Link } from "react-router";

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

export function RecipeCardName({ id, name, image }: RecipeName) {
  const { setRecipeIndex } = useRecipeContext();

  return (
    <div>
      <Link to="recipe" onClick={() => setRecipeIndex(id)} style={{ cursor: "pointer" }}>
        {name}
      <img src={image} alt={name} onClick={() => setRecipeIndex(id)} />
      </Link>
    </div>
  );
}
