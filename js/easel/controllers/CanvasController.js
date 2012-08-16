
define([
       	'libs/easeljs.min', 
       	'easel/models/SoundBoard', 
       	'easel/views/ToggleStartStopView',
       	'easel/views/ToggleView',
       	'easel/views/BeatButtonView',
       	'easel/views/SliderView'], 
       	function(
       		easel,
       		soundBoard,
       		startStopButton,
       		multiToggle,
       		BeatButton,
       		slider) {
	
	var _bgLayer,
		_dots,
		_labels,
		_dividers,
		_controls,
		_stage,
		_dotButtons = [];
		
	var init = function(stage) {
		_stage = stage;
		soundBoard.addReadyCallback(soundsLoaded);
		soundBoard.addBeatCallback(beatCallback);
		soundBoard.addUpdateCallback(handleModelUpdate);
	}
	
	
	// ----------------------------------------
	// CALLBACK METHODS
	// ----------------------------------------
	
	function soundsLoaded() {
		drawBg();
		drawControls();
		drawDividers();
		drawLabels();
		drawDots();
	}
	
	function beatCallback() {
		var whichBeat = soundBoard.getBeat(),
			numInstruments = soundBoard.getNumInstruments();
		
		for (var i = 0, len = _dotButtons.length; i < len; i++) {
			var name = _dotButtons[i].getName();
			if (parseInt(name.substr(name.length-1,1)) === whichBeat) {
				var dot = _dotButtons[i];
				dot.setHighlighted();
				
				setTimeout((function(d) {
					return function() {
						d.setUnHighlighted();
					}
				})(dot), 100);
			}
		}
		_stage.update();
	}
	
	function handleModelUpdate() {
		var model = soundBoard.getBoardModel(),
			counter = 0,
			row,
			dot,
			rowIndex,
			len1 = model.length,
			colIndex,
			len2;
		for (rowIndex = 0; rowIndex < len1; rowIndex++) {
			row = model[rowIndex];
			len2 = row.length;
			for (colIndex = 0; colIndex < len2; colIndex++) {
				dot = _dotButtons[counter];
				row[colIndex] === 0 ? dot.setOff() : dot.setOn();
				counter++;
			}
		}
		_stage.update();
	}
	
	function handleDotClick(event) {
		for (var i = 0, len = _dotButtons.length; i < len; i++) {
			if (_dotButtons[i].getName() === event.target.name) {
				var btn = _dotButtons[i];
				var name = event.target.name;
				var row = name.substring(name.indexOf("_")+1, name.lastIndexOf("_"));
				var col = name.substr(name.lastIndexOf("_")+1, 1);
				
				btn.isOn() ? soundBoard.addSoundAt(col, row) : soundBoard.removeSoundAt(col, row);
				
				break;
			}
		}
		_stage.update();
	}
	
	function handleStartStop(isOn) {
		soundBoard.toggle();
	}
	
	
	
	// ----------------------------------------
	// DRAWING METHODS
	// ----------------------------------------
	
	function drawBg() {
		_bg = new Bitmap("img/bg.png");
		_stage.addChildAt(_bg, 0);
	}
	
	function drawDots() {
		
		var model = soundBoard.getBoardModel(), 
			numInstruments = soundBoard.getNumInstruments(),
			numBeats = soundBoard.getNumBeats();
		
		_dots = new Container();
		_stage.addChild(_dots);
		_dots.x = 350;
		_dots.y = 25;
		for (var i = 0; i < numInstruments; i++) {
			for (var k = 0; k < numBeats; k++) {
				var dot = new BeatButton();
				dot.init(_stage, "button_" + i + "_" + k, handleDotClick);
				_dotButtons.push(dot);
				var dotContainer = dot.getContainer();
				dotContainer.x = k * 60;
				dotContainer.y = i * 47;
				_dots.addChild(dotContainer);
			}
		}
		
		_stage.update();
	}
	
	function drawLabels() {
		_labels = new Container();
		_stage.addChild(_labels);
		_labels.x = 210;
		_labels.y = 49;
		for (var i = 0, len = soundBoard.getNumInstruments(); i < len; i++) {
			var label = new Text(soundBoard.getLabelAt(i), "14px Arial", "#a3a3a3");
			label.y = i * 47;
			_labels.addChild(label);
		}
		_stage.update();
	}
	
	function drawDividers() {
		_dividers = new Container();
		_stage.addChild(_dividers);
		
		var rect1 = getRect(Graphics.getRGB(0,0,0),		180, 0, 2, 800);
		var rect2 = getRect(Graphics.getRGB(63,64,70),	182, 0, 2, 800);
		var rect3 = getRect(Graphics.getRGB(0,0,0), 	858, 0, 2, 800);
		var rect4 = getRect(Graphics.getRGB(63,64,70),	860, 0, 2, 800);
		_dividers.addChild(rect1);
		_dividers.addChild(rect2);
		_dividers.addChild(rect3);
		_dividers.addChild(rect4);
		
		_stage.update();
	}
	
	function drawControls() {
		startStopButton.init(_stage, 27, 30);
		startStopButton.addToggleCallback(handleStartStop);
		
		slider.init(_stage, 17, 180);
		slider.addCallback(function() {
			soundBoard.setSpeed(slider.getPosition());
		});
		slider.setPosition(8);
		soundBoard.setSpeed(slider.getPosition());
		
		multiToggle.init(_stage, 27, 270);
		multiToggle.addToggleCallback(function(isMulti) {
			soundBoard.setMulti(isMulti);
		});
		multiToggle.toggle(); // Turn it on
		
		_stage.update();
	}
	
	/*
	* Takes an RGB color, x, y, width, height, and returns a Shape
	* @param color: Graphics.getRGB()
	* @param xPos: int x position of where to start rect
	* @param yPos: int y position of where to start rect
	* @param width: int width of rect
	* @param height: int height of rect
	* returns: Shape object with Graphics object rect.
	*/
	function getRect(color, xPos, yPos, width, height) {
		var g = new Graphics();
		g.beginFill(color);
		g.drawRect(xPos, yPos, width, height);
		return new Shape(g);
	}
	
	
	// ----------------------------------------
	// PUBLIC METHODS
	// ----------------------------------------
	
	return {
		init: init
	}
});