import { createFileRoute } from "@tanstack/react-router";
import MemoItem from "../components/MemoItem.tsx";

export const Route = createFileRoute("/posts/$memoId")({
  component: MemoItem,
});
