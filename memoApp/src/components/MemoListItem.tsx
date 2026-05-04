import { Divider, ListItem, ListItemText } from "@mui/material";
import type { MemoItem } from "../types/MemoItem.ts";

function MemoListItem({ memoList }: { memoList: MemoItem }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={memoList.title}
          secondary={<>{memoList.content}</>}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}
export default MemoListItem;
