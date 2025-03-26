import type { Route } from "./+types/favorites";
import { Favorites } from "~/pages/favorites/favorites"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Favorites" },
        { name: "description", content: "All your favorites in one place!" },
    ];
}

export default function FavoritesRoute() {
    return <Favorites />
}