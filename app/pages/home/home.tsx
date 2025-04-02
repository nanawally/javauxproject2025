import { CustomFooter } from "~/components/UI/CustomFooter";
import styles from "./home.module.css";
import { LandingFeed } from "~/components/Home/LandingFeed";

export function Home() {
  return (
    <>
      <main className={styles.homeTheme}>
        <div className="contentWrapper">
          <LandingFeed />
        </div>
        <CustomFooter />
      </main>
    </>
  );
}
