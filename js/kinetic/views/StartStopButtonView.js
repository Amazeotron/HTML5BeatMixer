define(["libs/kinetic", "views/ToggleButtonView"], function(Kinetic, toggle) {
	
	var _toggle,
		_layer;
	
	var init = function(layer) {
		_layer = layer;
		var label = new Kinetic.Text({
			text: "Start/Stop",
			fontSize: 16,
			fontFamily: "Helvetica Neue",
			textFill: "#717171",
			x: 0,
			y: 0
		});
		
		toggle.init(_layer);
		var toggleLayer = toggle.getLayer();
		toggleLayer.setPosition(7,30);
		
		_layer.add(label);
		_layer.draw();
	}
	
	var addToggleCallback = function(callback) {
		toggle.addToggleCallback(callback);
		toggle.addToggleCallback(function(isOn) {
			_layer.draw();
		})
	}
	
	return {
		init: init,
		addToggleCallback: addToggleCallback
	}
	
});