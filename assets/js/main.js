const imageArray = [
  "https://images4.imagebam.com/92/8f/1d/MEIFUXG_o.png",
  "https://images4.imagebam.com/24/6c/e4/MEIFUXH_o.png",
  "https://images4.imagebam.com/17/ad/9f/MEIFUXI_o.png",
];

const image = document.querySelector("img");

window.onload = () => generateRandomPicture(imageArray);

function generateRandomPicture(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  image.setAttribute("src", array[randomNum]);
}
