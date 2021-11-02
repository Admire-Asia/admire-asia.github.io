const toggleButton = document.getElementById("toggleButton");
console.log(toggleButton);
const naviList = document.getElementById("naviList");
toggleButton.addEventListener("click", () => {
  console.log("Hello");
  naviList.classList.toggle("active");
});

const listItem = document.getElementsByClassName("list-item");
for (let index = 0; index < listItem.length; index++) {
  listItem.item(index).addEventListener("click", () => {
    naviList.className.toggle("deactive");
  });
}
