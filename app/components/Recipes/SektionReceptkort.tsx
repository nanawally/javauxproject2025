import React, { type JSX } from "react";
import { ReceptkortDesktop } from "./ReceptkortDesktop";
import type { Recipe } from "~/types/recipe";
import "./SektionReceptkort.module.css";

interface Props {
  receptData: Recipe[];
}

export const SektionReceptkort = ({ receptData }: Props): JSX.Element => {
  return (
    <div className="sektion-receptkort">
      {receptData.map((recipe) => (
        <ReceptkortDesktop
          key={recipe.id}
          image={recipe.image}
          name={recipe.name}
          description={recipe.instructions}
        />
      ))}
    </div>
  );
};
