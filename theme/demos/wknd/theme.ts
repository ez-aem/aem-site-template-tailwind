import languageNavigation from "./components/languagenavigation/languagenavigation";
import xfHeader from "./components/experiencefragment/experiencefragment_header";
import navigation from "./components/navigation/navigation";
import dropdownPlaceholder from "./components/form-options/form_dropdown";

const documentReadyFunctions = () => {
  languageNavigation();
  navigation();
  xfHeader();
  dropdownPlaceholder();
};

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setTimeout(documentReadyFunctions, 1);
} else {
  document.addEventListener("DOMContentLoaded", documentReadyFunctions);
}
