
define(['jquery', 'utils/AudioBufferLoader'], function($, buffer) {
	
	var _allBuckets = [],
		_context = new webkitAudioContext(),
		_numBeats = 8,
		_numInstruments = 0, // Determined by how many are passed in
		_readyCallbacks = [],
		_beatCallbacks = [],
		_multiSelectCallbacks = [],
		_updateCallbacks = [],
		_bufferList,
		_labels = [],
		_tick = -1, 
		_speed = 300,
		_timer,
		_isMulti = true,
		_boardModel = [];
	
	var loadSounds = function(sounds) {
		_numInstruments = sounds.length;
		// AudioBufferLoader expects an array of paths, so we need to pull them out
		var soundPaths = [];
		_labels = [];
		for (var i = 0; i < _numInstruments; i++) {
			soundPaths.push(sounds[i].path);
			_labels.push(sounds[i].name);
		}
		buffer.init(_context, soundPaths, handleBuffersLoaded);
		buffer.load();
	}
	
	/*
	* Loads a JSON array of intrument types
	*/
	var loadInstrumentTypes = function(callback) {
		$.ajax({
			url: 'data/instruments.json',
			success: function(data) {
				callback(data);
			}
		});
	}
	
	var addSoundAt = function(soundIndex, row) {
		console.log("Adding Sound at col: " + soundIndex + ", row: " + row);
		
		// _isMulti is whether we can select more than one sound per column
		if (_isMulti === false) {
			// deselect any other sounds in this column
			for (var i = 0, len = _allBuckets.length; i < len; i++) {
				_allBuckets[i].splice(soundIndex, 1, 0);
				_boardModel[i].splice(soundIndex, 1, 0);
			}
		}
		_allBuckets[row].splice(soundIndex, 1, _bufferList[row]);
		_boardModel[row].splice(soundIndex, 1, 1);
		
		callUpdate();
	}
	
	var removeSoundAt = function(soundIndex, row) {
		console.log("Removing Sound at col: " + soundIndex + ", row: " + row);
		_allBuckets[row].splice(soundIndex, 1, 0);
		_boardModel[row].splice(soundIndex, 1, 0);
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
		_readyCallbacks.push(callback);
	}
	
	var addBeatCallback = function(callback) {
		_beatCallbacks.push(callback);
	}
	
	var addMultiSelectCallback = function(callback) {
		_multiSelectCallbacks.push(callback);
	}
	
	var addUpdateCallback = function(callback) {
		_updateCallbacks.push(callback);
	}
	
	var getBoardModel = function() {
		return _boardModel;
	}
	
	var getLabelAt = function(index) {
		return _labels[index];
	}
	
	var next = function() {
		_tick++;
		if (_tick >= _numBeats) _tick = 0;
		
		playSoundsInColumn(_tick);
		
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
	
	// Takes a boolean to set whether you can select more than one sound per column
	var setMulti = function(value) {
		console.log("Setting multi select mode to: " + value);
		_isMulti = value;
		
		// make sure there's just one sound per column
		if (_isMulti === false) {
			clearBoard();
		}
		
		// Call the callbacks
		for (var i = 0, len = _multiSelectCallbacks.length; i < len; i++) {
			_multiSelectCallbacks[i](_isMulti);
		}
		
		callUpdate();
	}
	
	var clearBoard = function() {
		for (var i = 0; i < _numInstruments; i++) {
			for (var k = 0; k < _numBeats; k++) {
				removeSoundAt(k, i);
			}
		}
		
		callUpdate();
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
		_allBuckets = [];
		_boardModel = [];
		// Randomly populate the sounds
		for (var i = 0; i < _numInstruments; i++) {
			_allBuckets[i] = [];
			_boardModel[i] = [];
			var currSound = bufferList[i];
			for (var k = 0; k < _numBeats; k++) {
				// Fill in some 0s so it's not just noise
				// _allBuckets[i][k] = (Math.random() < 0.3 ? currSound : 0);
				// set them all to 0
				_allBuckets[i][k] = 0;
				_boardModel[i].push(0);
			}
		}
		for (var i = 0, len = _readyCallbacks.length; i < len; i++) {
			_readyCallbacks[i]();
		}
	}
	
	function callUpdate() {
		for (var i = 0, len = _updateCallbacks.length; i < len; i++) {
			_updateCallbacks[i]();
		}
	}
	
	return {
		loadInstrumentTypes: loadInstrumentTypes,
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
		setSpeed: setSpeed,
		setMulti: setMulti,
		clearBoard: clearBoard,
		addMultiSelectCallback: addMultiSelectCallback,
		addUpdateCallback: addUpdateCallback
	}
});