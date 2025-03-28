import { CustomFooter } from "~/components/UI/CustomFooter";
import styles from "./home.module.css";
import { CustomContentHome } from "~/components/Home/CustomContentHome";

export function Home() {
  return (
    <>
      <main className={styles.homeTheme}>
        <div className={styles.contentWrapper}>
          <CustomContentHome />
        </div>
        <CustomFooter />
      </main>
    </>
  );
}
