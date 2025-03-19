import type { Route } from "./+types/home";
import { Recipe } from "../pages/recipe/recipe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recipe page" },
    { name: "description", content: "Gr8 Smoothies" },
  ];
}

export default function RecipeRoute() {
  return <Recipe />;
}