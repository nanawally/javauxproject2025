import { Link } from "react-router";
import styles from "./home.module.css";
import { CustomContent } from "app/components/CustomContent"
import { CustomHeader } from "~/components/CustomHeader";
import { HeroImage } from "~/components/HeroImage";
import { CustomFooter } from "~/components/CustomFooter";

export function Home() {
  return (
    <>
      <CustomHeader />
      <main className={styles.homeTheme}>
        <HeroImage />
        <CustomContent />
        <CustomFooter />
      </main>
    </>
  );
}