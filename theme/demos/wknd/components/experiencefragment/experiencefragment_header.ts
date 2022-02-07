const xfHeader = () => {
  const $elWrapper = document.querySelector("#main-header-wrapper");
  const $el = document.querySelector("#main-header");
  const $button = document.querySelector("#mobile-header-button");
  const $root = document.querySelector(".root");

  const toggleEl = (e) => {
    $root.classList.toggle("open");
    $el.classList.toggle("open");
    $elWrapper.classList.toggle("open");
  };
  $button.addEventListener("click", toggleEl);
};

export default xfHeader;
