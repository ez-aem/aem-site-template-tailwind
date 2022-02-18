function setColorSchemeClass(e) {
  const colorScheme = e.matches ? "dark" : "light";

  if (colorScheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Set on page load
setColorSchemeClass(window.matchMedia("(prefers-color-scheme: dark)"));

// Listen for changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", setColorSchemeClass);
