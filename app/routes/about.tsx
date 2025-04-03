import type { Route } from "./+types/home";
import { About } from "../pages/about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Om Smoothify" },
    { name: "description", content: "Om Smoothify" },
  ];
}

export default function AboutRoute() {
  return <About />;
}