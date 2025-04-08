import { useEffect, useState } from "react";
import { CustomFooter } from "~/components/UI/CustomFooter";
import styles from "./explore.module.css";
import { ExploreFeed } from "~/components/Home/ExploreFeed";
import { SearchBar } from "~/components/Search/SearchBar";
import { SektionReceptkort } from "~/components/Recipes/SektionReceptkort";
import type { Recipe } from "~/types/recipe";

export function Explore() {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("/recipelist.JSON")
      .then((res) => res.json())
      .then((data: Recipe[]) => {
        setAllRecipes(data);
        setFilteredRecipes(data);
      });
  }, []);

  return (
    <>
    
      <main className={styles.exploreTheme}>
        <div className="contentWrapper">
          <div className="hero-image"></div>
          <h1 className={styles.exploreTheme}>Alla Recept</h1>
          <ExploreFeed />
        </div>
        <CustomFooter />
      </main>
    </>
  );
}

/*           <SearchBar
            recipes={allRecipes}
            onFilteredRecipesChange={setFilteredRecipes}
          />

          <SektionReceptkort receptData={filteredRecipes} />
          */