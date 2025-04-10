import { useState } from "react";
import styles from "./ScrollButton.module.css"

interface ScrollButtonProps {
    scrollRef: React.RefObject<HTMLDivElement | null>;
    scrollDistanceDesktop?: number;
    scrollDistanceMobile?: number;
}



export function ScrollButton({ scrollRef, scrollDistanceDesktop = 600, scrollDistanceMobile = 250 }: ScrollButtonProps) {
    const [isScrolling, setIsScrolling] = useState(false);

    function handleScroll(direction: "left" | "right") {
        const wrapper = scrollRef.current;
        if (!wrapper || isScrolling) return;

        const isMobile = window.innerWidth <= 600;
        const scrollDistance = isMobile ? 250 : 600;
        const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
        let scrollAmount = direction === "right" ? scrollDistance : -scrollDistance;

        if (direction === "right") {
            const remaining = maxScrollLeft - wrapper.scrollLeft;
            scrollAmount = Math.min(scrollDistance, remaining);
        } else {
            scrollAmount = -Math.min(scrollDistance, wrapper.scrollLeft);
        }

        setIsScrolling(true);
        wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" })

        setTimeout(() => {
            setIsScrolling(false);
        }, 600)

        console.log({
            clientWidth: wrapper.clientWidth,
            scrollWidth: wrapper.scrollWidth,
            scrollLeft: wrapper.scrollLeft,
            maxScrollLeft
          });
    }

    

    return (
        <>
            <button className={styles.leftScrollButton}
                onClick={() => handleScroll("left")}
                disabled={isScrolling}> <img src="assets/arrow-left-b.jpg" alt="" /> </button>

            <button className={styles.rightScrollButton}
                onClick={() => handleScroll("right")}
                disabled={isScrolling}> <img src="assets/arrow-right-b.jpg" alt="" /> </button>
        </>
    )
}
