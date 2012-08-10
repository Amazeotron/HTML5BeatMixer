
require.config({
	shim: {
		'libs/kinetic': {
			exports: 'Kinetic'
		}
	}
});

require([
        "utils/RequestAnimationFrame", 
        "controllers/AudioPlaybackController", 
        "controllers/CanvasController", 
        "models/SoundBoard"], function(
                                       raf, 
                                       audioController, 
                                       canvasController, 
                                       soundBoard) {
	
	audioController.init();
	canvasController.init();
	soundBoard.addReadyCallback(soundsLoaded);
	soundBoard.addBeatCallback(beatCallback);
	
	canvasController.addStartStopCallback(function(isOn) {
		toggle();
	});
	
	var _timer;
	function toggle(event) {
		if (_timer) {
			clearInterval(_timer);
			_timer = null;
		} else {
			_timer = setInterval(function() {
				// update the model
				soundBoard.next();
			}, 300);
		}
		if (event) event.preventDefault();
	}
	
	function soundsLoaded() {
		
	}
	
	function beatCallback() {
		soundBoard.playSoundsInColumn(soundBoard.getBeat());
	}
});