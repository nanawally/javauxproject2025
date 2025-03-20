import { Link } from "react-router";
import styles from "./about1.module.css";

export function About() {
  return (
    <main className={styles.heroImage}>
      <h1>Smoothies kommer inom kort!</h1>
      <div className={styles.content}>
        <Link to="../" className={styles.button}>Till startsidan</Link>
      </div>
    </main>
  );
}
