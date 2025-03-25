import { useState, type ChangeEvent } from "react";
import styles from "./SearchBar.module.css"

interface SearchBarProps {
    onSearchChange: (term: string) => void;
}

export function SearchBar({ onSearchChange }: SearchBarProps) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
    }

    return (
        <>
            <section className={styles.searchWrapper}>
                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Sök . . ."
                    name="search"
                    autoComplete="off" />
            </section>
        </>
    )
}