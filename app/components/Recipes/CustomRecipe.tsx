import { FavoriteButton } from "../Favorites/FavoriteButton";
import styles from "./CustomRecipe.module.css";
import { ProfileLabel } from "./ProfileLabel";
import { useRecipeContext } from "./RecipeContext";
import { TabsComponent } from "./TabsComponent";

const tabs = {
    firstTab: 'ingredienser',
    secondTab: 'instruktioner',
    thirdTab: 'näringsvärde'
}

export function CustomRecipe() {
    const { recipes, recipeIndex } = useRecipeContext();
    const selectedRecipe = recipes.length > 0 ? recipes[recipeIndex] : null;

    return (
        <>
            {selectedRecipe ? (
                <div className={styles.pageWrapper}>
                    <div className={styles.recipeContainer}>
                        <div className={styles.center}>
                            <img className={styles.recipeImage} src={selectedRecipe.image} alt="" />
                            <h2 className={styles.title}>{selectedRecipe.name}</h2>
                            <ProfileLabel profiles={selectedRecipe.profile} allergens={selectedRecipe.allergens} />
                            <FavoriteButton recipeId={selectedRecipe.id} />
                        </div>
                        <div className={styles.tabsContainer}>
                            <TabsComponent />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Laddar recept...</p>
            )}
        </>
    );
}
