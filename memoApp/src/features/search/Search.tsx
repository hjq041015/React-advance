import { TextField } from "@mui/material";
import React, { useState } from "react";
import MemoList from "@/features/home/MemoList.tsx";
import { useNavigate } from "@tanstack/react-router";
import { Route } from "@/routes/search.tsx";

function Search() {
  const navigate = useNavigate();
  const { keyword } = Route.useSearch();
  const [search, setSearch] = useState(keyword);

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    const newSearch = event.target.value;
    setSearch(newSearch);
    navigate({
      to: ".",
      search: () => ({ keyword: newSearch }),
    });
  }

  return (
    <main style={{ textAlign: "center" }}>
      <TextField
        fullWidth
        id="memo-title"
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleClick}
      />

      <br />

      <MemoList search={search} />
    </main>
  );
}
export default Search;
