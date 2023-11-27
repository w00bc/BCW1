/*
    2023.11.22
    배경화면 띄우기
*/

const images = ["1.jpg","2.jpeg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","10.jpg","11.jpg","12.jpg"];
const selectedImages = images[Math.floor(Math.random()*images.length)];
console.log(selectedImages);

const bgImage = document.createElement("img");
bgImage.src = `img/${selectedImages}`;
document.body.appendChild(bgImage);
