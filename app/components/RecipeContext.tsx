import React, { createContext, useState, useContext, type ReactNode } from "react";

interface RecipeContextProps {
  recipeIndex: number;
  setRecipeIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface RecipeProviderProps {
  children: ReactNode;
}

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [recipeIndex, setRecipeIndex] = useState<number>(1);

  return (
    <RecipeContext.Provider value={{ recipeIndex, setRecipeIndex }}>
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
