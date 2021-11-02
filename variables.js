// c3 song number
//-----------------
// document
var created = "Nitin Nishanta Kar"
var all = document.getElementById("all")
var body = document.querySelector("body")
var stop = document.getElementById("stop")
var sbot = document.getElementById("sbot")
var menu = document.getElementById("menu")
var pre = document.getElementById("main")
var audio = document.getElementById("audio")
var playi = document.getElementById("playi")
var prei = document.getElementById("prei")
var nexi = document.getElementById("nexi")
var repi = document.getElementById("repi")
var timea = document.getElementById("timea")
var timeb = document.getElementById("timeb")
var prob = document.getElementById("prob")
var prom = document.getElementById("prom")
var mutei = document.getElementById("mutei")
var volm = document.getElementById("volm")
var volb = document.getElementById("volb")
var musi = document.getElementById("musi")
var headi = document.getElementById("headi")
var dlogo = document.getElementById("dlogo")
var dname = document.getElementById("dname")
var dsinger = document.getElementById("dsinger")
var cnname = document.getElementById("cnname")
var cnsinger = document.getElementById("cnsinger")
var cbar1 = document.getElementById("cbar1")
var cbar2 = document.getElementById("cbar2")
var cbar3 = document.getElementById("cbar3")
var mbbar1 = document.getElementsByClassName("mbbar1")
var mbbar2 = document.getElementsByClassName("mbbar2")
var mbbar3 = document.getElementsByClassName("mbbar3")
var menuclass = document.getElementsByClassName("menu")
var mlogo = document.getElementsByClassName("mlogo")
// custom
var c1 = 1
var c2;
var c4;
var c5;
var c6;
var c7;
var c8;
var c9;
var c10;
var c11;
var c12;
var c13;
var c14;
var c15;
var c16;
var c17;
var c18;
var c19;
var c20;
var c21;
var c22;
function a() {
    menu.insertAdjacentHTML("beforeend", `<div id="menu${c1}" class="menu"></div>`)
    document.getElementById(`menu${c1}`).insertAdjacentHTML("beforeend", `<div id="mbar${c1}" class="mbar"></div>`)
    document.getElementById(`mbar${c1}`).insertAdjacentHTML("beforeend", `<div id="mbbar1${c1}" class="mbbar1"></div>`)
    document.getElementById(`mbar${c1}`).insertAdjacentHTML("beforeend", `<div id="mbbar2${c1}" class="mbbar2"></div>`)
    document.getElementById(`mbar${c1}`).insertAdjacentHTML("beforeend", `<div id="mbbar3${c1}" class="mbbar3"></div>`)
    document.getElementById(`menu${c1}`).insertAdjacentHTML("beforeend", `<div id="mzoom${c1}" class="mzoom"></div>`)
    document.getElementById(`mzoom${c1}`).insertAdjacentHTML("beforeend", `<div id="mlogo${c1}" class="mlogo"></div>`)
    document.getElementById(`menu${c1}`).insertAdjacentHTML("beforeend", `<div id="mname${c1}" class="mname"></div>`)
    document.getElementById(`mname${c1}`).insertAdjacentHTML("beforeend", `<div id="mnname${c1}" class="mnname"></div>`)
    document.getElementById(`mname${c1}`).insertAdjacentHTML("beforeend", `<div id="mnsinger${c1}" class="mnsinger"></div>`)
    document.getElementById(`mnname${c1}`).innerHTML = database[c1].name
    document.getElementById(`mnsinger${c1}`).innerHTML = database[c1].singer
    document.getElementById(`mlogo${c1}`).style.backgroundImage = "url('" + database[c1].logo + "')"
    function f23(c1) {
        menuclass[c1].addEventListener("mouseover", () => {
            f24(c1)
        })
        menuclass[c1].addEventListener("mouseout", () => {
            f25(c1)
        })
    }
    f23(c1)
}
function f24(c1) {
    mlogo[c1].style.transform = "scale(1.3)"
}
function f25(c1) {
    mlogo[c1].style.transform = "scale(1)"
}



