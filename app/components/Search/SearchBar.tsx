import { useEffect, useState, type ChangeEvent } from "react";
import styles from "./SearchBar.module.css"
import type { Recipe } from "~/types/recipe";

interface SearchBarProps {
    recipes: Recipe[];
    onFilteredRecipesChange: (filtered: Recipe[]) => void;
}

export function SearchBar({ recipes, onFilteredRecipesChange }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const filtered = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.ingredients.some((ingredient) =>
                ingredient.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        onFilteredRecipesChange(filtered);
    }, [searchTerm, recipes, onFilteredRecipesChange]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <section className={styles.searchWrapper}>
                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Sök efter ingredienser . . ."
                    name="search"
                    autoComplete="off" />
            </section>
        </>
    )
}