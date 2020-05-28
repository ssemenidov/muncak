const footerItemList = document.querySelectorAll(".footer-item__h3");
const footerContentList = document.querySelectorAll(".footer-item-content");
for (let i = 0; i < footerItemList.length; i++) {
  footerItemList[i].addEventListener("click", () => {
    console.log(footerItemList[i]);
    footerContentList[i].classList.toggle("footer-item-content--active");
  });
}
