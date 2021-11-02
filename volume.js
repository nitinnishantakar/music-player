setInterval(() => {
	localStorage.setItem('database_music_volume', JSON.stringify(audio.volume));
}, 500)
audio.volume = JSON.parse(localStorage.getItem('database_music_volume'));