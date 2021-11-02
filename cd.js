var cdvar = 1
var cd = document.getElementById("cd")
var dzoom = document.getElementById("dzoom")
function rotate() {
    if (cdvar == 1 && c4 == 1) {
        dzoom.style.animation = "cdr 3s linear infinite"
        // dlogo.style.animation = "cdr 3s linear inifnite"
    }
    else if (cdvar == 0 && c4 == 1) {
        dzoom.style.animation = "nothing 3s linear infinite"
        // dlogo.style.animation = "cdr 3s linear inifnite"
    }
}
function rotates() {
    if (c4 == 0) {
        dzoom.style.animation = "nothing 3s linear infinite"
        // dlogo.style.animation = "nothing 3s linear inifnite"
    }
}

cd.addEventListener("click", () => {
    if (cdvar == 1) {
        dzoom.style.borderRadius = "0px"
        cdvar = 0
        cdask.click()
    }
    else if (cdvar == 0) {
        dzoom.style.borderRadius = "1000px"
        cdvar = 1
        cdask.click()// this is for automatic hole when cd is in
    }
    rotate()
})


var cdask = document.getElementById("cdask")
var cdhole = document.getElementById("cdhole")
var cdhole2 = document.getElementById("cdhole2")
var cdasvar = 0
cdask.addEventListener("click", () => {
    cdhlfn()
})
function cdhlfn() {
        if (cdasvar == 0 && cdvar == 1) {
            // window.alert("on")
            cdasvar = 1
            cdask.style.color = "rgb(15, 179, 0)"
            cdhole.style.display = "block"
            cdhole2.style.display = "block"

        }
    else if (cdasvar == 1) {
        // window.alert("off")
        cdasvar = 0
        cdask.style.color = "rgb(82, 82, 82)"
        cdhole.style.display = "none"
        cdhole2.style.display = "none"
    }
}
cdask.click()
