import styles from "./CategoryButton.module.css"

interface CategoryButtonProps {
    category: string;
    isActive: boolean;
    onFilter: (category: string) => void;
}

export function CategoryButton({ category, isActive, onFilter }: CategoryButtonProps) {
    return (
        <button className={`${styles.button} ${isActive ? styles.active : ""}`}
            onClick={() => onFilter(category)}>
            {category}
        </button>
    );
}