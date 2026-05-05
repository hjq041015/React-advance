import { createFileRoute } from "@tanstack/react-router";
import Add from "../components/Add.tsx";

export const Route = createFileRoute("/add")({
  component: Add,
});
