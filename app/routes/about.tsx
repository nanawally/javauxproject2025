import type { Route } from "./+types/home";
import { About } from "../pages/about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About page" },
    { name: "description", content: "About Gr8 Smoothies" },
  ];
}

export default function AboutRoute() {
  return <About />;
}