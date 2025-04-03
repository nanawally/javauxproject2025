import type { Route } from "./+types/home";
import { Recipe } from "../pages/recipe/recipe";
import { useRecipeContext } from "~/components/Recipes/RecipeContext";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Default smoothie name" },
    { name: "description", content: "Default smoothie name" },
  ];
}

export default function RecipeRoute() {
  const { recipeIndex, recipes } = useRecipeContext();
  const recipe = recipes[recipeIndex];
  useEffect(() => {
    if (recipe) {
      document.title = recipe.name;
      const metaDescription = document.querySelector("meta[name='description']");
      if (metaDescription) {
        metaDescription.setAttribute("content", recipe.name);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = recipe.name;
        document.head.appendChild(meta);
      }
    }
  }, [recipeIndex, recipes]); // Re-run when recipeIndex or recipes change

  return <Recipe />;
}
