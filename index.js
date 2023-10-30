let isModalOpen = false;
let isDarkMode = false

function exit() {
    toggleModal()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList.remove("modal__overlay--visible")
    success.classList.remove("modal__overlay--visible")
}

function toggleModal() {
    if(isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_wp048se',
            'template_si8f8fp',
            event.target,
            'IoiwiKiSBN_lWY9MM'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            setTimeout(success.classList += " modal__overlay--visible", 3000)
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporatily unavailable. Please contact me directly on malidzulfiqar@gmail.com"
            )
        }) 
}

function toggleContrast() {
    isDarkMode = !isDarkMode
    if(isDarkMode){
        document.body.classList += " dark-theme"
    }  
    else {
        document.body.classList.remove("dark-theme")
    }
    
}