import List from "@mui/material/List";

import MemoListItem from "./MemoListItem.tsx";

import { Link } from "@tanstack/react-router";
import { useMemoList } from "../hooks/useMemoList.ts";

export default function MemoList() {
  const { memoList } = useMemoList();
  const isEmpty = !memoList || memoList.length === 0;

  if (isEmpty) {
    return (
      <div
        style={{
          maxWidth: 520,
          margin: "0 auto",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 24,
            lineHeight: 1.4,
            fontWeight: 700,
          }}
        >
          There's no memo yet
        </h2>
        <p
          style={{
            margin: "12px 0 0",
            color: "#64748b",
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          Try to{" "}
          <Link
            to="/add"
            style={{
              color: "#1976d2",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            add one
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 640,
        mx: "auto",
        p: 0,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      {memoList.map((memo, index) => (
        <MemoListItem
          key={memo.id}
          memoList={memo}
          isLast={index === memoList.length - 1}
        />
      ))}
    </List>
  );
}
