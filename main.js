//java main file for music player by nitin creations
// credits :- nitin nishanta kar

//menu ko likha
for (c2 = 0; c2 < c3; c2++) {
    c1 = c2
    a()
}
// mute switch
c16 = 0
// shuffle switch
c7 = 0
//loop switch
c5 = 0
// play ya pause button switch
c4 = 0
// gaane ka serial numbar
c6 = 0
// play ke click ko listen kiya
playi.addEventListener("click", () => {
    f1()
})
//play ya pause check kiya
function f1() {
    if (c4 == 0) {
        c4 = 1
        f2()
    }
    else if (c4 == 1) {
        c4 = 0
        f3()
    }
}
//play kiya
function f2() {
    playi.setAttribute("class", "fa fa-pause")
    audio.play()
    c4 = 1//pre ya nex ke click par play button ke c4 ko updata karne ke liye
    f22()// control bar ko redirect karta hai
    f29()// menu animation ko redirect karta hai
    setTimeout(f12, 500)//duration ke liye
    f20()// music icon ko call karta hai
    f21()// headphones icon ko call karta hai
    f30()// menu bar scroll ke liye
    rotate()
}
//pause kiya
function f3() {
    c4 = 0//pre ya nex ke click par play button ke c4 ko updata karne ke liye
    playi.setAttribute("class", "fa fa-play")
    audio.pause()
    f22()// control bar ko redirect karta hai
    f29()// menu animation ko redirect karta hai
    f20()// music icon ko call karta hai
    f21()// headphones icon ko call karta hai
    rotates()
}
// next ke click ko listen kiya
nexi.addEventListener("click", () => {
    f4()
})
// inisalisation
function f5() {
    audio.setAttribute("src", database[c6].audio)
    dlogo.style.backgroundImage = `url('${database[c6].logo}')`
    clogo.style.backgroundImage = `url('${database[c6].logo}')`
    dname.innerHTML = database[c6].fname
    dsinger.innerHTML = database[c6].singer
    cnname.innerHTML = database[c6].name
    cnsinger.innerHTML = database[c6].singer
}
f5() // this is for 1st time initilisation
// next ka handler
function f4() {
    if (c5 == 0 && c7 == 0) {
        c6 += 1
    }
    f9()
    f28()
}
// previous listen ko listen kiya
prei.addEventListener("click", () => {
    f6()
})
// previous ka handler  
function f6() {
    if (c5 == 0 && c7 == 0) {
        c6 -= 1
    }
    f9()
    f28()
}
//loop ke click ko listen karta hai
repi.addEventListener("click", () => {
    f7()
})
//loop ke on off ko handle kaarta hai
function f7() {
    if (c5 == 0) {
        repi.style.color = "#0fb300"
        c5 = 1
    }
    else if (c5 == 1) {
        repi.style.color = "#525252"
        c5 = 0
    }
}
//shuffle ke click ko listen karta hai
shufi.addEventListener("click", () => {
    f8()
})
//shuffle on off
function f8() {
    if (c7 == 0) {
        shufi.style.color = "#0fb300"
        c7 = 1
    }
    else if (c7 == 1) {
        shufi.style.color = "#525252"
        c7 = 0
    }
}
// subtraction
function f9() {
    if (c6 < 0) {
        c6 = database.length - 1
    }
    else if (c6 > (database.length - 1)) {
        c6 = 0
    }
    else {
        c6 = c6
    }
    f10()
}
// shuffle ko handle karta hai
function f10() {
    if (c7 == 1 && c5 == 0) {
        c8 = Math.floor(Math.random() * database.length)
        c6 = c8
    }
    else if (c7 == 0) {
        c6 = c6
    }
    f11()
}
// loop ko handle karta hai
function f11() {
    if (c5 == 1) {
        c6 = c6
    }
    f5()//inisialization karta hai
    f2()//play karta hai
}
//time ka event listener
audio.addEventListener('timeupdate', () => {
    f13()
    f14()
})
var mine
//duration ko fit karta hai
function f12() {
    c9 = audio.duration
    mine = Math.floor(c9 % 60)
    if(mine < 10){
        mine = "0"+ Math.floor(c9 % 60)
    }
    timeb.innerHTML = Math.floor(c9 / 60) + ":" + mine
    // f12()
    // f12()
}
//currenttime
function f13() {
    c10 = audio.currentTime
    c11 = Math.floor(c10 / 60)
    c12 = Math.floor(c10 % 60)
    // < 10 ke peeche zero lagata hai
    if (c12 < 10) {
        c12 = `0${c12}`
    }
    timea.innerHTML = `${c11}:${c12}`
}
// progress bar ka width define karta hai
function f14() {
    c13 = c10 / c9 * 100
    prob.style.width = `${c13}%`
}
//progress bar ke click ko listen karta hai
prom.addEventListener("click", (iaf) => {
    f15(iaf)
})
// progress bar par click karne par kya hoga
function f15(iaf) {
    c14 = iaf.offsetX
    c15 = c14 / prom.clientWidth * c9
    audio.currentTime = c15
}
//on song end
audio.addEventListener("ended", () => {
    f16()
})
// song end handler
function f16() {
    nexi.click()
}
//mute ko listen karta hai
mutei.addEventListener("click", () => {
    f17()
})
// mute ke listen ko process karta hai
function f17() {
    if (c16 == 0) {
        mutei.setAttribute("class", "fa fa-volume-mute")
        audio.muted = true
        c16 = 1
    }
    else if (c16 == 1) {
        mutei.setAttribute("class", "fa fa-volume-up")
        audio.muted = false
        c16 = 0
    }
}
//audio volume display handler
audio.addEventListener("volumechange", () => {
    f18()
})
// audio volume display function
function f18() {
    c17 = audio.volume
    volb.style.width = (c17 / 1 * 100) + "%"
}
f18()
// volume par click ko listen karta hai
volm.addEventListener("click", (fp) => {
    f19(fp)
})
// volume ke click ko execute karta hai
function f19(fp) {
    c18 = fp.offsetX
    audio.volume = c18 / volm.clientWidth * 100 / 100 * 1
}
// music icon ko handke karta hai
function f20() {
    if (c4 == 0) {
        musi.style.animation = "nnn 1s linear infinite"
    }
    else if (c4 == 1) {
        musi.style.animation = "aaa 1s linear infinite"
    }
}
//headphones ko handle karta hai
function f21() {
    if (c4 == 0) {
        headi.style.animation = "nnn 1s linear infinite"
    }
    else if (c4 == 1) {
        headi.style.animation = "aaa 1s linear infinite"
    }
}
// control bar ko animate karata hai
function f22() {
    if (c4 == 0) {
        cbar1.style.animationName = "nnn"
        cbar2.style.animationName = "nnn"
        cbar3.style.animationName = "nnn"
    }
    else if (c4 == 1) {
        cbar1.style.animationName = "bbb"
        cbar2.style.animationName = "bbb"
        cbar3.style.animationName = "bbb"
    }
}
playi.addEventListener("click", () => {
    console.log(c4)
})
// menu click main click karne par kya hoga
for (c20 = 0; c20 < database.length; c20++) {
    function f26(c20) {
        menuclass[c20].addEventListener("click", () => {
            f27(c20)
            f28()
        })
    }
    f26(c20)
}
function f27(c20) {
    c6 = c20
    f5()
    f2()
}
// menu list main bar ko green baanata hai
function f28() {
    for (c21 = 0; c21 < database.length; c21++) {
        mbbar1[c21].style.backgroundColor = "#525252"
        mbbar2[c21].style.backgroundColor = "#525252"
        mbbar3[c21].style.backgroundColor = "#525252"
    }
    mbbar1[c6].style.backgroundColor = "#0fb300"
    mbbar2[c6].style.backgroundColor = "#0fb300"
    mbbar3[c6].style.backgroundColor = "#0fb300"
    console.log(c6)
}
f28()//first time mbar color green karne ke liye
// menu bar animation
function f29() {
    for (c22 = 0; c22 < database.length; c22++) {
        mbbar1[c22].style.animationName = "nnn"
        mbbar2[c22].style.animationName = "nnn"
        mbbar3[c22].style.animationName = "nnn"
    }
    if (c4 == 0) {
        mbbar1[c6].style.animationName = "nnn"
        mbbar2[c6].style.animationName = "nnn"
        mbbar3[c6].style.animationName = "nnn"
    }
    else if (c4 == 1) {
        mbbar1[c6].style.animationName = "bbb"
        mbbar2[c6].style.animationName = "bbb"
        mbbar3[c6].style.animationName = "bbb"
    }
}
// shortcuts
body.addEventListener("keydown", (hello) => {

    if (work == 1) {
        if (searchchk == 0) {
            if (hello.keyCode == 32) {
                playi.click()
            }
            else if (hello.keyCode == 13) {
                nexi.click()
            }
            else if (hello.keyCode == 222) {
                prei.click()
            }
            else if (hello.keyCode == 82) {
                repi.click()
            }
            else if (hello.keyCode == 83) {
                shufi.click()
            }
            else if (hello.keyCode == 77) {
                mutei.click()
            }
            else if (hello.keyCode == 39) {
                audio.currentTime += 5
            }
            else if (hello.keyCode == 37) {
                audio.currentTime -= 5
            }
            else if (hello.keyCode == 38) {
                audio.volume += .1
            }
            else if (hello.keyCode == 40) {
                audio.volume -= .1
            }
            else if (hello.keyCode == 27) {
                window.close()
            }
            else if (hello.keyCode == 67) {
                cd.click()
            }
            else if (hello.keyCode == 72) {
                cdask.click()
            }
            else if (hello.keyCode == 16) {
                search.focus()
            }
            else if (hello.keyCode == 81) {
                refreshicon.click()
            }
        }
        else if(searchchk == 1){
            if (hello.keyCode == 13) {
                searchfn()
            }
        }
    }
})
// first song duration fixer
setTimeout(() => {
    f12()
}, 4000);







