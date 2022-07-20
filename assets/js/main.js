let navIcon = document.getElementById("nav-icon")
let iconClose = document.getElementById("iconClose")
let navbarList = document.getElementById("navbarList")

iconClose.addEventListener("click", function () {
    navbarList.classList.remove("nav-list")
    navIcon.style.display = "block"
    iconClose.style.display = "none"
})

function fun() {
    navbarList.classList.add("nav-list")
    navIcon.style.display = "none"
    iconClose.style.display = "block"
}

navIcon.onclick = fun