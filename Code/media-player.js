
document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

var mediaPlayer;
var playPauseBtn;
var muteBtn;
var progressBar;

function initialiseMediaPlayer() {
	mediaPlayer = document.getElementById('media-video');
	
	playPauseBtn = document.getElementById('play-button');
	progressBar = document.getElementById('progress-bar');

	mediaPlayer.controls = false;
	
	mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
	
	mediaPlayer.addEventListener('play', function() {
		changeButtonType(playPauseBtn, 'pause');
	}, false);
	mediaPlayer.addEventListener('pause', function() {
		changeButtonType(playPauseBtn, 'play');
	}, false);
			
}

function togglePlayPause() {
	if (mediaPlayer.paused || mediaPlayer.ended) {
		changeButtonType(playPauseBtn, 'pause');
		mediaPlayer.play();
	}
	else {
		changeButtonType(playPauseBtn, 'play');
		mediaPlayer.pause();
		
	}
	
}




function updateProgressBar() {
	var percentage = Math.floor(Math.floor(100/ mediaPlayer.duration * mediaPlayer.currentTime));

	progressBar.value = percentage;
	progressBar.innerHTML = percentage + '% played';
}

 function changeButtonType(btn, value) {
	btn.title = value;
	btn.innerHTML = value;
	btn.className = value;
}

function loadVideo() {
	for (var i = 0; i < arguments.length; i++) {
		var file = arguments[i].split('.');
		var ext = file[file.length - 1];

		if (canPlayVideo(ext)) {

			resetPlayer();
			mediaPlayer.src = arguments[i];
			mediaPlayer.load();
			break;
		}
	}
}

function canPlayVideo(ext) {
	var ableToPlay = mediaPlayer.canPlayType('video/' + ext);
	if (ableToPlay == '') return false;
	else return true;
}

function changeVideo(){
	 var checkVideo= document.getElementById("media-video").children[0].getAttribute("src");
	
if(checkVideo == 'Intro.mp4'){
	mediaPlayer.pause;
	document.getElementById('media-video').src = 'dog.mp4';
}
else
	{mediaPlayer.pause;
	document.getElementById('media-video').src = 'Intro.mp4';
}
}



function resetPlayer() {

	progressBar.value = 0;

	mediaPlayer.currentTime = 0;

	changeButtonType(playPauseBtn, 'play');
}