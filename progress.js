var changedme = false;
body.addEventListener("keydown", (data) => {
	if(work == 1){
		if(searchchk == 0){
			if(c4 == 1){
				if(data.keyCode == 39){
					audio.pause()
					c4 = 0
					changedme = true;
				}
			}
		}
	}
})
body.addEventListener("keyup", (data) => {
	if(work == 1){
		if(searchchk == 0){
			if(c4 == 0){
				if(data.keyCode == 39){
					if(changedme == true){
					f2()
					changedme = false;
					}
				}
			}
		}
	}
})
body.addEventListener("keydown", (data) => {
	if(work == 1){
		if(searchchk == 0){
			if(c4 == 1){
				if(data.keyCode == 37){
					
					audio.pause()
					c4 = 0
					changedme = true;
				}
			}
		}
	}
})
body.addEventListener("keyup", (data) => {
	if(work == 1){
		if(searchchk == 0){
			if(c4 == 0){
				if(data.keyCode == 37){
					if(changedme == true){
					f2()
					changedme = false;
					}
				}
			}
		}
	}
})