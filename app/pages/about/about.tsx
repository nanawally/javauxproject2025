import { Link } from "react-router";
import styles from "./about.module.css";

export function About() {
  return (
    <main className={styles.aboutTheme}>
      <h1>This is the About page</h1>
      <div className={styles.center}>
        <Link to="../">Home page</Link>
      </div>
    </main>
  );
}
