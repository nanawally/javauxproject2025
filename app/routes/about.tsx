import type { Route } from "./+types/home";
import { About } from "../pages/about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Smoothify" },
    { name: "description", content: "About Smoothify" },
  ];
}

export default function AboutRoute() {
  return <About />;
}