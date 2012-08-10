define(["libs/kinetic"], function(Kinetic) {
	
	var _on,
		_off,
		_imgOn,
		_imgOff,
		_layer,
		_isOn = false,
		_superLayer,
		_callbacks = [];
		
	var init = function(layer) {
		
		_superLayer = layer;
		_layer = new Kinetic.Layer();
		_superLayer.add(_layer);
		
		_on = new Image();
		_on.src = "img/button_on.png";
		
		_off = new Image();
		_off.src = "img/button_off.png";
		
		_imgOn = new Kinetic.Image({
			image: _on,
			width: 82,
			height: 84,
			alpha: 1
		});
		_layer.add(_imgOn);
		
		_imgOff = new Kinetic.Image({
			image: _off,
			width: 82,
			height: 84,
			alpha: 1
		});
		_layer.add(_imgOff);
		
		_layer.on("click touchstart", function(event) {
			_isOn ? setOff() : setOn();
		});
	}
	
	var getLayer = function() {
		return _layer;
	}
	
	var addToggleCallback = function(callback) {
		_callbacks.push(callback);
	}
	
	function setOn() {
		_isOn = true;
		_imgOn.setAlpha(1);
		_imgOff.setAlpha(0);
		_layer.draw();
		// _superLayer.draw();
		for (var i = 0, len = _callbacks.length; i < len; i++) {
			var callback = _callbacks[i];
			callback(true);
		}
	}
	
	function setOff() {
		_isOn = false;
		_imgOn.setAlpha(0);
		_imgOff.setAlpha(1);
		_layer.draw();
		// _superLayer.draw();
		for (var i = 0, len = _callbacks.length; i < len; i++) {
			var callback = _callbacks[i];
			callback(true);
		}
	}
	
	return {
		init: init,
		getLayer: getLayer,
		addToggleCallback: addToggleCallback
	}
	
});