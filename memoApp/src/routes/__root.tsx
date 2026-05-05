import { createRootRoute, Outlet } from "@tanstack/react-router";
import NavBar from "../components/NavBar.tsx";
import BottomNavi from "../components/BottomNavi.tsx";
import { Toaster } from "sonner";

const RootLayout = () => (
  <>
    <NavBar />
    <main
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        padding: "80px 16px 72px",
      }}
    >
      <Outlet />
    </main>

    <BottomNavi />
    <Toaster richColors position="top-right" />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
