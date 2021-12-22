const getLanguageFromLangCode = (langCode: string) => {
  let language = langCode;
  switch (langCode) {
    case "en":
      language = "English";
      break;
    case "fr":
      language = "French";
      break;
    case "de":
      language = "Germany";
      break;
    case "it":
      language = "Italian";
      break;
    case "ru":
      language = "Russian";
      break;
    case "es":
      language = "Spanish";
      break;
    case "da":
      language = "Danish";
      break;
    case "ga":
      language = "Irish";
      break;
    case "pt":
      language = "Portuguese";
      break;
    case "ro":
      language = "Romanian";
      break;
    case "sv":
      language = "Swedish";
      break;
    case "tr":
      language = "Turkish";
      break;
  }
  return language;
};

const languageNavigation = () => {

  const $elements = document.querySelectorAll(".languagenavigation");

  $elements.forEach($el => {
    const $active = $el.querySelector(".cmp-languagenavigation__item--active");
    console.log("$active", $active);
    let langCode = "";
    let language = "language";
    let classes = [];
    $active.classList.forEach(className => {
      if (!className.includes("active")) {
        if (className.includes("langcode")) {
          langCode = className.split("langcode-")[1];
          language = getLanguageFromLangCode(langCode);
        }
        classes.push(className);
      }
    });

    const $toggleButton = document.createElement("button");
    const $activeText = document.createElement("span");
    $toggleButton.classList.add(...classes);
    $activeText.innerText = language;
    $toggleButton.classList.add("cmp-languagenavigation__button");
    $toggleButton.appendChild($activeText);
    $toggleButton.addEventListener("hover", (e) => $el.classList.toggle("open"));
    $toggleButton.addEventListener("click", (e) => $el.classList.toggle("open"));
    $el.querySelector(".cmp-languagenavigation").prepend($toggleButton);
  });
};

window.langNav = languageNavigation;

export default languageNavigation;