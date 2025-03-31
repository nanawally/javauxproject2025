import type { Route } from "./+types/explore";
import { Explore } from "~/pages/explore/explore";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Utforska alla recept!" },
        { name: "description", content: "Alla recept" },
    ];
}

export default function ExploreRoute() {
    return <Explore />
}