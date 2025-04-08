import React from "react";
import styles from "./Enkel.module.css";


interface EnkelProps {
  className?: string; 
}

export const Enkel: React.FC<EnkelProps> = ({ className }) => {
  return (
    <div className={`${styles.enkel} ${className || ""}`}>
      <div className={styles.group}>
        <div className={styles.text}>Enkel</div>
        <div className={styles.rectangle} />
        <div className={styles.outlineBox1} />
        <div className={styles.outlineBox2} />
      </div>
    </div>
  );
};
