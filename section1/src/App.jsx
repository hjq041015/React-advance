import { useState } from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import { Outlet, useLocation } from "react-router";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate() {
    const path = location.pathname;
    if (path === "/") {
      navigate("/about");
    } else if (path === "/about") {
      navigate("/");
    }
  }

  return (
    <>
      <button type="button" onClick={handleNavigate}>
        Toggler
      </button>
      <Outlet />
    </>
  );
}

export default App;
