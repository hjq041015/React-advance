import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "@tanstack/react-router";

export default function BottomNavi() {
  const [value, setValue] = useState(0);
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderTop: "1px solid",
        borderColor: "divider",
        boxShadow: "0 -8px 28px rgba(15, 23, 42, 0.08)",
      }}
    >
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(_event, newValue) => {
          navigation({
            to: newValue,
          });
        }}
        sx={{
          "& .Mui-selected": {
            color: "primary.main",
            fontWeight: 700,
          },
        }}
      >
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Add" value="/add" icon={<AddIcon />} />
        <BottomNavigationAction
          label="Search"
          value="/search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
