import React from "react";
export default function useDarkMode() {
  const [currentMode, setCurrentMode] = React.useState("light");
  //currentMode is opposite to mode
  const mode = currentMode === "light" ? "dark" : "light";
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(mode);
    root.classList.add(currentMode);
  }, [mode, currentMode]);
  return [mode, setCurrentMode];
}
