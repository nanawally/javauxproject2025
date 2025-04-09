import styles from "./DifficultyIcon.module.css"


interface DifficultyIconProps {
    difficulty: string;
}

export function DifficultyIcon({ difficulty }: DifficultyIconProps) {
    const normalized = difficulty.toLowerCase();

    const iconSrc = {
        enkel: "assets/Enkel.jpg",
        medel: "assets/Medel.jpg",
        svår: "assets/Svår."
    }[normalized as "enkel" | "medel" | "svår"];

    return (
        <div className={styles.difficultyIcon}>
            {difficulty && (
                <img
                    src={`/assets/${difficulty}.jpg`}
                    alt={`Svårighetsgrad: ${difficulty}`}
                />
            )}
        </div>
    );
    
}
