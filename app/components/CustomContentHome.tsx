import styles from "./CustomContentHome.module.css";
import { useEffect, useState } from "react";
import type { RecipeName } from "~/types/recipe";
import { RecipeCardName } from "./RecipeCard";
import { useRecipeContext } from "./RecipeContext";
import { HeroImage } from "./HeroImage";
import { SearchBar } from "./SearchBar";

export function CustomContentHome() {
  const { setRecipeIndex } = useRecipeContext();

  const [recipeList, setRecipeList] = useState<
    { id: number; name: string; image: string }[]
  >([
    {
      id: 0,
      name: "",
      image: "/",
    },
  ]);

  useEffect(() => {
    async function fetchRecipes() {
      const result = await fetch("/recipelist.JSON");
      const recipes: RecipeName[] = await result.json();

      setRecipeList(recipes);
    }
    fetchRecipes();
  }, []);

  return (
    <>
      <HeroImage />
      <SearchBar />
      <div className={styles.list}>
        {recipeList.map(({ id, name, image }) => (
          <RecipeCardName
            key={id}
            id={id}
            name={name}
            image={image} />
        ))}
      </div>
    </>
  );
}
