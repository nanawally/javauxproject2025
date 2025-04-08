import React from "react";
import styles from "./Receptkort.module.css";

interface Props {
  image: string;
  name: string;
  description: string;
}

export const Receptkort = ({ image, name, description }: Props) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
