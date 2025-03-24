import { CustomFooter } from "~/components/CustomFooter";
import styles from "./home.module.css";
import { CustomContentHome } from "~/components/CustomContentHome";

export function Home() {
  return (
    <>
      <main className={styles.homeTheme}>
        <CustomContentHome />
        <CustomFooter />  
      </main>
    </>
  );
}
