import { Link } from "react-router";
import styles from "./home.module.css";
import { CustomContent } from "app/components/CustomContent"
import { CustomHeader } from "~/components/CustomHeader";
import { HeroImage } from "~/components/HeroImage";

export function Home() {
  return (
    <>
      <CustomHeader />
      <main className={styles.homeTheme}>
        <HeroImage />
        <CustomContent />
      </main>
    </>
  );
}