
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
        'jquery',
        'utils/RequestAnimationFrame',
        'libs/easeljs.min', 
        'easel/views/ToggleStartStopView',
        'easel/controllers/AudioPlaybackController',
        'easel/controllers/CanvasController',
        'easel/models/SoundBoard'
        ], function(
                    $,
                    raf,
                    easel, 
                    toggleStartStop,
                    audioController,
                    canvasController,
                    soundBoard) {
	
	var canvas = document.querySelector("#canvas");
	var stage = new Stage(canvas);
	
	stage.mouseEventsEnabled = true;
	
	// audioController.loadPercussion();
	canvasController.init(stage);

	// Start rendering the Canvas!
	function render() {
		requestAnimationFrame(render);
		stage.update();
	}
	render();
	
});