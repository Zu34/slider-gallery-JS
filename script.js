
const images = [
  { src: "../imgs/img1.jpg", alt: "Image 1" },
  { src: "../imgs/img2.jpg", alt: "Image 2" },
  { src: "../imgs/img3.jpg", alt: "Image 3" },
  { src: "../imgs/img4.jpg", alt: "Image 4" },
];

//  the navigation buttons
const displayImage = document.getElementById("display-image");
const previousArrow = document.getElementById("prev");
const nextArrow = document.getElementById("next");

// Set the initial image index
let currentIndex = 0;

// Custom  to hide all images
const hideAllImages = () => {
  displayImage.style.display = "none"; // Hide the main image
};

// Custom show display the image
Element.prototype.show = function() {
  this.style.display = "block"; 
};

//  show the selected image
const showImage = (index) => {
  hideAllImages(); 
  displayImage.src = images[index].src; 
  displayImage.alt = images[index].alt; 
  displayImage.show();
};

showImage(currentIndex);

previousArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--; 
    showImage(currentIndex); 
  }
});

nextArrow.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++; 
    showImage(currentIndex); 
  }
});





















