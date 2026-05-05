import { Divider, ListItem, ListItemText } from "@mui/material";
import type { MemoItem } from "../types/MemoItem.ts";

function MemoListItem({
  memoList,
  isLast = false,
}: {
  memoList: MemoItem;
  isLast?: boolean;
}) {
  return (
    <>
      <ListItem alignItems="flex-start" sx={{ px: 2.5, py: 1.75 }}>
        <ListItemText
          primary={memoList.title}
          secondary={<>{memoList.content}</>}
          primaryTypographyProps={{
            fontWeight: 700,
            noWrap: true,
          }}
          secondaryTypographyProps={{
            sx: {
              mt: 0.5,
              color: "text.secondary",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            },
          }}
        />
      </ListItem>
      {!isLast && <Divider component="li" />}
    </>
  );
}
export default MemoListItem;
