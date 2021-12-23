import languageNavigation from "./components/languagenavigation/languagenavigation";
import navigation from "./components/navigation/navigation";

const documentReadyFunctions = (e) => {
  languageNavigation();
  navigation();
};

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(documentReadyFunctions, 1);
} else {
  document.addEventListener("DOMContentLoaded", documentReadyFunctions);
}