import { TextField } from "@mui/material";
import { useState } from "react";
import MemoList from "./MemoList.tsx";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <main style={{ textAlign: "center" }}>
      <TextField
        fullWidth
        id="memo-title"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <br />

      <MemoList search={search} />
    </main>
  );
}
export default Search;
