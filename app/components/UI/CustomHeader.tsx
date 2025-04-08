import { Link } from "react-router";
import styles from "./CustomHeader.module.css"
import { HamburgerMenu } from "../Navigation/HamburgerMenu";
import { useEffect, useState } from "react";
import { useIsDesktop } from "~/hooks/useIsDesktop";

export function CustomHeader() {
    const isDesktop = useIsDesktop();

    return (
        <header className={styles.centerHeader}>
            {isDesktop ? (
                <>
                    <div className={styles.navContainer}>
                        <Link to="../" className={styles.link}>
                            <img src="/assets/logo.jpg" alt="Logo" className={styles.logo} />
                        </Link>
                        <Link to="about" className={styles.link}> Om oss </Link>
                        <Link to="explore" className={styles.link}> Alla recept </Link>
                    </div>
                    <div className={styles.iconContainer}>
                        <Link to="explore" className={styles.icon}>
                            <img src="/assets/Search.jpg" alt="sök" />
                        </Link>
                        <Link to="favorites" className={styles.icon}>
                            <img src="/assets/Favorite-empty-b.jpg" alt="Dina favoriter" className={styles.favoritesLink} />
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <HamburgerMenu />
                    <Link to="../" className={styles.icon}>
                        <img src="/assets/logo.jpg" alt="Logo" className={styles.logo} />
                    </Link>
                    <Link to="favorites" className={styles.icon}>
                        <img src="/assets/Favorite-empty-b.jpg" alt="Dina favoriter" className={styles.favoritesLink} />
                    </Link>
                </>
            )}
        </header>
    )
}