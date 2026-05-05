import { createRootRoute, Outlet } from "@tanstack/react-router";
import NavBar from "../components/NavBar.tsx";
import BottomNavi from "../components/BottomNavi.tsx";

const RootLayout = () => (
  <>
    <NavBar />
    <main
      style={{
        minHeight: "calc(100vh - 112px)",
        marginBottom: "56px",
        marginTop: "56px",
        padding: "32px 16px",
        background:
          "linear-gradient(180deg, #f8fafc 0%, #eef2ff 45%, #f8fafc 100%)",
      }}
    >
      <Outlet />
    </main>

    <BottomNavi />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
