const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")
const menuBox = document.querySelector("nav ul")

menuIcon.addEventListener("click", ()=> {
    menuBox.classList.add("visible-menuBox")
})
closeIcon.addEventListener("click", ()=> {
    menuBox.classList.remove("visible-menuBox")
})
window.addEventListener("scroll", ()=> {
    menuBox.classList.remove("visible-menuBox")
})