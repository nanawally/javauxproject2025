import styles from "./about.module.css";
import { CustomFooter } from "~/components/UI/CustomFooter";
import { AboutPage } from "~/components/About/AboutPage";

export function About() {
  return (
    <>
      <main className={styles.aboutTheme}>
        <div className={styles.placeholderWrapper}>
          <AboutPage />
        </div>
        <CustomFooter />
      </main>

    </>
  );
}
