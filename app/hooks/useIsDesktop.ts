import { useState, useEffect } from "react";

export function useIsDesktop(breakpoint = 768) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const check = () => setIsDesktop(window.innerWidth >= breakpoint);
            check();
            window.addEventListener("resize", check);
            return () => window.removeEventListener("resize", check);
        }
    }, [breakpoint]);

    return isDesktop;
}