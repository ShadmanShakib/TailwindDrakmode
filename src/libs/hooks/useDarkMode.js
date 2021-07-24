import React from "react";
export default function useDarkMode() {
  const [currentMode, setCurrentMode] = React.useState("light");
  //mode is opposite to currentMode
  const mode = currentMode === "light" ? "dark" : "light";
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(mode);
    root.classList.add(currentMode);
  }, [mode, currentMode]);
  return [mode, setCurrentMode];
}
