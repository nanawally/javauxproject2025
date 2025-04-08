import { useRecipeContext } from "./RecipeContext";
import styles from "./TabsComponent.module.css";
import { useEffect, useState } from "react";

interface TabProps {
  id: string;
  label: string;
  content: React.ReactNode;
}

export const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("ingredients");
  const { recipes, recipeIndex } = useRecipeContext();

  const selectedRecipe = recipes.length > 0 ? recipes[recipeIndex] : null;

  const tabs: TabProps[] = [
    {
      id: "ingredients",
      label: "Ingredienser",
      content: (
        <ul className={styles.tabsList}>
          {selectedRecipe?.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}{" "}
        </ul>
      ),
    },
    {
      id: "instructions",
      label: "Gör så här",
      content: (
        <div className={styles.tabsInstructions}>
          {selectedRecipe?.instructions}
        </div>
      ),
    },
    {
      id: "nutrition",
      label: "Näringsvärde",
      content: (
        <ul className={styles.tabsList}>
          {selectedRecipe?.nutrition.map((nutrition, index) => (
            <li key={index}>{nutrition}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map((tabs) => (
          <button
            className={`${styles.tabButton} ${
              activeTab === tabs.id ? styles.active : ""
            }`}
            key={tabs.id}
            onClick={() => setActiveTab(tabs.id)}
          >
            {tabs.label}
          </button>
        ))}
      </div>
      <div className={styles.tabsContent}>
        {tabs.find((tabs) => tabs.id === activeTab)?.content}
      </div>
    </>
  );
};
