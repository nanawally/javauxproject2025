import styles from "./home.module.css";
import { CustomHeader } from "~/components/CustomHeader";
import { HeroImage } from "~/components/HeroImage";
import { CustomFooter } from "~/components/CustomFooter";
import { SearchBar } from "~/components/SearchBar";
import { CustomContentHome } from "~/components/CustomContentHome";

export function Home() {
  return (
    <>
      <main className={styles.homeTheme}>
        <HeroImage />
        <SearchBar />
        <CustomContentHome />
      </main>
    </>
  );
}
