var body = document.querySelector("body")
        body.addEventListener("keyup", () => {
            f1()
        })
        function f1(){
            var el = document.documentElement
            el.requestFullscreen()
        }