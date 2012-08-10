define(['libs/easeljs.min'], function(easel) {
	
	var _track,
		_knob,
		_stage,
		_container,
		_position = 0,
		_callbacks = [];
	
	var init = function(stage, xPos, yPos) {
		_stage = stage;
		_container = new Container();
		_container.x = xPos;
		_container.y = yPos;
		_container.mouseEnabled = true;
		
		_stage.addChild(_container);
		
		var label = new Bitmap("img/labelSpeed.png");
		label.x = 35;
		label.y = 0;
		_container.addChild(label);
		
		_track = new Bitmap("img/sliderTrack.png");
		_container.addChild(_track);
		_track.mouseEnabled = true;
		_track.x = -3;
		_track.y = 35;
		
		_knob = new Bitmap("img/sliderHandle.png");
		_container.addChild(_knob);
		_knob.mouseEnabled = true;
		_knob.x = 11;
		_knob.y = 38;
		_knob.regX = 11;
		
		_container.onPress = function(event) {
			_knob.hasMouseDown = true;
			_stage.onMouseMove = function(event) {
				if (_knob.hasMouseDown) {
					var pt = _track.localToGlobal(_track.x, _track.y);
					if (event.stageX > (pt.x + 14) && event.stageX < (pt.x + _track.image.width - (_knob.image.width - 11))) {
						_knob.x = _container.globalToLocal(event.stageX, event.stageY).x;
						updatePosition();
						_stage.update();
						
						for (var i = 0, len = _callbacks.length; i < len; i++) {
							_callbacks[i].call(this, _position);
						}
					}
					
				} else {
					_stage.onMouseMove = null;
					_knob.onMouseUp = null;
				}
			}
			_stage.onMouseUp = function(event) {
				_knob.hasMouseDown = false;
			}
		}
		
		_stage.update();
	}
	
	var getPosition = function() {
		return _position;
	}
	
	var addCallback = function(callback) {
		_callbacks.push(callback);
	}
	
	// normalizes the range from 9 - 128 to 0 - 10
	function updatePosition() {
		var xPos = _knob.x;
		xPos -= 9; // 0 - 119
		xPos /= 119; // convert to percentage
		xPos *= 10; // 0 - 10;
		_position = Math.round(xPos);
	}
	
	return {
		init: init,
		getPosition: getPosition,
		addCallback: addCallback
	}
});