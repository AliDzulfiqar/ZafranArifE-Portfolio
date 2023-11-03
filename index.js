let isModalOpen = false;

function exit() {
  toggleModal();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.remove("modal__overlay--visible");
  success.classList.remove("modal__overlay--visible");
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