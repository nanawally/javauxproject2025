import styles from "./CustomContentHome.module.css";
import { useEffect, useState } from "react";
import { RecipeCardName } from "../Recipes/RecipeCard";
import { HeroImage } from "./HeroImage";
import { SearchBar } from "../Search/SearchBar";

export function CustomContentHome() {
  const [recipeList, setRecipeList] = useState<{ id: number; name: string; image: string }[]>([]);

  useEffect(() => {
    fetch("/recipelist.JSON")
      .then((res) => res.json())
      .then(setRecipeList)
      .catch(console.error);
  }, []);

  return (
    <>
      <HeroImage />
      <SearchBar />
      <div className={styles.list}>
        {recipeList.map((recipe) => (
          <RecipeCardName key={recipe.id} {...recipe} />
        ))}
      </div>
    </>
  );
}
