var cd_round = localStorage.getItem("database_music_cd");

function converter_cd (parameters) {
	if(parameters == 0) {
		return false;
	}
	else if(parameters == 1){
		return true;
	}
}

if(cd_round == "true") {

}
else {
	cd.click();
}
cd.addEventListener('click', () => {
	localStorage.setItem("database_music_cd", converter_cd(cdvar));
	console.log("test 1 success");
})