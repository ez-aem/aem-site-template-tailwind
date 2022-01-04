import languageNavigation from "./components/languagenavigation/languagenavigation";
import xfHeader from "./components/experiencefragment/experiencefragment_header";
import navigation from "./components/navigation/navigation";

const documentReadyFunctions = () => {
  languageNavigation();
  navigation();
  xfHeader();
};

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setTimeout(documentReadyFunctions, 1);
} else {
  document.addEventListener("DOMContentLoaded", documentReadyFunctions);
}
