const xfHeader = () => {
  const $xfWrapper = document.querySelector("#header").parentElement;
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

  // Add scroll listener
  document.addEventListener("scroll", function (e) {
    window.requestAnimationFrame(function () {
      if (window.scrollY !== 0) {
        document.documentElement.classList.add("scrolled");
      } else {
        document.documentElement.classList.remove("scrolled");
      }
    });
  });
};

export default xfHeader;
