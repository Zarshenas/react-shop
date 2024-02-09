import { useEffect, useRef, useState } from "react";
import { themes } from "../../utils/constants/Themes";
import Theme from "./Theme";

function ThemeSwitcher() {
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [theme, setTheme] = useState();
  const ref = useRef();
  useEffect(() => {
    //just filling the theme state to not be empty
    if (!theme) {
      setTheme(themes.find((i) => i.mode === localStorage.theme));
    }
    //checking if localstorage has any data about theme
    if (!localStorage.theme) {
      localStorage.theme = "system";
    }

    if (
      localStorage.theme === "dark" ||
      (localStorage.theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else if (localStorage.theme === "light") {
      document.documentElement.classList.remove("dark");
    }

    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsSwitcherOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [theme]);
  const themeHandler = () => {
    setIsSwitcherOpen((prev) => !prev);
  };
  return (
    <div ref={ref} className="relative text-xl xl:text-2xl bad">
      {theme && (
        <theme.Icon
          onClick={themeHandler}
          className={"text-sky-500 cursor-pointer"}
        />
      )}
      <ul
        className={`${
          !isSwitcherOpen ? "hidden" : ""
        } z-50 w-max absolute top-12 -right-12 bg-white dark:bg-grayshade-500 border border-grayshade-300 p-5 rounded-xl`}
      >
        {themes.map((theme) => (
          <Theme
            key={theme.id}
            Icon={theme.Icon}
            mode={theme.mode}
            setTheme={setTheme}
          />
        ))}
      </ul>
    </div>
  );
}

export default ThemeSwitcher;
