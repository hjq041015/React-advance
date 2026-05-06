import { createFileRoute } from "@tanstack/react-router";
import MemoList from "@/features/home/MemoList.tsx";

export const Route = createFileRoute("/")({
  component: MemoList,
});
