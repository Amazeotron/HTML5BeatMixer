
define(['utils/AudioBufferLoader'], function(buffer) {
	
	var _allBuckets = [],
		_context = new webkitAudioContext(),
		_numBeats = 8,
		_numInstruments = 0, // Determined by how many are passed in
		_callbacks = [],
		_bufferList,
		_labels = [],
		_tick = -1, 
		_beatCallbacks = [],
		_speed = 300,
		_timer;
	
	var loadSounds = function(sounds) {
		_numInstruments = sounds.length;
		// AudioBufferLoader expects an array of paths, so we need to pull them out
		var soundPaths = [];
		for (var i = 0; i < _numInstruments; i++) {
			soundPaths.push(sounds[i].path);
			_labels.push(sounds[i].name);
		}
		buffer.init(_context, soundPaths, handleBuffersLoaded);
		buffer.load();
	}
	
	var addSoundAt = function(soundIndex, row) {
		console.log("Adding Sound at col: " + soundIndex + ", row: " + row);
		_allBuckets[row].splice(soundIndex, 1, _bufferList[row]);
	}
	
	var removeSoundAt = function(soundIndex, row) {
		console.log("Removing Sound at col: " + soundIndex + ", row: " + row);
		_allBuckets[row].splice(soundIndex, 1, 0);
	}
	
	var playSoundsInColumn = function(column) {
		for (var i = 0; i < _numInstruments; i++) {
			var sound = getSound(i, column);
			if (sound !== 0) sound.noteOn(0);
		}
	}
	
	var getNumBeats = function() {
		return _numBeats;
	}
	
	var getNumInstruments = function() {
		return _numInstruments;
	}
	
	var addReadyCallback = function(callback) {
		_callbacks.push(callback);
	}
	
	var addBeatCallback = function(callback) {
		_beatCallbacks.push(callback);
	}
	
	var getBoardModel = function() {
		var model = [];
		for (var i = 0; i < _numInstruments; i++) {
			var row = [];
			for (var k = 0; k < _numBeats; k++) {
				row[k] = (_allBuckets[i][k] !== 0 ? 1 : 0);
			}
			model[i] = row;
		}
		return model;
	}
	
	var getLabelAt = function(index) {
		return _labels[index];
	}
	
	var next = function() {
		_tick++;
		if (_tick >= _numBeats) _tick = 0;
		for (var i = 0, len = _beatCallbacks.length; i < len; i++) {
			_beatCallbacks[i]();
		}
	}
	
	var getBeat = function() {
		return _tick;
	}
	
	var getIsPlaying = function() {
		return _isPlaying;
	}
	
	var toggle = function() {
		if (_timer) {
			clearInterval(_timer);
			_timer = null;
		} else {
			_timer = setInterval(function() {
				next();
			}, _speed);
		}
		if (event) event.preventDefault();
	}
	
	// Takes an int from 0 - 10
	var setSpeed = function(speed) {
		speed = 1200 - (speed * 100 + 100); // 100 - 1100
		_speed = speed;
		toggle();
		toggle();
	}
	
	function getSound(row, column) {
		if (_allBuckets[row][column] === 0) return 0;
		var source = _context.createBufferSource();
		source.buffer = _allBuckets[row][column];
		source.connect(_context.destination);
		return source;
	}
	
	function handleBuffersLoaded(bufferList) {
		_bufferList = bufferList;
		// Randomly populate the sounds
		for (var i = 0; i < _numInstruments; i++) {
			_allBuckets[i] = [];
			var currSound = bufferList[i];
			for (var k = 0; k < _numBeats; k++) {
				// Fill in some 0s so it's not just noise
				// _allBuckets[i][k] = (Math.random() < 0.3 ? currSound : 0);
				// set them all to 0
				_allBuckets[i][k] = 0;
			}
		}
		for (var i = 0, len = _callbacks.length; i < len; i++) {
			_callbacks[i]();
		}
	}
	
	return {
		loadSounds: loadSounds,
		addSoundAt: addSoundAt,
		removeSoundAt: removeSoundAt,
		getNumBeats: getNumBeats,
		getNumInstruments: getNumInstruments,
		playSoundsInColumn: playSoundsInColumn,
		addReadyCallback: addReadyCallback,
		addBeatCallback: addBeatCallback,
		getBoardModel: getBoardModel,
		getLabelAt: getLabelAt,
		next: next,
		getBeat: getBeat,
		getIsPlaying: getIsPlaying,
		toggle: toggle,
		setSpeed: setSpeed
	}
});