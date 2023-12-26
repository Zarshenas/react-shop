import { useEffect, useState } from "react";
import { themes } from "../../utils/constants/Themes";
import Theme from "./Theme";

function ThemeSwitcher() {
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <button onClick={() => setIsSwitcherOpen((prev) => !prev)}>toggle</button>
      <ul className={!isSwitcherOpen ? "hidden" : ""}>
        {themes.map((theme) => (
          <Theme
            key={theme.id}
            Icon={theme.Icon}
            mode={theme.mode}
            setTheme={setTheme}
          />
        ))}
      </ul>
    </>
  );
}

export default ThemeSwitcher;
