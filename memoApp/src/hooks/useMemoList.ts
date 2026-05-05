import { useLocalStorage } from "react-use";
import type { MemoItem } from "../types/MemoItem.ts";

export function useMemoList() {
  const [memoList, setMemoList] = useLocalStorage<MemoItem[]>("memoList", []);
  return { memoList, setMemoList };
}
