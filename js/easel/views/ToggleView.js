
define(['libs/easeljs.min'], function(easel) {
	
	var _container,
		_stage,
		_toggleOn,
		_toggleOff
		_isOn = false,
		_callbacks = [];
	
	var init = function(stage, xPos, yPos) {
		_stage = stage;
		_container = new Container();
		_container.x = xPos;
		_container.y = yPos;
		_container.mouseEnabled = true;
		_container.onClick = handleClick;
		_stage.addChild(_container);
		
		var label = new Bitmap("img/labelMulti.png");
		_container.addChild(label);
		label.x = 20;
		
		_toggleOff = new Bitmap("img/toggleOff.png");
		_toggleOff.x = 20;
		_toggleOff.y = 35;
		_toggleOff.mouseEnabled = true;
		_container.addChildAt(_toggleOff, 0);
		
		_toggleOn = new Bitmap("img/toggleOn.png");
		_toggleOn.x = 20;
		_toggleOn.y = 35;
		_toggleOn.visible = false;
		_toggleOn.mouseEnabled = true;
		_container.addChild(_toggleOn);
	}
	
	var isOn = function() {
		return _isOn;
	}
	
	var addToggleCallback = function(callback) {
		_callbacks.push(callback);
	}
	
	var toggle = function() {
		_toggleOn.visible = !_toggleOn.visible;
		_isOn = _toggleOn.visible;
		_stage.update();
	}
	
	function handleClick(event) {
		toggle();
		
		for (var i = 0, len = _callbacks.length; i < len; i++) {
			var func = _callbacks[i];
			func.call(this, _isOn);
		}
	}
	
	return {
		init: init,
		isOn: isOn,
		toggle: toggle,
		addToggleCallback: addToggleCallback
	}
})