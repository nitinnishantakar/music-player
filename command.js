var interneticon = document.getElementById("interneticon")
var online = navigator.onLine
var command

function internetstatus () {
	online = navigator.onLine
	if (online == true) {
		interneticon.style.color = "#0fb300"
	}
	else if (online == false) {
		interneticon.style.color = "#525252"
	}
}

setInterval(() => {
	internetstatus()
}, 500)

function connection () {
	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyDS3fo8LFmO_6TU4m9Va-Vvu6A5q9a4wpg",
		authDomain: "musi-70275.firebaseapp.com",
		databaseURL: "https://musi-70275-default-rtdb.firebaseio.com",
		projectId: "musi-70275",
		storageBucket: "musi-70275.appspot.com",
		messagingSenderId: "379072140243",
		appId: "1:379072140243:web:25cf7904f9169890135526"
	    };
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	command = firebase.database().ref("command")
}

function commandresponse () {
	command.on("value", (data) => {
		if(work == 1){
			if (data.val() == "play") {
				playi.click()
			}
			else if (data.val() == "mute") {
				mutei.click()
			}
			else if (data.val() == "next") {
				nexi.click()
			}
			else if (data.val() == "pre") {
				prei.click()
			}
			else if (data.val() == "cd") {
				cd.click()
			}
			else if (data.val() == "cdask") {
				cdask.click()
			}
			else if (data.val() == "hole") {
				cdask.click()
			} 
			else if (data.val() == "repeat") {
				repi.click()
			}
			else if (data.val() == "shuffle") {
				shufi.click()
			}
			else if (data.val() == "refresh") {
				refreshicon.click()
			}
			else if (data.val() == "time++") {
				audio.currentTime += 5
			}
			else if (data.val() == "time--") {
				audio.currentTime -= 5
			}
			else if (data.val() == "close") {
				window.close()
			}
			else if (data.val() == "volume++") {
				if((audio.volume + .1) < 1){
					audio.volume += .1
				}
			}
			else if (data.val() == "volume--") {
				if((audio.volume - .1) < 1){
					audio.volume -= .1
				}
			}
			else if (data.val().substr(0, 6) == "search") {
				console.log(data.val().substr(6))
				search.value = data.val().substr(6)
				additionalsearch()
			}
		}
		command.set("")
	})
}

function connectioncenter () {
	if (online == true) {
		console.log("online")
		connection()
		commandresponse()

	}
	else if(online == false) {
		console.log("offline")
	}
}
connectioncenter()


