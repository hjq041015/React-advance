import { Divider, IconButton, ListItem, ListItemText } from "@mui/material";
import type { MemoItem } from "@/types/MemoItem.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "@tanstack/react-router";

function MemoListItem({
  memoList,
  isLast = false,
  onDelete,
}: {
  memoList: MemoItem;
  isLast?: boolean;
  onDelete: (deleteId: number) => void;
}) {
  const navigate = useNavigate();
  return (
    <>
      <ListItem
        onClick={() =>
          navigate({
            to: `/posts/$memoId`,
            params: { memoId: `${memoList.id}` },
          })
        }
        alignItems="flex-start"
        sx={{ px: 2.5, py: 1.75 }}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(event) => {
              event.stopPropagation();
              onDelete(memoList.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText
          primary={memoList.title}
          secondary={<>{memoList.content}</>}
          slotProps={{
            primary: {
              fontWeight: 700,
              noWrap: true,
            },
            secondary: {
              sx: {
                mt: 0.5,
                color: "text.secondary",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              },
            },
          }}
        />
      </ListItem>
      {!isLast && <Divider component="li" />}
    </>
  );
}
export default MemoListItem;
