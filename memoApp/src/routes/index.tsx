import { createFileRoute } from "@tanstack/react-router";
import MemoList from "../components/MemoList.tsx";

export const Route = createFileRoute("/")({
  component: MemoList,
});
