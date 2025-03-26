import React, { createContext, useState, useContext, type ReactNode, useEffect } from "react";
import type { Recipe } from "~/types/recipe";

interface RecipeContextProps {
  recipeIndex: number;
  setRecipeIndex: React.Dispatch<React.SetStateAction<number>>;
  recipes: Recipe[];
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [recipeIndex, setRecipeIndex] = useState<number>(1);

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
    <RecipeContext.Provider value={{ recipeIndex, setRecipeIndex, recipes, favorites, toggleFavorite }}>
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
