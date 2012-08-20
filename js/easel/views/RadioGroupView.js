define([
       'libs/easeljs.min',
       'easel/views/RadioButtonView'], function(easel, RadioButton) {
	
	var _stage,
		_container,
		_data,
		_buttons = [],
		_callbacks = [];
	
	/*
	* Takes a Stage instance, and a data array:
	[{ label:"label 1", index:0 }, { label:"label 2", index:1 }]
	*/
	var init = function(stage, data, xPos, yPos) {
		_stage = stage;
		_data = data;
		_container = new Container();
		_container.x = xPos;
		_container.y = yPos;
		_stage.addChild(_container);
		
		var bg = new Bitmap("img/rhythmLoaderBg.png");
		_container.addChild(bg);
		
		for (var i = 0, len = data.length; i < len; i++) {
			var radio = new RadioButton();
			radio.init(_stage, data[i].label, i, handleRadioClick);
			var con = radio.getContainer();
			con.x = 10;
			con.y = i * 45 + 15;
			_container.addChild(con);
			_buttons.push(radio);
		}
		
		_stage.update();
	}
	
	var addCallback = function(callback) {
		_callbacks.push(callback);
	}
	
	
	function handleRadioClick(event) {
		console.log("clicked radio button: ", event);
		// Deselect all buttons, except the clicked one.
		// Then fire off the clicked event for further handling
		var radioName = "";
		for (var i = 0, len = _buttons.length; i < len; i++) {
			var radio = _buttons[i];
			if (event.target.name !== radio.getName()) {
				radio.setOff();
			} else {
				radioName = radio.getName();
			}
		}
		
		// Call callbacks
		for (var k = 0, len = _callbacks.length; k < len; k++) {
			_callbacks[k].call(this, event, radioName);
		}
	}
	
	return {
		init: init,
		addCallback: addCallback
	}
});