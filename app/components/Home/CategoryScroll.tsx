import { useRecipeContext } from "../Recipes/RecipeContext";
import { Link } from "react-router-dom";
import styles from "./CategoryScroll.module.css";
import { useEffect, useRef, useState } from "react";

export function CategoryScroll({ category }: { category: string }) {
    const { recipes, setRecipeIndex } = useRecipeContext();
    const categoryRecipes = recipes.filter((recipe) => recipe.category === category);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);


    const handleRecipeClick = (id: number) => {
        setRecipeIndex(id);
    };

    function handleScrollRight() {
        if (scrollWrapperRef.current) {
            scrollWrapperRef.current.scrollBy({ left: 600, behavior: "smooth" });
        }
    }

    function handleScrollLeft() {
        if (scrollWrapperRef.current) {
            scrollWrapperRef.current.scrollBy({ left: -600, behavior: "smooth" });
        }
    }

    return (
        <>
            <h2>{category}</h2>
            <div className={styles.buttonOverlay}>
                <div className={styles.scrollWrapper} ref={scrollWrapperRef}>
                    {categoryRecipes.map(({ id, name, image }) => (
                        <Link to="../recipe" key={id} className={styles.card}
                            onClick={() => handleRecipeClick(id)}
                            draggable="false"
                            onDragStart={(e) => e.preventDefault()}>
                            <img src={image} alt={name}
                                draggable="false"
                                onDragStart={(e) => e.preventDefault()} />
                            <h4>{name}</h4>
                        </Link>
                    ))}
                </div>
                <button className={styles.leftScrollButton}
                    onClick={handleScrollLeft}> <img src="assets/arrow-left.svg" alt="" /> </button>

                <button className={styles.rightScrollButton}
                    onClick={handleScrollRight}> <img src="assets/arrow-right.svg" alt="" /> </button>
            </div>
        </>
    );
}