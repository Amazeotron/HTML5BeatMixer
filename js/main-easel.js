
require.config({
	shim: {
		'libs/easeljs.min': {
			exports: 'Easel'
		},
		'libs/tweenjs.min': {
			exports: 'Tween'
		},
		'libs/soundjs.min': {
			exports: 'Sound'
		}
	}
});

require([
        'libs/easeljs.min', 
        'easel/views/ToggleStartStopView',
        'easel/controllers/AudioPlaybackController',
        'easel/controllers/CanvasController',
        'easel/models/SoundBoard'
        ], function(
                    easel, 
                    toggleStartStop,
                    audioController,
                    canvasController,
                    soundBoard) {
	
	var canvas = document.querySelector("#canvas");
	var stage = new Stage(canvas);
	
	stage.mouseEventsEnabled = true;
	
	soundBoard.addReadyCallback(handleSoundsLoaded);
	soundBoard.addBeatCallback(handleBeat);
	
	audioController.init(stage);
	canvasController.init(stage);
	
	canvasController.addStartStopCallback(function(isOn) {
		soundBoard.toggle();
	});
	
	function handleSoundsLoaded() {
		
	}
	
	function handleBeat() {
		soundBoard.playSoundsInColumn(soundBoard.getBeat());
	}
	
});