import { useRecipeContext } from "../Recipes/RecipeContext";
import { Link } from "react-router-dom";
import styles from "./CategoryScroll.module.css";
import { useRef } from "react";

export function CategoryScroll({ category }: { category: string }) {
    const { recipes, setRecipeIndex } = useRecipeContext();
    const scrollRef = useRef<HTMLDivElement>(null);

    const categoryRecipes = recipes.filter((recipe) => recipe.category === category);

    const handleRecipeClick = (id: number) => {
        setRecipeIndex(id);
    };

    return (
        <section className={styles.scrollContainer}>
            <h2>{category}</h2>
            <div className={styles.scrollWrapper}>
                {categoryRecipes.map(({ id, name, image }) => (
                    <Link to="../recipe" key={id} onClick={() => handleRecipeClick(id)} className={styles.card}>
                        <img src={image} alt={name} />
                        <h4>{name}</h4>
                    </Link>
                ))}
            </div>
        </section>
    );
}