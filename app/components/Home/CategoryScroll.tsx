import { useRecipeContext } from "../Recipes/RecipeContext";
import { Link } from "react-router-dom";
import styles from "./CategoryScroll.module.css";
import { useEffect, useRef, useState } from "react";

export function CategoryScroll({ category }: { category: string }) {
    const { recipes, setRecipeIndex } = useRecipeContext();
    const categoryRecipes = recipes.filter((recipe) => recipe.category === category);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleRecipeClick = (id: number) => {
        setRecipeIndex(id);
    };

    function handleScroll(direction: "left" | "right") {
        const wrapper = scrollWrapperRef.current;
        if (!wrapper || isScrolling) return;

        const isMobile = window.innerWidth <= 600;
        const scrollDistance = isMobile ? 250 : 600;
        const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
        let scrollAmount = direction === "right" ? scrollDistance : -scrollDistance;

        if (direction === "right") {
            const remaining = maxScrollLeft - wrapper.scrollLeft;
            scrollAmount = Math.min(scrollDistance, remaining);
        } else {
            scrollAmount = -Math.min(scrollDistance, wrapper.scrollLeft);
        }

        setIsScrolling(true);
        wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" })

        setTimeout(() => {
            setIsScrolling(false);
        }, 600)
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
                    onClick={() => handleScroll("left")}
                    disabled={isScrolling}> <img src="assets/arrow-left.jpg" alt="" /> </button>

                <button className={styles.rightScrollButton}
                    onClick={() => handleScroll("right")}
                    disabled={isScrolling}> <img src="assets/arrow-right.jpg" alt="" /> </button>
            </div>
        </>
    );
}