import { useRecipeContext } from "../Recipes/RecipeContext";
import styles from "./TabsComponent.module.css"
import { useEffect, useState } from 'react';

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
        { id: "ingredients", label: "Ingredienser", content: <div>{selectedRecipe?.ingredients[0]}</div> },
        { id: "instructions", label: "Gör så här", content: <div>{selectedRecipe?.instructions}</div> },
        { id: "nutrition", label: "Näringsvärde", content: <div>{selectedRecipe.</div> }
    ];

    return (
        <>
            <div className={styles.tabsContainer}>
                {tabs.map((tabs) => (
                    <button className={styles.tabButton}
                        key={tabs.id}
                        onClick={() => setActiveTab(tabs.id)}>
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