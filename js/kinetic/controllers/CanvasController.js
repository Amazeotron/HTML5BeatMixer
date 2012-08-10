
define([
       	"libs/kinetic", 
       	"models/SoundBoard", 
       	"views/ButtonView", 
       	"views/StartStopButtonView"], function(
       	                                       Kinetic, 
       	                                       soundBoard, 
       	                                       button,
       	                                       startStopButton) {
	
	var _bgLayer,
		_dotsLayer,
		_labelsLayer,
		_dividersLayer,
		_controlsLayer,
		_stage;
		
	var init = function() {
		soundBoard.addReadyCallback(soundsLoaded);
		soundBoard.addBeatCallback(beatCallback);
		
		_stage = new Kinetic.Stage({
			container: "canvasContainer",
			width: 1024,
			height: 800
		});
	}
	
	var addStartStopCallback = function(callback) {
		startStopButton.addToggleCallback(callback);
	}
	
	function soundsLoaded() {
		drawBg();
		drawDividers();
		drawLabels();
		drawDots();
		drawControls();
	}
	
	function beatCallback() {
		var whichBeat = soundBoard.getBeat(),
			numInstruments = soundBoard.getNumInstruments(),
			circ;
		for (var i = 0; i < numInstruments; i++) {
			circ = _stage.get(".circle-" + i + "-" + whichBeat)[0];
			
			if (circ.attrs.image.src.indexOf("_off") !== -1) {
				circ.setImage(button.getOffImgHighlight());
			} else {
				circ.setImage(button.getOnImgHighlight());
			}
			
			setTimeout((function(c) {
				return function() {
					if (c.attrs.image.src.indexOf("_off") !== -1) {
						c.setImage(button.getOffImg());
					} else {
						c.setImage(button.getOnImg());
					}
				}
			})(circ), 100);
		}
		_dotsLayer.draw();
	}
	
	function handleDotClick(event) {
		var name = event.shape.attrs.name;
		var row = name.substring(name.indexOf("-")+1, name.lastIndexOf("-"));
		var col = name.substr(name.lastIndexOf("-")+1, 1);
		if (event.shape.attrs.image.src.indexOf("_off") !== -1) {
			// it's off, so turn it on
			event.shape.setImage(button.getOnImg());
			soundBoard.addSoundAt(col, row);
		} else {
			// it's on, so turn it off
			event.shape.setImage(button.getOffImg());
			soundBoard.removeSoundAt(col, row);
		}
		_dotsLayer.draw();
	}
	
	function drawBg() {
		_bgLayer = new Kinetic.Layer();
		_stage.add(_bgLayer);
		var img = new Image();
		img.onload = function() {
			var bg = new Kinetic.Image({
				image: img,
				width: 1024,
				height: 800
			});
			_bgLayer.add(bg);
			_bgLayer.draw();
		}
		img.src = "img/bg.png";
	}
	
	function drawDots() {
		_dotsLayer = new Kinetic.Layer();
		_stage.add(_dotsLayer);
		var model = soundBoard.getBoardModel(), 
			numInstruments = soundBoard.getNumInstruments(),
			numBeats = soundBoard.getNumBeats();
			
		button.init(function() {
			for (var i = 0; i < numInstruments; i++) {
				for (var k = 0; k < numBeats; k++) {
					var name = "circle-" + i + "-" + k;
					// var circ = new Kinetic.Ellipse({
					// 	x: k * 57 + 250,
					// 	y: i * 34 + 28,
					// 	radius: 10,
					// 	stroke: "black",
					// 	fill: (model[i][k] === 0 ? "#FFFFFF" : "#000000"),
					// 	name: "circle-" + i + "-" + k
					// });
					// circ.on("click touchstart", handleDotClick);
					var circ = (model[i][k] === 0 ? button.getOff(name) : button.getOn(name));
					circ.setPosition(k * 60 + 350, i * 47 + 25);
					circ.on("click touchstart", handleDotClick);
					_dotsLayer.add(circ);
				}
			}
			_dotsLayer.draw();
		});
	}
	
	function drawLabels() {
		_labelsLayer = new Kinetic.Layer();
		_stage.add(_labelsLayer);
		for (var i = 0, len = soundBoard.getNumInstruments(); i < len; i++) {
			var label = new Kinetic.Text({
				text: soundBoard.getLabelAt(i),
				fontSize: 14,
				fontFamily: "Arial",
				textFill: "white",
				x: 210,
				y: i * 47 + 39
			});
			_labelsLayer.add(label);
		}
		_labelsLayer.draw();
	}
	
	function drawDividers() {
		_dividersLayer = new Kinetic.Layer();
		_stage.add(_dividersLayer);
		var rect1 = new Kinetic.Rect({
			x: 180,
			y: 0,
			width: 2,
			height: 800,
			fill: "#000000"
		});
		var rect2 = new Kinetic.Rect({
			x: 182,
			y: 0,
			width: 2,
			height: 800,
			fill: "#3f4046"
		});
		_dividersLayer.add(rect1);
		_dividersLayer.add(rect2);
		_dividersLayer.draw();
	}
	
	function drawControls() {
		_controlsLayer = new Kinetic.Layer({
			x: 40,
			y: 30
		});
		_stage.add(_controlsLayer);
		startStopButton.init(_controlsLayer);
		_controlsLayer.draw();
	}
	
	return {
		init: init,
		addStartStopCallback: addStartStopCallback
	}
});