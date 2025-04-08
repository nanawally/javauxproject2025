import { useEffect, useState } from "react";
import { CustomFooter } from "~/components/UI/CustomFooter";
import styles from "./explore.module.css";
import { ExploreFeed } from "~/components/Home/ExploreFeed";

export function Explore() {
  return (
    <>
      <main className={styles.exploreTheme}>
        <div className="contentWrapper">
          <ExploreFeed />
        </div>
        <CustomFooter />
      </main>
    </>
  );
}