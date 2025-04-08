import { type JSX } from "react";
import { Enkel } from "./Enkel";
import { Favorite } from "./Favorite";
import "./ReceptkortDesktop.module.css";

interface Props {
  image: string;
  name: string;
  description: string;
}

export const ReceptkortDesktop = ({ image, name, description }: Props): JSX.Element => {
  return (
    <div className="receptkort-desktop">
      <img className="image" alt={name} src={image} />
      <div className="text-wrapper-2">{name}</div>
      <p className="p">{description}</p>
      <Favorite className="property-1-default" />
      <Enkel className="enkel-instance" />
    </div>
  );
};
