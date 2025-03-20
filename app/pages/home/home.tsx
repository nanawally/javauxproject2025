import { Link } from "react-router";
import styles from "./home1.module.css";

export function Home() {
  return (
    <main className={styles.heroImage}>
      <h1>Välkommen till smoothie-himlen!</h1>
      <p>Utforska vår hemsida för att hitta goda smoothie-recept!</p>
      <div className={styles.content}>
        <Link to="../about" className={styles.button}> Hitta smoothies</Link>
      </div>
    </main>
  );
}
