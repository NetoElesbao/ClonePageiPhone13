const colorsList = document.querySelectorAll("#image-picker li .color");
const img = document.querySelector("#product-image");

colorsList.forEach((color) => {
  color.addEventListener("click", (chosen) => {
    colorsList.forEach((color) => {
      color.classList.remove("chosen");
    });
    chosen.target.classList.add("chosen");

    // console.log();

    img.classList.add("changing");
    img.setAttribute(
      "src",
      `img/iphone_${chosen.target.getAttribute("id")}.jpg`
    );

    setTimeout(() => {
      img.classList.toggle("changing");
    }, 200);
  });
});
