const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// const listClick = document.querySelectorAll(
//   ".main-list-class.tc-list",
//   ".socialsClass"
// );

const mainList = document.querySelectorAll(".main-list-class");
const tcList = document.querySelectorAll(".tc-list");
const socialClass = document.querySelectorAll(".socialsClass");

const addListenerForLists = (listClick) => {
  listClick.forEach((element) => {
    console.log(element);
    element.addEventListener("click", () => {
      const visiblity = nav.getAttribute("data-visible");
      if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
      } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
      }
    });
  });
};

addListenerForLists(mainList);
addListenerForLists(tcList);
addListenerForLists(socialClass);

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
