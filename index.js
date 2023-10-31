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

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_wp048se",
      "template_si8f8fp",
      event.target,
      "IoiwiKiSBN_lWY9MM"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      setTimeout((success.classList += " modal__overlay--visible"), 3000);
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporatily unavailable. Please contact me directly on malidzulfiqar@gmail.com"
      );
    });
}

// let isDarkMode = false;

// function toggleContrast() {
//   isDarkMode = !isDarkMode;
//   if (isDarkMode) {
//     document.body.classList += " dark-theme";
//   } else {
//     document.body.classList.remove("dark-theme");
//   }
// }

// Initialize isDarkMode based on localStorage, or default to false if not set.
let isDarkMode = localStorage.getItem("isDarkMode") === "true" || false;

function toggleContrast() {
    isDarkMode = !isDarkMode;
    
    // Update the localStorage to remember the user's choice.
    localStorage.setItem("isDarkMode", isDarkMode);
    
    if (isDarkMode) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

// When the page loads, set the dark mode class based on the stored value.
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
