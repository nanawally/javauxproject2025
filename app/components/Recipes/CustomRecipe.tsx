import { Link } from "react-router";
import { FavoriteButton } from "../../components/Favorites/FavoriteButton";
import { DifficultyIcon } from "../Favorites/DifficultyIcon";
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
            <div className={styles.imgContainer}>
              <img
                className={styles.recipeImage}
                src={selectedRecipe.image}
                alt="Smoothie image"
              />
            </div>
            <FavoriteButton recipeId={selectedRecipe.id} />
            <Link to="/explore" className={styles.backButton}>
              <img src="assets/back-button.jpg" alt="" />
            </Link>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{selectedRecipe.name}</h2>
              <p className={styles.description}>{selectedRecipe.description}</p>
              <div className={styles.labelContainer}>
                <Label
                  profiles={selectedRecipe.profile}
                  allergens={selectedRecipe.allergens}
                />
              </div>
              <div className={styles.difficultyContainer}>
                <DifficultyIcon difficulty={selectedRecipe.difficulty} />
              </div>
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
              <ul className={styles.recipeList}>
                <h2>Gör så här</h2>
                {selectedRecipe?.instructions.map((instructions, index) => (
                  <li key={index}>{instructions}</li>
                ))}
              </ul>
              <ul className={styles.recipeList}>
                <h2>Näringsvärde</h2>
                {selectedRecipe?.nutrition.map((nutrition, index) => (
                  <li key={index}>{nutrition}</li>
                ))}
              </ul>
              <div className={styles.tipsContainerDesktop}>
                <div className={styles.tipsContainerDesktopInner}>
                  <div className={styles.endCenter}>
                    <h2>Allergier? Inga problem!</h2>
                    <p>
                      <img
                        src="/assets/Laktos-b.jpg"
                        alt="Laktossymbol"
                        className={styles.symbol}
                      />
                      &nbsp;(Laktos)&nbsp;&nbsp;
                      <img
                        src="/assets/Gluten-b.jpg"
                        alt="Glutensymbol"
                        className={styles.symbol}
                      />
                      &nbsp;(Gluten)&nbsp;&nbsp;
                      <img
                        src="/assets/Nut-allergy-b.jpg"
                        alt="Nöttersymbol"
                        className={styles.symbol}
                      />
                      &nbsp;(Nötter)
                    </p>
                    <div className={styles.endCenter2}>
                      <p>
                        TIPS: Du kan enkelt göra våra smoothies allergivänliga.
                        Byt bara ut allergenerna mot något likvärdigt som passar
                        dig bättre!
                      </p>
                      <img
                        src="/assets/smiley-wink-röd.jpg"
                        alt="Röd smiley"
                        className={styles.smiley}
                      />
                    </div>
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
                  src="/assets/Laktos-b.jpg"
                  alt="Laktossymbol"
                  className={styles.symbol}
                />
                (Laktos)&nbsp;&nbsp;
                <img
                  src="/assets/Gluten-b.jpg"
                  alt="Glutensymbol"
                  className={styles.symbol}
                />
                (Gluten)&nbsp;&nbsp;
                <img
                  src="/assets/Nut-allergy-b.jpg"
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
                  src="/assets/smiley-wink-röd.jpg"
                  alt="Röd smiley"
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
