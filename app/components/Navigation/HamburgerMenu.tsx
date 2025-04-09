import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./HamburgerMenu.module.css";

export function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [isOpen]);

    return (
        <div className={styles.hamburgerMenu} ref={menuRef}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.menuButton}>
                {isOpen ? <img src="/assets/Cross-b.jpg" /> : <img src="/assets/Hamburger-b.jpg" />}
            </button>
            {isOpen && (
                <ul className={styles.menuList}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Hem</Link></li>
                    <li><Link to="/about" onClick={() => setIsOpen(false)}>Om oss</Link></li>
                    <li><Link to="/explore" onClick={() => setIsOpen(false)}>Utforska alla recept</Link></li>
                </ul>
            )}
        </div>
    );
}