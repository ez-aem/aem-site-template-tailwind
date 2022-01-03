import languageNavigation from "./components/languagenavigation/languagenavigation";
import navigation from "./components/navigation/navigation";

const documentReadyFunctions = () => {
  languageNavigation();
  navigation();
};

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setTimeout(documentReadyFunctions, 1);
} else {
  document.addEventListener("DOMContentLoaded", documentReadyFunctions);
}
