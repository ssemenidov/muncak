const footerItemList = document.querySelectorAll(".footer-item__h3");
const footerContentList = document.querySelectorAll(".footer-item-content");
for (let i = 0; i < footerItemList.length; i++) {
  footerItemList[i].addEventListener("click", () => {
    console.log(footerItemList[i]);
    footerContentList[i].classList.toggle("footer-item-content--active");
  });
}
let sub_btn = document.getElementById("sub_btn");
let overlay = document.getElementById("overlay");
sub_btn.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  setTimeout(function () {
    overlay.classList.remove("overlay--active");
  }, 3000);
});
