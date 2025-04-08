import React from "react";


import type { Recipe } from "~/types/recipe";
import styles from "./SektionReceptkort.module.css";
import { Receptkort } from "./Receptkort";
import { RecipeCard } from "./Cards/RecipeCard";

interface Props {
  receptData: Recipe[];
}

export const SektionReceptkort = ({ receptData }: Props) => {
  return (
    <div className={styles.receptGrid}>
      {receptData.map((recipe) => (
        <RecipeCard image={recipe.image} title={recipe.name} description={recipe.description} id={recipe.id}/>
        // <Receptkort
        //   key={recipe.id}
        //   image={recipe.image}
        //   name={recipe.name}
        //   description={recipe.description}
        // />
      ))}
    </div>
  );
};
