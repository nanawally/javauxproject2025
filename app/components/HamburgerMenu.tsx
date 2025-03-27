import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./HamburgerMenu.module.css";

export function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.hamburgerMenu}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.menuButton}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isOpen && (
                <ul className={styles.menuList}>
                    <li><Link to="/">Hem</Link></li>
                    <li><Link to="/about">Om oss</Link></li>
                </ul>
            )}
        </div>
    );
}