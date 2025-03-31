import styles from "./CustomRecipe.module.css";
import { useRecipeContext } from "./RecipeContext";

export function CustomRecipe() {
    const { recipes, recipeIndex } = useRecipeContext();
    const selectedRecipe = recipes.length > 0 ? recipes[recipeIndex] : null;

    return (
        <>
            {selectedRecipe ? (
                <div className={styles.pageWrapper}>
                    <div className={styles.center}>
                        <h2 className={styles.title}>{selectedRecipe.name}</h2>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.posts}>
                            <div className={styles.individualpost}>
                                <img src={selectedRecipe.image} alt={selectedRecipe.name} />
                                <p>{selectedRecipe.description}</p>
                                <p>Mängd: {selectedRecipe.amount}</p>
                                <h3>Ingredienser:</h3>
                                <ul>
                                    {selectedRecipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.individualpost}>
                                <h3>Gör så här:</h3>
                                <p>{selectedRecipe.instructions}</p>
                            </div>
                            <div className={styles.individualpost}>
                                <p>{selectedRecipe.tips}</p>
                                <p>Kategori: {selectedRecipe.category.join(", ")}</p>
                                <p>Rating: {selectedRecipe.rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Laddar recept...</p>
            )}
        </>
    );
}
