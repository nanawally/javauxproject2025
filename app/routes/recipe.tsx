import type { Route } from "./+types/home";
import { Recipe } from "../pages/recipe/recipe";
//import { useRecipeContext } from "./RecipeContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "name of smoothie" },
    { name: "description", content: "name of smoothie" },
  ];
}

export default function RecipeRoute() {
  return <Recipe />;
}