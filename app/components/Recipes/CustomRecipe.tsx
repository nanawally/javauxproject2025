import { FavoriteButton } from "../Favorites/FavoriteButton";
import styles from "./CustomRecipe.module.css";
import { Label } from "./Label";
import { useRecipeContext } from "./RecipeContext";
import { TabsComponent } from "./TabsComponent";

export function CustomRecipe() {
  const { recipes, recipeIndex } = useRecipeContext();
  const selectedRecipe = recipes.length > 0 ? recipes[recipeIndex] : null;

  return (
    <>
      {selectedRecipe ? (
        <div className={styles.pageWrapper}>
          <section className={styles.center}>
            <img
              className={styles.recipeImage}
              src={selectedRecipe.image}
              alt="Smoothie image"
            />
            <FavoriteButton recipeId={selectedRecipe.id} />

            <div className={styles.textContainer}>
              <h2 className={styles.title}>{selectedRecipe.name}</h2>
                <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                {/* {selectedRecipe.description} */}
              </p>
                <Label profiles={selectedRecipe.profile} allergens={selectedRecipe.allergens} />
              
            </div>
          </section>
          <section className={styles.recipeContainer}>
            <div className={styles.recipeAspects}>
              <ul className={styles.recipeList}>
                <h2>Ingredienser</h2>
                {selectedRecipe?.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <div className={styles.recipeInstructions}>
                <h2>Gör så här</h2>
                {selectedRecipe?.instructions}
              </div>
              <ul className={styles.recipeList}>
                <h2>Näringsvärde</h2>
                {selectedRecipe?.nutrition.map((nutrition, index) => (
                  <li key={index}>{nutrition}</li>
                ))}
              </ul>
              <div className={styles.tipsContainerDesktop}>
                <div className={styles.endCenter}>
                  <h2>Allergier? Inga problem!</h2>
                  <p>
                    <img
                      src="/assets/avocado.jpg"
                      alt="Laktossymbol"
                      className={styles.symbol}
                    />
                    (Laktos)&nbsp;&nbsp;
                    <img
                      src="/assets/avocado.jpg"
                      alt="Glutensymbol"
                      className={styles.symbol}
                    />
                    (Gluten)&nbsp;&nbsp;
                    <img
                      src="/assets/avocado.jpg"
                      alt="Nöttersymbol"
                      className={styles.symbol}
                    />
                    (Nötter)
                  </p>
                  <div className={styles.endCenter2}>
                    <p>
                      TIPS: Du kan enkelt göra våra smoothies allergivänliga.
                      Byt bara ut allergenerna mot något likvärdigt som passar
                      dig bättre!
                    </p>
                    <img
                      src="/assets/avocado.jpg"
                      alt=""
                      className={styles.smiley}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tabsContainer}>
              <TabsComponent />
            </div>
          </section>
          <section className={styles.tipsContainerMobile}>
            <div className={styles.endCenter}>
              <h2>Allergier? Inga problem!</h2>
              <p>
                <img
                  src="/assets/avocado.jpg"
                  alt="Laktossymbol"
                  className={styles.symbol}
                />
                (Laktos)&nbsp;&nbsp;
                <img
                  src="/assets/avocado.jpg"
                  alt="Glutensymbol"
                  className={styles.symbol}
                />
                (Gluten)&nbsp;&nbsp;
                <img
                  src="/assets/avocado.jpg"
                  alt="Nöttersymbol"
                  className={styles.symbol}
                />
                (Nötter)
              </p>
              <div className={styles.endCenter2}>
                <p>
                  TIPS: Du kan enkelt göra våra smoothies allergivänliga. Byt
                  bara ut allergenerna mot något likvärdigt som passar dig
                  bättre!
                </p>
                <img
                  src="/assets/avocado.jpg"
                  alt=""
                  className={styles.smiley}
                />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p>Laddar recept...</p>
      )}
    </>
  );
}
