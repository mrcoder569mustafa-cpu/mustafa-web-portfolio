// utils/theme.js
export const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  }
  return "light";
};

export const getInitialAccent = () => {
  if (typeof window !== "undefined") {
    const savedAccent = localStorage.getItem("accent");
    return savedAccent ? savedAccent : "cyan";
  }
  return "cyan";
};

// Apply theme to document
export const applyTheme = (theme) => {
  const root = window.document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem("theme", theme);
};

// Apply accent color to CSS variable
export const applyAccent = (accent) => {
  const root = window.document.documentElement;
  const value =
    accent === "purple"
      ? "#a78bfa"
      : accent === "yellow"
      ? "#facc15"
      : "#22d3ee"; // cyan default
  root.style.setProperty("--accent-color", value);
  localStorage.setItem("accent", accent);
};

// Toggle theme
export const toggleTheme = (currentTheme) => {
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  return newTheme;
};

// Change accent
export const changeAccent = (newAccent) => {
  applyAccent(newAccent);
  return newAccent;
};
