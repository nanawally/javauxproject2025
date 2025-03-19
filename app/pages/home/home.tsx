import { Link } from "react-router";
import styles from "./home.module.css";
import { CustomContent } from "app/components/CustomContent"

export function Home() {
  return (
    <main className={styles.homeTheme}>
      <div className={styles.center}>
        <CustomContent />
      </div>
    </main>
  );
}
