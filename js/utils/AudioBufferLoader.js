
define(function() {
	
	var _context,
		_callback,
		_buffers = [],
		_numLoaded,
		_audioPaths;
	
	var init = function(context, audioPaths, callback) {
		_context = context;
		_callback = callback;
		_buffers = [];
		_numLoaded = 0;
		_audioPaths = audioPaths;
	}
	
	var load = function() {
		for (var i = 0, len = _audioPaths.length; i < len; i++) {
			loadBuffer(_audioPaths[i], i);
		}
	}
	
	function loadBuffer(audioItemPath, index) {
		var req = new XMLHttpRequest();
		req.open('GET', audioItemPath);
		req.responseType = 'arraybuffer';
		req.addEventListener('load', processBuffer, false);
		req.send();
		
		function processBuffer() {
			if (req.readyState == 4 && req.status == 200) {
				_context = new webkitAudioContext();
				_context.decodeAudioData(req.response, handleDecoded, handleError);
			}
		}
		
		function handleDecoded(buffer) {
			_buffers[index] = buffer;
			if (++_numLoaded == _audioPaths.length) {
				_callback(_buffers);
			}
		}
		
		function handleError() {
			console.log("Error");
		}
	}
	
	return {
		init: init,
		load: load
	};
});