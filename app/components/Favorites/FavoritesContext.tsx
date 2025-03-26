import { createContext, useContext, useEffect, useState } from "react"

const FAVORITES_KEY = "favoriteRecipe";

interface FavoriteContextProps {
    favorites: number[];
    toggleFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoriteContextProps | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem(FAVORITES_KEY);
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }, [favorites]);

    function toggleFavorite(id: number) {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("Context must be used in a FavoritesProvider")
    }
    return context;
}