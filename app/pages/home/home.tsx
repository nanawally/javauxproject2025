import { Link } from "react-router";
import styles from "./home.module.css";
import { CustomContent } from "app/components/CustomContent"
import { CustomHeader } from "~/components/CustomHeader";

export function Home() {
  return (
    <>
      <CustomHeader />
      <main className={styles.homeTheme}>
        <h1>Hello world!</h1>
        <div className={styles.center}>
          <Link to="/about">About page</Link> {/* Use absolute path */}
        </div>
      </main>
    </>
  );
}