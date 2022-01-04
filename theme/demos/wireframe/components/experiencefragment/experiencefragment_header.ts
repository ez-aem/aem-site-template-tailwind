const xfHeader = () => {
  const $el = document.querySelector("#main-header");
  const $button = $el.querySelector("#mobile-header-button");

  const toggleEl = () => {
    $el.classList.toggle("open");
    document.body.classList.toggle("overflow-hidden");
  };

  $button.addEventListener("click", toggleEl);
};

export default xfHeader;
