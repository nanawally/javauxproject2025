import type { Route } from "./+types/home";
import { Home } from "~/pages/home/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Smoothify" },
    { name: "description", content: "Welcome to Smoothify!" },
  ];
}
export default function HomeRoute() {
  return <Home />
}

