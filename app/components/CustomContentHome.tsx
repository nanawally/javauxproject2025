import { Link } from "react-router";
import styles from "./CustomContentHome.module.css";
import { useEffect, useState } from "react";
import type { RecipeName } from "~/types/recipe";
import { RecipeCardName } from "./RecipeCard";
import { HeroImage } from "./HeroImage";

export function CustomContentHome() {
  const [recipeList, setRecipeList] = useState<
    { id: number; name: string; image: string }[]
  >([
    {
      id: 0,
      name: "",
      image: "",
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
    <section className={styles.box}>    
      <div className={styles.homeTheme}>
        <HeroImage />
      </div>
      <div className={styles.list}>
        {recipeList.map(({ id, name, image }) => (
          <RecipeCardName key={id} id={id} name={name} image={image} />
        ))}    
      </div>
    </section>
  );
}
