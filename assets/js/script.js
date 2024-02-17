const form = document.querySelector('.form-controls')
const showError = document.querySelectorAll(".showError")

// scrollNavbar
const scrollBalise = (nameClass, minValue) => {
    window.addEventListener("scroll", (e) => {
        document.querySelector(nameClass).style.top = (scrollY > minValue)? 0 : "";
    })
}
// position de span show error
const posError = () => {
    for (let i = 0; i < showError.length; i++) {
        showError[i].style.top = `${25 + (61*i)}px`
    }
}
// Formulaire
const formCheking = (field/*selector*/, n/*the error position*/, err/*the eroor*/, regexp) => {
    regexp = (regexp === undefined)? /[a-zA-Z0-9ÉÈËÊÎÏéèëêîï@]/g : regexp
    form.addEventListener("submit", (e) => {
        if (field.value === "") {
            e.preventDefault()
            showError[n].innerHTML = `Le champ du ${err} est vide`
        } else if (regexp.test(field.value) === false) {
            e.preventDefault()
            showError[n].innerHTML = `erreur de value du ${err}`
        } else {
            showError[n].innerHTML = "OK"
        }
    })
    form.request.addEventListener("click", (e) => {
        e.target.style.background = (showError.innerHTML !== "ok")? "#bd1919" : ""
    })
}
window.addEventListener("scroll", () => {
    console.log(scrollY);
})