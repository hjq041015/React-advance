import { createFileRoute } from "@tanstack/react-router";
import Search from "../components/Search.tsx";

type SearchType = {
  keyword: string;
};

export const Route = createFileRoute("/search")({
  component: Search,
  validateSearch: (search: Record<string, unknown>): SearchType => ({
    keyword: (search.keyword as string) || "",
  }),
});
