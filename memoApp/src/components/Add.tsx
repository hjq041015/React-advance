import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

function Add() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: 560,
        mx: "auto",
        maxHeight: "calc(100vh - 176px)",
        overflow: "hidden",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, sm: 4 },
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
          boxShadow: "0 16px 48px rgba(15, 23, 42, 0.08)",
          maxHeight: "100%",
          overflow: "hidden",
        }}
      >
        <Stack component="form" spacing={2}>
          <Box>
            <Typography variant="h5" fontWeight={700}>
              New Memo
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.75 }}>
              Capture your idea before it slips away.
            </Typography>
          </Box>

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
            rows={5}
            variant="outlined"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            slotProps={{
              input: {
                sx: {
                  textarea: {
                    overflow: "hidden",
                    resize: "none",
                  },
                },
              },
            }}
          />

          <Button
            fullWidth
            type="submit"
            size="large"
            variant="contained"
            startIcon={<SaveIcon />}
            sx={{
              py: 1.25,
              borderRadius: 2,
              fontWeight: 700,
              textTransform: "none",
            }}
          >
            Save Memo
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
export default Add;
