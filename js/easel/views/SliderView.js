define(['libs/easeljs.min'], function(easel) {
	
	var _track,
		_knob,
		_stage,
		_container,
		_position = 0,
		_callbacks = [],
		_offset = 11; // How far to offset the slider knob when dragging;
	
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
		_knob.x = _offset;
		_knob.y = 38;
		_knob.regX = _offset;
		
		_container.onPress = function(event) {
			_knob.hasMouseDown = true;
			_stage.onMouseMove = function(event) {
				if (_knob.hasMouseDown) {
					var pt = _track.localToGlobal(_track.x, _track.y);
					if (event.stageX > (pt.x + _knob.image.width + 1) && event.stageX < (pt.x + _track.image.width - 3)) {
						_knob.x = _container.globalToLocal(event.stageX, event.stageY).x - _offset;
						updatePosition();
						_stage.update();
						
						for (var i = 0, len = _callbacks.length; i < len; i++) {
							_callbacks[i].call(this, _position);
						}
					}
					
				} else {
					_stage.onMouseMove = null;
					_stage.onMouseUp = null;
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
	
	// Pass in a value from 0-10
	var setPosition = function(value) {
		_position = value;
		var knobX = _position;
		knobX /= 10; // percentage, from 0-1
		knobX *= 128; // value from 0-128
		_knob.x = knobX;
		_stage.update();
		console.log("Updating slider position: " + _position);
	}
	
	var addCallback = function(callback) {
		_callbacks.push(callback);
	}
	
	// normalizes the range from 11 - 129 to 0 - 10
	function updatePosition() {
		var xPos = _knob.x;
		xPos -= 11; // 0 - 128
		xPos /= 128; // convert to percentage
		xPos *= 10; // 0 - 10;
		xPos += 1; // 1 - 11
		_position = Math.round(xPos);
		console.log(_position);
	}
	
	return {
		init: init,
		getPosition: getPosition,
		setPosition: setPosition,
		addCallback: addCallback
	}
});