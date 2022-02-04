const xfHeader = () => {
  const $elWrapper = document.querySelector("#main-header-wrapper");
  const $el = document.querySelector("#main-header");
  const $button = document.querySelector("#mobile-header-button");

  const toggleEl = () => {
    $el.classList.toggle("open");
    $elWrapper.classList.toggle("open");
    document.body.classList.toggle("overflow-hidden");
  };
  $button.addEventListener("click", toggleEl);
};

export default xfHeader;
