import { useState } from "react";
import { useMemoList } from "../hooks/useMemoList.ts";
import { Button, Stack, TextField } from "@mui/material";
import { Route } from "../routes/posts.$memoId.tsx";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

function MemoItem() {
  const { memoList, setMemoList } = useMemoList();
  const navigate = useNavigate();
  const { memoId } = Route.useParams();

  const currentMemo = memoList?.find((memo) => memo.id === Number(memoId));

  const [title, setTitle] = useState(currentMemo?.title || "");
  const [content, setContent] = useState(currentMemo?.content || "");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const newMemoList = memoList?.map((memo) => {
      if (memo.id === Number(memoId)) {
        return {
          ...memo,
          title,
          content,
        };
      }
      return memo;
    });
    setMemoList(newMemoList);
    toast.success("Memo updated successfully!");

    navigate({
      to: "/",
    });
  }

  return (
    <Stack
      component="form"
      spacing={2}
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: 560,
        mx: "auto",
      }}
    >
      <TextField
        fullWidth
        id="memo-title"
        label="Title"
        placeholder="Enter memo title"
        variant="outlined"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <TextField
        fullWidth
        id="memo-content"
        label="Content"
        placeholder="Write something useful..."
        multiline
        minRows={5}
        variant="outlined"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        slotProps={{
          input: {
            sx: {
              textarea: {
                resize: "none",
              },
            },
          },
        }}
      />

      <Button fullWidth type="submit" size="large" variant="contained">
        Update Memo
      </Button>
    </Stack>
  );
}
export default MemoItem;
