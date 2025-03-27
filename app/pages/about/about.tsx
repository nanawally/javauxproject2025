import { Link } from "react-router";
import styles from "./about.module.css";
import { CustomHeader } from "~/components/UI/CustomHeader";

export function About() {
  return (
    <> 
    <CustomHeader />
    <main className={styles.aboutTheme}>
    </main>
    </>
  );
}
