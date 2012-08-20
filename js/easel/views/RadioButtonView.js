define(['libs/easeljs.min'], function(easel) {
	
	this._stage;
	this._container;
	this._on;
	this._off;
	this._isOn = false;
	this._callbacks = [];
	this._name = "";
	this._label;
	this._index = 0;
	
	function RadioButton() {
		return this;
	}
	
	RadioButton.prototype.init = function(stage, name, index, callback) {
		var self = this;
		this._stage = stage;
		this._name = name;
		this._index = index;
		
		this._container = new Container();
		this._container.mouseEnabled = true;
		this._container.onClick = function(event) {
			self.toggleState();
			callback(event);
		};
		this._container.name = name;
		this._stage.addChild(this._container);
		
		this._label = new Text("16px Arial black");
		this._label.text = name.toUpperCase();
		this._label.x = 50;
		this._label.y = 22;
		this._container.addChild(this._label);
		
		this._on = new Bitmap("img/radioOn.png");
		this._off = new Bitmap("img/radioOff.png");
		this._container.addChild(this._off);
		this._container.addChild(this._on);
		this._on.visible = false;
		
		this._stage.update();
	}
	
	RadioButton.prototype.isOn = function() {
		return this._isOn;
	}
	
	RadioButton.prototype.toggleState = function() {
		this._isOn = !this._isOn;
		this._isOn ? this.setOn() : this.setOff();
	}
	
	RadioButton.prototype.addToggleCallback = function(callback) {
		this._callbacks.push(callback);
	}
	
	RadioButton.prototype.getContainer = function() {
		return this._container;
	}
	
	RadioButton.prototype.getName = function() {
		return this._name;
	}
	
	RadioButton.prototype.getIndex = function() {
		return this._index;
	}
	
	RadioButton.prototype.setOn = function() {
		this._isOn = true;
		this._on.visible = true;
		this._off.visible = false;
		this._stage.update();
	}
	
	RadioButton.prototype.setOff = function() {
		this._isOn = false;
		this._on.visible = false;
		this._off.visible = true;
		this._stage.update();
	}
	
	RadioButton.prototype.remove = function() {
		this._container.onClick = null;
		this._container.removeAllChildren();
	}
	
	
	// ----------------------------------------
	// PRIVATE METHODS
	// ----------------------------------------
	
	
	
	
	// ----------------------------------------
	// PUBLIC METHODS
	// ----------------------------------------
	
	return RadioButton;
})