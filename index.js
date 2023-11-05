let isModalOpen = false;
let isBurgerOpen = false;
let isModalBurgerOpen = false;

function exit() {
  toggleModal();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.remove("modal__overlay--visible");
  success.classList.remove("modal__overlay--visible");
}

function exitBurger() {
  toggleBurger();
  const loading = document.querySelector(".burger__overlay--loading");
  const success = document.querySelector(".burger__overlay--success");
  loading.classList.remove("burger__overlay--visible");
  success.classList.remove("burger__overlay--visible");
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    console.log(isModalOpen);
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  console.log(isModalOpen);
  document.body.classList += " modal--open";
}

function toggleModalBurger() {
  if (isModalBurgerOpen) {
    isModalBurgerOpen = false;
    console.log(isModalBurgerOpen);
    return document.body.classList.remove("modalBurger--open");
  }
  isModalBurgerOpen = true;
  console.log(isModalBurgerOpen);
  document.body.classList += " modalBurger--open";
}

function toggleBurger() {
  if (isBurgerOpen) {
    isBurgerOpen = false;
    console.log(isBurgerOpen);
    return document.body.classList.remove("burger--open");
  }
  isBurgerOpen = true;
  console.log(isBurgerOpen);
  document.body.classList += " burger--open";
}

let isDarkMode = localStorage.getItem("isDarkMode") === "true" || false;

function toggleContrast() {
    isDarkMode = !isDarkMode;
    
    localStorage.setItem("isDarkMode", isDarkMode);
    
    if (isDarkMode) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

if (isDarkMode) {
    document.body.classList.add("dark-theme");
}

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

function copyToClipboard() {
  var tempInput = document.createElement("input");

  tempInput.value = "zafranarif99@gmail.com";

  document.body.appendChild(tempInput);
  
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); 

  document.execCommand("copy");

  document.body.removeChild(tempInput);

  alert("Email copied to clipboard!");
}