import { Link } from "react-router";
import styles from "./home.module.css";
import { CustomContent } from "app/components/CustomContent"
import { CustomHeader } from "~/components/CustomHeader";
import { HeroImage } from "~/components/HeroImage";
import { CustomFooter } from "~/components/CustomFooter";
import { SearchBar } from "~/components/SearchBar";

export function Home() {
  return (
    <>
      <CustomHeader />
      <main className={styles.homeTheme}>
        <HeroImage />
        <SearchBar />
        <CustomContent />
        <CustomFooter />
      </main>
    </>
  );
}