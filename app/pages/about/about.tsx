import { AboutPage } from "~/components/About/AboutPage";
import styles from "./about.module.css";
import { CustomFooter } from "~/components/UI/CustomFooter";
import { AboutPage } from "~/components/About/AboutPage";


export function About() {
  return (
    <>
      <main className={styles.aboutTheme}>
        <div className="contentWrapper">
          <AboutPage />
        </div>
        <CustomFooter />
      </main>
    </>
  );
}
