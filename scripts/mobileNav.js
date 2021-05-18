const modal = document.querySelector("#mobile_header");
const menu = document.querySelector("#mobile_nav");
modal.addEventListener("click", menuHandler);
console.log(menu);

function menuHandler(event) {
  const action = event.target.dataset.menu;
  console.log(action);
  if (action === "close") {
    console.log("close menu");
    menu.classList.remove("opened");
    document.body.style.overflow = "scroll";
  }
  if (action === "open") {
    console.log("close menu");
    menu.classList.add("opened");
    document.body.style.overflow = "hidden";
  }
}
