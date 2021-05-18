function _initialMobileMenu() {
  const modal = document.querySelector("#mobile_header");
  const menu = document.querySelector("#mobile_nav");

  modal.addEventListener("click", menuHandler);

  function menuHandler(event) {
    const action = event.target.dataset.menu;
    if (action === "close") {
      menu.classList.remove("opened");
      document.body.style.overflow = "scroll";
    } else if (action === "open") {
      menu.classList.add("opened");
      document.body.style.overflow = "hidden";
    }
  }
}

_initialMobileMenu();
