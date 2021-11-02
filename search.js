var sdatabase = []
var sva, svb, svc
var searchchk = 0
var search = document.getElementById("search")
search.addEventListener("focus", () => {
    searchchk = 1
})
search.addEventListener("blur", () => {
    searchchk = 0
})
for (sva = 0; sva < database.length; sva++) {
    sdatabase.push(database[sva].fname.toLowerCase())
}
function searchfn() {
    if (search.value == "play") {
        if (c4 == 1) {

        }
        else if (c4 == 0) {
            playi.click()
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "pause") {
        if (c4 == 1) {
            playi.click()
        }
        else if (c4 == 0) {
            
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "repeat") {
        if (c5 == 1) {
            
        }
        else if (c5 == 0) {
            repi.click()
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "repeatoff") {
        if (c5 == 1) {
            repi.click()
        }
        else if (c5 == 0) {
            
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "shuffle") {
        if (c7 == 1) {
            
        }
        else if (c7 == 0) {
            shufi.click()
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "shuffleoff") {
        if (c7 == 1) {
            shufi.click()
        }
        else if (c7 == 0) {
            
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "mute") {
        if (c16 == 1) {
            
        }
        else if (c16 == 0) {
            mutei.click()
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "unmute") {
        if (c16 == 1) {
            mutei.click()
        }
        else if (c16 == 0) {

        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "holein") {
        if (cdasvar == 1) {
           
        }
        else if (cdasvar == 0) {
            cdask.click()
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "holeout") {
        if (cdasvar == 1) {
            cdask.click()
        }
        else if (cdasvar == 0) {
           
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "cdin") {
        if (cdvar == 1) {
           
        }
        else if (cdvar == 0) {
            cd.click()
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "cdout") {
        if (cdvar == 1) {
            cd.click()
        }
        else if (cdvar == 0) {
           
        }
        search.value = ""
        search.blur()
    }
    else if (search.value == "next") {
        nexi.click()
        search.value = ""
        search.blur()
    }
    else if (search.value == "pre") {
        prei.click()
        search.value = ""
        search.blur()
    }
    else if (search.value == "close") {
        window.close()
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume0") {
        audio.volume = 0
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume1") {
        audio.volume = .1
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume2") {
        audio.volume = .2
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume3") {
        audio.volume = .3
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume4") {
        audio.volume = .4
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume5") {
        audio.volume = .5
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume6") {
        audio.volume = .6
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume7") {
        audio.volume = .7
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume8") {
        audio.volume = .8
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume9") {
        audio.volume = .9
        search.value = ""
        search.blur()
    }
    else if (search.value == "volume10") {
        audio.volume = 1
        search.value = ""
        search.blur()
    }
    else {
        additionalsearch()
    }
}
function additionalsearch () {
    for (svb = 0; svb < database.length; svb++) {
            if (sdatabase[svb] == search.value.toLowerCase()) {
                menuclass[svb].click()
                search.value = ""
                search.blur()
            }
        }
}