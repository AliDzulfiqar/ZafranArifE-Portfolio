let isModalOpen = false;
const scaleFactor = 1 / 20

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