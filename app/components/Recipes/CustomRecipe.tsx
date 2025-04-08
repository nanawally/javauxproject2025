import { FavoriteButton } from "../Favorites/FavoriteButton";
import styles from "./CustomRecipe.module.css";
import { useRecipeContext } from "./RecipeContext";
import { TabsComponent } from "./TabsComponent";

const tabs = {
  firstTab: "ingredienser",
  secondTab: "instruktioner",
  thirdTab: "näringsvärde",
};

export function CustomRecipe() {
  const { recipes, recipeIndex } = useRecipeContext();
  const selectedRecipe = recipes.length > 0 ? recipes[recipeIndex] : null;

  return (
    <>
      {selectedRecipe ? (
        <div className={styles.pageWrapper}>
          <section className={styles.center}>
            <div className={styles.recipeImgBg}>
              <img
                className={styles.recipeImage}
                src={selectedRecipe.image}
                alt="Smoothie image"
              />
              <FavoriteButton recipeId={selectedRecipe.id} />
            </div>
          </section>
          <section className={styles.recipeContainer}>
            <div className={styles.center}>
              <h2 className={styles.title}>{selectedRecipe.name}</h2>
              <p className={styles.description}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                {/* {selectedRecipe.description} */}
              </p>
            </div>
            <div className={styles.tabsContainer}>
              <TabsComponent />
            </div>
          </section>
          <section className={styles.tipsContainer}>
            <div className={styles.center}>
              <h2>Allergier? Inga problem!</h2>
              <p>
                <img src="/assets/avocado.jpg" alt="Laktossymbol" className={styles.symbol} />
                (Laktos)
                <img src="/assets/avocado.jpg" alt="Glutensymbol" className={styles.symbol} />
                (Gluten)
                <img src="/assets/avocado.jpg" alt="Nöttersymbol" className={styles.symbol} />
                (Nötter)
              </p>
              <p>
                TIPS: Du kan enkelt göra våra smoothies allergivänliga. Byt bara
                ut allergenerna mot något likvärdigt som passar dig bättre!
              </p>
            </div>
            <img src="/assets/avocado.jpg" alt="" className={styles.smiley} />
          </section>
        </div>
      ) : (
        <p>Laddar recept...</p>
      )}
    </>
  );
}
