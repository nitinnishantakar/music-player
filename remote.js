var online = navigator.onLine
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
var localonline = false;
var firedata = firebase().database()
var command = firedata.ref("command")

		
function globalcheck () {
	if (online == true && localonline == false){
		command.on("value", (data) => {
			if(data.val() == "hello"){
				playi.click()
			}
			command.set("")
		})
		localonline == true
	}
	else{
		widnow.alert("you are not online")
		}
		localonline == false
	}
globalcheck()
