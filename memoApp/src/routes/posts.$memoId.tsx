import { createFileRoute } from "@tanstack/react-router";
import MemoItem from "@/features/edit/MemoItem.tsx";

export const Route = createFileRoute("/posts/$memoId")({
  component: MemoItem,
});
