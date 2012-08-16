define(['libs/easeljs.min'], function(easel) {
	
	this._stage;
	this._container;
	this._on;
	this._off;
	this._onHighlight;
	this._offHighlight;
	this._isOn = false;
	this._callbacks = [];
	this._name = "";
	
	function BeatButton() {
		return this;
	}
	
	BeatButton.prototype.init = function(stage, name, callback) {
		var self = this;
		this._stage = stage;
		this._name = name;
		this._container = new Container();
		this._container.mouseEnabled = true;
		this._container.onClick = function(event) {
			self.toggleState();
			callback(event);
		};
		this._container.name = name;
		this._stage.addChild(this._container);
		
		this._on = new Bitmap("img/dot_on.png");
		this._off = new Bitmap("img/dot_off.png");
		this._onHighlight = new Bitmap("img/dot_on_highlight.png");
		this._offHighlight = new Bitmap("img/dot_off_highlight.png");
		this._container.addChild(this._off);
		this._container.addChild(this._on);
		this._container.addChild(this._offHighlight);
		this._container.addChild(this._onHighlight);
		this._on.visible = false;
		this._onHighlight.visible = false;
		this._offHighlight.visible = false;
		
		this._stage.update();
	}
	
	BeatButton.prototype.isOn = function() {
		return this._isOn;
	}
	
	BeatButton.prototype.toggleState = function() {
		this._isOn = !this._isOn;
		this._isOn ? this.setHighlighted() : this.setUnHighlighted();
		
		// for (var i = 0, len = this._callbacks.length; i < len; i++) {
		// 	this._callbacks[i].call(this, this._isOn);
		// }
	}
	
	BeatButton.prototype.addToggleCallback = function(callback) {
		this._callbacks.push(callback);
	}
	
	BeatButton.prototype.getContainer = function() {
		return this._container;
	}
	
	BeatButton.prototype.getName = function() {
		return this._name;
	}
	
	BeatButton.prototype.setHighlighted = function() {
		if (this._isOn) {
			this._onHighlight.visible = true;
			this._offHighlight.visible = false;
			this._on.visible = false;
			this._off.visible = false;
		} else {
			this._onHighlight.visible = false;
			this._offHighlight.visible = true;
			this._on.visible = false;
			this._off.visible = false;
		}
		// this._stage.update();
	}
	
	BeatButton.prototype.setUnHighlighted = function() {
		if (this._isOn) {
			this._onHighlight.visible = false;
			this._offHighlight.visible = false;
			this._on.visible = true;
			this._off.visible = false;
		} else {
			this._onHighlight.visible = false;
			this._offHighlight.visible = false;
			this._on.visible = false;
			this._off.visible = true;
		}
		// this._stage.update();
	}
	
	BeatButton.prototype.setOn = function() {
		this._isOn = true;
		this._onHighlight.visible = false;
		this._offHighlight.visible = false;
		this._on.visible = true;
		this._off.visible = false;
	}
	
	BeatButton.prototype.setOff = function() {
		this._isOn = false;
		this._onHighlight.visible = false;
		this._offHighlight.visible = false;
		this._on.visible = false;
		this._off.visible = true;
	}
	
	
	// ----------------------------------------
	// PRIVATE METHODS
	// ----------------------------------------
	
	
	
	
	// ----------------------------------------
	// PUBLIC METHODS
	// ----------------------------------------
	
	return BeatButton;
})