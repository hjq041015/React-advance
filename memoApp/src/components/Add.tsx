import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useMemoList } from "../hooks/useMemoList.ts";
import { toast } from "sonner";

function Add() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { memoList, setMemoList } = useMemoList();

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() && !content.trim()) {
      return;
    }

    const newMemoList = [
      ...(memoList || []),
      { id: Date.now(), title: title.trim(), content: content.trim() },
    ];
    setMemoList(newMemoList);
    toast.success("Memo added successfully!");
    setTitle("");
    setContent("");
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
        Save Memo
      </Button>
    </Stack>
  );
}
export default Add;
