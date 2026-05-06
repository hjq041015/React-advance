import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Route as HomeRoute } from "@/routes/index.tsx";
import { Route as AddRoute } from "@/routes/add.tsx";
import { Route as SearchRoute } from "@/routes/search.tsx";

export default function BottomNavi() {
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
      }}
    >
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(_event, newValue) => {
          if (newValue === location.pathname) return;
          navigation({
            to: newValue,
          });
        }}
      >
        <BottomNavigationAction
          label="Home"
          value={HomeRoute.to}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Add"
          value={AddRoute.to}
          icon={<AddIcon />}
        />
        <BottomNavigationAction
          label="Search"
          value={SearchRoute.to}
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
