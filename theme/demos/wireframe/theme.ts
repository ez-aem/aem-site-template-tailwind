import languageNavigation from "./components/languagenavigation/languagenavigation"; "./components/languagenavigation/languagenavigation";

const documentReadyFunctions = (e) => {
  languageNavigation();
};

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(documentReadyFunctions, 1);
} else {
  document.addEventListener("DOMContentLoaded", documentReadyFunctions);
}