
define(["libs/kinetic"], function(Kinetic) {
	
	var _on,
		_off,
		_onHighlight,
		_offHighlight,
		_numLoaded = 0;
	
	var init = function(callback) {
		_on = new Image();
		_on.src = "img/dot_on.png";
		_on.onload = function() {
			_numLoaded++;
			if (_numLoaded >= 4) callback.call(this);
		}
		
		_off = new Image();
		_off.src = "img/dot_off.png";
		_off.onload = function() {
			_numLoaded++;
			if (_numLoaded >= 4) callback.call(this);
		}
		
		_onHighlight = new Image();
		_onHighlight.src = "img/dot_on_highlight.png";
		_onHighlight.onload = function() {
			_numLoaded++;
			if (_numLoaded >= 4) callback.call(this);
		}
		
		_offHighlight = new Image();
		_offHighlight.src = "img/dot_off_highlight.png";
		_offHighlight.onload = function() {
			_numLoaded++;
			if (_numLoaded >= 4) callback.call(this);
		}
	}
	
	var getOn = function(name) {
		var img = new Kinetic.Image({
			image: _on,
			name: name
		});
		return img;
	}
	
	var getOff = function(name) {
		var img = new Kinetic.Image({
			image: _off,
			name: name
		});
		return img;
	}
	
	var getOnHighlight = function(name) {
		var img = new Kinetic.Image({
			image: _onHighlight,
			name: name
		});
		return img;
	}
	
	var getOffHighlight = function(name) {
		var img = new Kinetic.Image({
			image: _offHighlight,
			name: name
		});
		return img;
	}
	
	var getOnImg = function() {
		return _on;
	}
	
	var getOffImg = function() {
		return _off;
	}
	
	var getOnImgHighlight = function() {
		return _onHighlight;
	}
	
	var getOffImgHighlight = function() {
		return _offHighlight;
	}
	
	return {
		init: init,
		getOn: getOn,
		getOff: getOff,
		getOnHighlight: getOnHighlight,
		getOffHighlight: getOffHighlight,
		getOnImg: getOnImg,
		getOffImg: getOffImg,
		getOnImgHighlight: getOnImgHighlight,
		getOffImgHighlight: getOffImgHighlight
	}
});