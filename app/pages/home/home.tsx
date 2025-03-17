import { Link } from "react-router";
import styles from "./home.module.css";

export function Home() {
  return (
    <main className={styles.homeTheme}>
      <h1>Hello world!</h1>
      <div className={styles.center}>
        <Link to="../about">About page : Development</Link>
      </div>
    </main>
  );
}
