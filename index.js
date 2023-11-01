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

const scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for(let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const oddShapesNumber = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * oddShapesNumber}px, ${y * oddShapesNumber}px)`
    }
}