const navigation = () => {

  const $navigationItems = document.querySelectorAll(".navigation .cmp-navigation__item--level-0");

  $navigationItems.forEach($el => {
    const $childGroup = $el.querySelector(".cmp-navigation__group");
    if ($childGroup) {
      $el.classList.add("cmp-navigation__item--has-children");
      const $wrapper = document.createElement("span");
      const $button = document.createElement("button");
      const $a = $el.querySelector(".cmp-navigation__item-link");

      window.toggleNavigationGroup = (e) => {
        $childGroup.classList.toggle("cmp-navigation__group--open");
        $button.classList.toggle("open");
        setTimeout(() => document.addEventListener("click", closeNavigationGroup), 1);
      };

      window.closeNavigationGroup = (e) => {
        if (!$childGroup.contains(e.target) && e.target !== $button) {
          $button.classList.remove("open");
          $childGroup.classList.remove("cmp-navigation__group--open");
        }
        document.removeEventListener("click", closeNavigationGroup);
      };

      $wrapper.classList.add("cmp-navigation__item-link-wrapper");
      $button.classList.add("cmp-navigation__item__icon");
      $button.addEventListener("click", toggleNavigationGroup);
      $wrapper.appendChild($a);
      $wrapper.appendChild($button);
      $el.insertBefore($wrapper, $childGroup);
    }
  });
};

window.navigation = navigation;

export default navigation;