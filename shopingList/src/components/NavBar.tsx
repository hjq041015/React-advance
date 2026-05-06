import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { useContext, useState } from "react";
import { PrimeReactContext } from "primereact/api";

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);
  const { changeTheme } = useContext(PrimeReactContext);

  const LIGHT_THEME = "lara-light-cyan";
  const DARK_THEME = "lara-dark-cyan";

  function toggleTheme() {
    const currentTheme = isDark ? DARK_THEME : LIGHT_THEME;
    const nextTheme = isDark ? LIGHT_THEME : DARK_THEME;
    changeTheme?.(currentTheme, nextTheme, "theme-link", () =>
      setIsDark(!isDark),
    );
  }

  const itemRenderer = (item: any) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const items = [
    {
      label: "Cart",
      icon: "pi pi-shopping-cart",
      badge: 3,
      template: itemRenderer,
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Button
        onClick={toggleTheme}
        icon={`pi pi-${isDark ? "moon" : "sun"}`}
        text
        aria-label="Filter"
        severity="secondary"
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
