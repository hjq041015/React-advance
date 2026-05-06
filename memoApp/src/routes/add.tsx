import { createFileRoute } from "@tanstack/react-router";
import Add from "@/features/add/Add.tsx";

export const Route = createFileRoute("/add")({
  component: Add,
});
