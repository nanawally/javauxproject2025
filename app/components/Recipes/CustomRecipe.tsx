import styles from "./CustomRecipe.module.css";
import { useRecipeContext } from "./RecipeContext";
import { useTabs } from "../Tabs/TabsContext";
import { TabsComponent } from "../Tabs/TabsComponent";

const tabs = {
    firstTab: 'ingredienser',
    secondTab: 'instruktioner',
    thirdTab: 'näringsvärde'
}

export function CustomRecipe() {
    const { recipes, recipeIndex } = useRecipeContext();
    const selectedRecipe = recipes.length > 0 ? recipes[recipeIndex] : null;

    const { setCurrentTab } = useTabs();

    return (
        <>
            {selectedRecipe ? (
                <div className={styles.pageWrapper}>
                    <div className={styles.center}>
                        <h2 className={styles.title}>{selectedRecipe.name}</h2>
                        {selectedRecipe.image}
                    </div>
                    <div className={styles.center}>
                        <TabsComponent />
                    </div>
                </div>
            ) : (
                <p>Laddar recept...</p>
            )}
        </>
    );
}
