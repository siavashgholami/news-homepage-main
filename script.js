document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  const closeBtn = document.querySelector('.burger-menu-close');
  const cover = document.querySelector('.cover');

  burgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('show');
    cover.style.display = 'block'
  });

  closeBtn.addEventListener('click', function () {
    navLinks.classList.toggle('show');
    cover.style.display = 'none'
  })

  // Function to update image source and dimensions based on screen size
  function updateImage() {
    // Define image paths
    var mobileImage = "./assets/images/image-web-3-mobile.jpg";
    var desktopImage = "./assets/images/image-web-3-desktop.jpg";

    // Get container width
    var containerWidth = document.querySelector(".web3Image").clientWidth;

    // Check if viewport width is greater than or equal to 768px
    if (window.matchMedia("(min-width: 768px)").matches) {
        setImageProperties(desktopImage, containerWidth); // Set desktop image properties
    } else {
        setImageProperties(mobileImage, "100%"); // Set mobile image properties
    }
  }

  // Function to set image properties
  function setImageProperties(src, width) {
    var imageElement = document.getElementById("image");
    imageElement.src = src; // Set image source
    imageElement.style.width = width; // Set image width
    imageElement.style.height = "auto"; // Ensure image maintains aspect ratio
  }

  // Call the function initially to set the correct image source and dimensions based on the initial screen size
  updateImage();

  // Add event listener for window resize events to dynamically update image source and dimensions
  window.addEventListener("resize", updateImage);


});