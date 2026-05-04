import {
  createRootRoute,
  Outlet,
  useLocation,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function APP() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate() {
    const path = location.pathname;
    if (path === "/") {
      navigate({
        to: "/about",
      });
    } else if (path === "/about") {
      navigate({
        to: "/",
      });
    }
  }

  return (
    <>
      <button type="button" onClick={handleNavigate}>
        Toggler
      </button>
      <Outlet />

      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({ component: APP });
