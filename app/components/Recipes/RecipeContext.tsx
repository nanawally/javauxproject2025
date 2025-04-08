import React, { createContext, useState, useContext, type ReactNode, useEffect } from "react";
import type { Recipe, RecipeName } from "~/types/recipe";

interface RecipeContextProps {
    recipeIndex: number;
    setRecipeIndex: React.Dispatch<React.SetStateAction<number>>;
    recipes: Recipe[];
    favorites: number[];
    toggleFavorite: (id: number) => void;
    smoothieOfTheDay: Recipe | null;
}

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [recipeIndex, setRecipeIndex] = useState<number>(() => {
        if (typeof window !== "undefined") {
            const storedIndex = localStorage.getItem("RecipeIndex");
            return storedIndex ? parseInt(storedIndex, 10) : 1;
        }
        return 1;
    });
    const [smoothieOfTheDay, setSmoothieOfTheDay] = useState<Recipe | null>(null);

    // Fetch data onces components mounts
    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await fetch("/recipelist.JSON");
                if (!response.ok) throw new Error("Failed to fetch recipes");
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        }
        fetchRecipes();
    }, []);

    //Fetch date and select a smoothie of the day from seed
    useEffect(() => {
        if (recipes.length > 0) {
            const dateSeed = parseInt(new Date().toISOString().split("T")[0].replace(/-/g, ""), 10);
            const index = dateSeed % recipes.length;
            setSmoothieOfTheDay(recipes[index]);
        }
    }, [recipes]);

    // Store recipeIndex
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("RecipeIndex", recipeIndex.toString());
        }
    }, [recipeIndex])

    // Store favorites
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favoriteRecipes");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    // Load favorites
    useEffect(() => {
        localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
    }, [favorites]);

    // Toggle favorites
    const toggleFavorite = (id: number) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(id)
                ? prevFavorites.filter((favId) => favId !== id)
                : [...prevFavorites, id]
        );
    };

    return (
        <RecipeContext.Provider value={{ recipeIndex, setRecipeIndex, recipes, favorites, toggleFavorite, smoothieOfTheDay }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipeContext = () => {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error("useRecipeContext must be used within a RecipeProvider");
    }
    return context;
};
