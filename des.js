var work = 0
var ins = document.getElementById("ins")
var body = document.querySelector("body")
var adcenter = document.getElementById("adcenter")
var addcover = document.getElementById("addcover")
adcenter.addEventListener('click', () => {
    addcover.style.transition = "top 1s linear"
    addcover.style.top = "-100vh"
    setTimeout(() => {
            work = 1

    }, 500);
})
body.addEventListener("keydown", (ev) => {
    if(ev.keyCode=="32"){
        adcenter.click()
        
        
    }
})
