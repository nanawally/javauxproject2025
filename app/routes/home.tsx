import type { Route } from "./+types/home";
import { Home } from "~/pages/home/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Smoothify" },
    { name: "description", content: "Welcome to Gr8 Smoothies!" },
  ];
}
export default function HomeRoute() {
  return <Home />
}

