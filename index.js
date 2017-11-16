(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[111,215,87,83],[0,0,197,213],[0,215,109,103]]},
		{name:"index_atlas_NP_", frames: [[103,756,33,27],[103,602,92,152],[0,602,101,172],[0,0,300,600]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.sixteenblue = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sixteencandle = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sixteengreens = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sixteenmeats = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sixteenpie = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sixteenspinach = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sixteentable = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sixteentable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteentable();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteentable_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.sixteenspinach_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenspinach();
	this.instance.parent = this;
	this.instance.setTransform(-54.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenspinach_1, new cjs.Rectangle(-54.5,-51.5,109,103), null);


(lib.sixteenpie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenpie();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenpie_1, new cjs.Rectangle(-50.5,-86,101,172), null);


(lib.sixteenmeats_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenmeats();
	this.instance.parent = this;
	this.instance.setTransform(-98.5,-106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenmeats_1, new cjs.Rectangle(-98.5,-106.5,197,213), null);


(lib.sixteengreens_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteengreens();
	this.instance.parent = this;
	this.instance.setTransform(-46,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteengreens_1, new cjs.Rectangle(-46,-76,92,152), null);


(lib.sixteenblue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenblue();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenblue_1, new cjs.Rectangle(-43.5,-41.5,87,83), null);


(lib.seventeenrollovervideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AnuCsQhHABgzgzQgzgyABhIQgBhGAzgzQAzgyBHAAIPdAAQBIAAAyAyQAzAzgBBGQABBIgzAyQgyAzhIgBg");
	this.shape.setTransform(0,27.5,1.067,1.029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenrollovervideo, new cjs.Rectangle(-71.2,9.8,142.5,35.5), null);


(lib.seventeenrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AnuCsQhHABgzgzQgzgyABhIQgBhGAzgzQAzgyBHAAIPdAAQBIAAAyAyQAzAzgBBGQABBIgzAyQgyAzhIgBg");
	this.shape.setTransform(0,27.5,1.067,1.029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenrectangle, new cjs.Rectangle(-71.2,9.8,142.5,35.5), null);


(lib.ordernow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAlQgHgCgFgGQgGgFgDgIQgDgHAAgJQAAgHADgIQADgHAFgGQAGgFAHgDQAHgDAHAAQAJAAAHADQAGADAFAEQAFAFACAIQADAIAAAIIAAACIAAADIg7AAQAAAFACAEQACAEADADQADADAFACQAEABAEAAQAIAAAGgDQAFgDADgFIALAIQgGAJgIADIgJADIgKABQgHAAgIgDgAAXgFQAAgFgCgEIgEgHIgGgFQgEgBgGAAIgIABIgHAFQgDADgCAEQgCAEAAAFIAsAAIAAAAg");
	this.shape.setTransform(37,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAnIAAg7IAAgIIAAgIIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGAAIgBAPIgGgBQgGAAgEACIgGAFQgCADgBAFIgCAJIAAAng");
	this.shape_1.setTransform(30.2,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAlQgHgDgGgFQgFgGgDgHQgDgHAAgJQAAgIADgHQADgHAFgGQAGgFAHgDQAIgDAIAAQAIAAAIADQAIADAFAFQAFAGADAHQAEAHAAAIQAAAJgEAHQgDAHgFAGQgFAFgIADQgIADgIAAQgIAAgIgDgAgKgYQgFACgDAEQgDAEgCAEQgCAFAAAFQAAAFACAGQACAFADADQADAEAFACQAEACAGAAQAGAAAEgCQAGgCACgEQAEgDACgFQABgGAAgFQAAgFgBgFQgCgEgEgEQgCgEgGgCQgEgDgGAAQgGAAgEADg");
	this.shape_2.setTransform(21.9,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEArQgFgFAAgNIAAgnIgPAAIAAgNIAPAAIAAgVIAOAAIAAAVIAUAAIAAANIgUAAIAAAmQAAAHACADQADADAFAAIAFgBIAEgBIABAMIgGACIgHABQgLAAgFgHg");
	this.shape_3.setTransform(14.2,28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAlQgIgDgFgIIALgJQADAFAFADQAFADAFAAIAGgBIAFgCIAEgDIABgFQgBgGgFgCQgEgCgKgCIgHgDIgHgDQgEgDgCgDQgCgDABgFQAAgHACgEQADgEADgDQAEgDAGgCQAFgBAEAAQAJAAAHADQAHAEAFAFIgLAJQgCgEgFgCQgFgDgFAAIgEAAIgFADIgDADIgBAEQAAAEAEADQAEADAIABIAKADIAIADIAFAHQACAEAAAEQAAAIgCAEQgDAEgEADQgEADgGACIgLABQgHAAgJgDg");
	this.shape_4.setTransform(8.1,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAnQgFgBgEgDQgEgDgCgFQgDgEAAgHIABgHQABgEADgCQAEgEAHgDQAIgDAJAAIASgBIAAgCQAAgJgEgDQgGgFgIAAQgFAAgGADQgGACgDAEIgIgKQAFgFAIgDQAIgDAIAAQAIAAAHACQAFADAEAEQAEADACAGQACAFAAAHIAAAgIABAIIAAAHIgOAAIgBgLIAAAAQgFAGgGADQgGAEgIAAIgJgBgAAEADIgLACQgEABgEACQgDAEAAAEQAAADABADIAEADIAFACIAGABQAEAAAEgCQAEgBADgDQADgEABgDIABgJIAAgEIgDAAg");
	this.shape_5.setTransform(-3.9,29.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRA6QgHgCgFgGQgFgFgDgIQgCgIAAgHQAAgJACgHQADgGAFgGQAFgFAHgDQAHgDAJgBQAIABAHAEQAHADAEAGIAAAAIAAg4IAPAAIAAB3IgOAAIAAgLIgBAAQgEAGgIAEQgHAEgHgBQgJAAgHgDgAgKgDQgEACgDAEQgEADgBAFQgCAFAAAGIACAJQABAFAEAEQADAFAEACQAFACAFAAQAGAAAFgCQAFgCADgFQADgDACgFQACgFAAgFQAAgGgCgFQgCgFgDgDQgDgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(-17.4,27);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAnIAAgpIgBgJIgCgHQgCgEgEgBQgDgDgFAAQgIABgGAGQgFAIgBAKIAAAoIgPAAIAAg7IAAgIIAAgIIAOAAIAAAHIAAAGIABAAIAEgGIAGgFIAHgDIAHgBQAHAAAFACQAGADADAEQAEAFACAFQABAFAAAHIAAAug");
	this.shape_7.setTransform(-26.8,29.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGA4IAAhKIAOAAIAABKgAgGgnQgDgCAAgEQAAgFADgCQADgDADAAQAFAAACADQADACAAAFQAAAEgDACQgCADgFAAQgDAAgDgDg");
	this.shape_8.setTransform(-33.5,27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiA5IAAhxIBFAAIAAAOIg2AAIAAAkIAzAAIAAAMIgzAAIAAAzg");
	this.shape_9.setTransform(-39.7,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernow, new cjs.Rectangle(-46.7,15.3,90.4,23.7), null);


(lib.mainssidessweets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBvIgWgEIgHAEIgGABIgFgBIgEgDQgHgGgGgRQgGgRAAgQQAAgHADgEQAEgFAFAAQAKAAAKARIAIANQAHAJALAFQALAFAMAAQAOAAAIgHQAIgIAAgMQAAgSgjgRIgMgGQghgQgMgNQgMgOAAgVQAAgbATgSQAUgSAfAAIAOABIAPADIAKgEIAHgBQAKAAAKARQAKAQAAATQAAAIgDAEQgDAEgGAAQgFAAgFgEQgFgEgGgLQgIgNgJgFQgIgFgMAAQgMAAgHAHQgIAHAAALQAAAKAIAHQAHAIAaANIADABQA7AdAAAiQAAAegXAUQgXAUgiAAg");
	this.shape.setTransform(84,55.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLCBQgLgEgHgHQgIgHgCgLQgEgNAAgfIAAhyIgUAAIgFgCIgDgGIAAgEQABgIAWgSIAJgIIAIgIQAWgTAIAAIAGACQADACgBADIAAAoIAxAAQAEAAACACQACACABAGIAAAGQgBAFgCADQgCACgEAAIgtAAIgDABIgCAGIAABpQAAAcAGAGQAEAHANAAQAGAAALgDIAOgEQAFAAADADQAEADgBAFQAAALgSALQgSALgXAAQgNAAgKgDg");
	this.shape_1.setTransform(67.4,53.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBQQgfgfABgtQgBgxAgghQAfggAwgBQApAAAYAZQAYAWAAApQAAANgDAEQgEAEgRAAIhRAAQgHAAgEgDQgDgEAAgFQAAgGADgDQAEgDAHAAIAsAAIALgCQADgCAAgEQAAgVgOgOQgOgOgUAAQgYAAgNAXQgMAVAAAfQgBAiASAYQAQAYAbAAQAQAAALgEQAKgDALgHIAIgGQAKgJAGAAQAFAAADADQADADAAAFQAAAFgGAHQgFAHgIAIQgUAPgQAHQgSAGgUABQgsAAgfggg");
	this.shape_2.setTransform(48.5,55.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhFBQQgegfgBgtQABgxAfghQAfggAwgBQApAAAZAZQAYAWgBApQAAANgEAEQgDAEgQAAIhRAAQgIAAgEgDQgDgEAAgFQAAgGADgDQAEgDAHAAIAsAAIALgCQADgCgBgEQAAgVgNgOQgOgOgTAAQgaAAgMAXQgNAVAAAfQABAiAQAYQARAYAbAAQAQAAAKgEQAMgDAKgHIAHgGQALgJAGAAQAFAAADADQADADAAAFQAAAFgFAHQgGAHgJAIQgTAPgRAHQgRAGgUABQgtAAgeggg");
	this.shape_3.setTransform(25.9,55.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAXIgZhCQgMgegKgFIgHgDQgMgFAAgIQAAgIALgEQAKgDAiAAQAdAAALADQAKAEAAAIIgBAHIgEAEIgIADQgIAEAAAEIAEAOIARAtIATApQAEAJADAAQADAAAEgGIAJgTIAYg1QAIgUAAgIIgCgHIgGgFIgGgDQgJgDAAgHQAAgIAJgEQAKgDAaAAQAXAAAJADQAJAEAAAHQAAAJgLAEIgHADQgLAEgSAtIgGALIgIATQgxBugOAAQgOAAgmhXgAh9AMIgGgNIgOgkQgOglgKgEIgGgDQgMgFAAgIQAAgIAKgEQALgDAjAAQAdAAALADQAKAEAAAIIgBAHIgFAEIgGADQgJAEAAAEIAEASIARApIASAnQAFALADAAQAGAAAGgNIAHgPIAFgHQACgCAFAAQAGAAACADQADADABAFQAAAGgGAMQgWAxgLAQQgJAQgIAAQgPAAgqhig");
	this.shape_4.setTransform(-2.6,56);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0CaQgYgFgPgJQgIgFgGgSQgGgSAAgYQAAgKAEgFQAEgGAHAAQAKAAAKAUIAFAJQAOAXAQALQAQALAWAAQAXAAAQgOQAQgOAAgUQAAgeg+gcIgHgCQg0gWgRgTQgRgTAAgeQAAgnAcgYQAdgZAtAAIAYACIAeAHIAJgGIAHgCQAFAAAEAEQAEADAFAIQAHANAEAOQAEAOAAALQAAAHgDAEQgDAEgGAAQgMAAgLgQIgDgEQgMgQgOgHQgOgIgSAAQgXAAgOALQgOALAAAUQAAARAMAMQALALAtAUIAJAEQAnAQARAOQALALAGAPQAHAOAAARQAAAsgfAYQgeAYg2AAQgaAAgXgFg");
	this.shape_5.setTransform(-32.9,51);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiBCCQgngfAAgyQAAgbAMgWQANgTAcgUIABgBQgJgKgFgLQgEgKAAgLQgBghAZgWQAZgVAngBQAaAAASALQARAKABANQAAAFgFADQgEAEgGAAIgRgFQgPgGgMAAQgSAAgKALQgKALAAATQAAAIACAGQADAGAGAGQAFAFAKAEIAMAEIAEACIACAEQAAAEgIAJQgIAIgHAAIgJgBIgPgGQgMALgGAOQgHAPABAUQAAApAbAaQAaAbApAAQAiAAAWgSQAVgTAAgdQAAgSgIgKQgJgLgPAAQgOAAgKAJQgJAJAAANIAAAFIAAABIgEABIgCABQgJAAgEgGQgEgGAAgKQAAgfBdgsIAGgCQAZgLAMgOQAOgNAAgPQAAgKgGgFQgFgFgMAAIgIABIgIABQgEAAgDgDQgDgDAAgFQAAgJAMgGQALgHATABQAWAAAOAMQANAMAAAWQAAAbgXAWQgXAVgwASQAUAIAKAQQALAPgBAXQABAPgHAQQgGAQgMAMQgUAVgdALQgdALglAAQhBAAgogeg");
	this.shape_6.setTransform(-74.1,51);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBvIgWgEIgHAEIgGABIgFgBIgEgDQgHgGgGgRQgGgRAAgQQAAgHADgEQAEgFAFAAQAKAAAKARIAIANQAHAJALAFQALAFAMAAQAOAAAIgHQAIgIAAgMQAAgSgjgRIgMgGQghgQgMgNQgMgOAAgVQAAgbATgSQAUgSAfAAIAOABIAPADIAKgEIAHgBQAKAAAKARQAKAQAAATQAAAIgDAEQgDAEgGAAQgFAAgFgEQgFgEgGgLQgIgNgJgFQgIgFgMAAQgMAAgHAHQgIAHAAALQAAAKAIAHQAHAIAaANIADABQA7AdAAAiQAAAegXAUQgXAUgiAAg");
	this.shape_7.setTransform(112.8,4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhFBQQgegfgBgtQABgxAfghQAfggAwgBQApAAAZAZQAXAWAAApQAAANgDAEQgEAEgQAAIhRAAQgIAAgEgDQgDgEAAgFQAAgGADgDQAEgDAHAAIAsAAIALgCQACgCABgEQgBgVgNgOQgOgOgTAAQgZAAgNAXQgNAVAAAgQABAgAQAYQARAZAbAAQAQAAALgEQALgDAKgHIAHgGQALgJAGAAQAFAAADADQADADAAAFQAAAEgFAIQgGAHgJAIQgSAPgSAHQgRAGgUABQgtAAgeggg");
	this.shape_8.setTransform(92.4,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhdCCQgZgeAAguQAAg0AdgfQAdgiAtAAIAPACQAHACADAFQAEAFAAAFQAAALgOAAIgGAAIgFAAQgYAAgOAUQgPASAAAhQAAAlAQAWQAPAWAYAAQAWAAANgMQAMgNAAgXIAAg6IAAhiQAAgPgDgGQgDgGgIgDIgFgCQgOgDAAgHQAAgHAGgDQAFgFAQgFIAYgHIAUgDQAHAAADAEQADAEAAAKIAAALIgCCDIABBZQABAUAEADIAPAGQALABAAAJQAAAJgfAKIgVAGIgQACQgGAAgDgEQgDgDAAgHIAAgKIAAgEIgBgCIgHAFIgJAHQgNAJgLAEQgNAFgNAAQgoAAgZgcg");
	this.shape_9.setTransform(69.2,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglCZQgLgEAAgKQAAgGALgEIAFgCQAGgEACgHQACgHAAgQIAAgPIAAgRIAAgWQAAgigCgJQgCgKgEgCIgKgEQgNgEAAgIQAAgEAEgEQAEgDAJgFIAhgKIAVgEQAGAAADAEQACAEAAALIAAAMIAAAJIgCA2IAAABIgBA1QAAAUACAIQACAJAFADIAIADQALAEAAAIQAAAIgLAEQgKADgcAAQggAAgKgDgAgahrQgJgIAAgKQAAgMAKgKQAKgIAPAAQANAAAJAIQAJAHAAAMQAAAMgKAJQgKAHgOAAQgOABgJgIg");
	this.shape_10.setTransform(49.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0CaQgYgFgPgJQgIgFgGgSQgGgSAAgYQAAgKAEgFQAEgGAHAAQAKAAAKAUIAFAJQAOAXAQALQAQALAWAAQAXAAAQgOQAQgOAAgUQAAgeg+gcIgHgCQg0gWgRgTQgRgTAAgeQAAgnAcgYQAdgZAtAAIAYACIAeAHIAJgGIAHgCQAFAAAEAEQAEADAFAIQAHANAEAOQAEAOAAALQAAAHgDAEQgDAEgGAAQgMAAgLgQIgDgEQgMgQgOgHQgOgIgSAAQgXAAgOALQgOALAAAUQAAARAMAMQALALAtAUIAJAEQAnAQARAOQALALAGAPQAHAOAAARQAAAsgfAYQgeAYg2AAQgaAAgXgFg");
	this.shape_11.setTransform(31.2,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXBBQgDgCAAgDIADgIIAFgHIAMgXQAFgLAAgEIgCgGIgHgDQgKgFgGgHQgFgIAAgLQAAgPAIgJQAKgJANAAQANAAAJAMQAKANAAATQAAAOgFAPQgGAPgOAXIgLARQgFAFgDAAQgGAAgFgCg");
	this.shape_12.setTransform(1.7,16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBvIgWgEIgHAEIgGABIgFgBIgEgDQgHgGgGgRQgGgRAAgQQAAgHADgEQAEgFAFAAQAKAAAKARIAIANQAHAJALAFQALAFAMAAQAOAAAIgHQAIgIAAgMQAAgSgjgRIgMgGQghgQgMgNQgMgOAAgVQAAgbATgSQAUgSAfAAIAOABIAPADIAKgEIAHgBQAKAAAKARQAKAQAAATQAAAIgDAEQgDAEgGAAQgFAAgFgEQgFgEgGgLQgIgNgJgFQgIgFgMAAQgMAAgHAHQgIAHAAALQAAAKAIAHQAHAIAaANIADABQA7AdAAAiQAAAegXAUQgXAUgiAAg");
	this.shape_13.setTransform(-14.1,4.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhoBqQgLgEAAgJQAAgHALgEIAFgCQAGgEACgHQACgHAAgQIAAgOIAAgRIAAgWQAAghgCgKQgCgKgEgDIgKgDQgNgFAAgHQAAgEAEgEQAEgEAJgEIAfgKIAWgEQAGABADADQADADAAAHIAAAOIAAADIABAAIABAAIABgBIAFgFIAFgDQAXgXAaAAQAPAAAPAIQAOAGAKAMQAKALAEAQQAEARAAAiIAAAcIAAAOIgBAMQAAAPADAGQACAGAFAEIAGACQAKAEAAAHQAAAJgKAEQgKADghAAQgdAAgLgDQgKgDAAgIQAAgIALgFIAIgDQAFgDACgJQACgJAAgYQAAhDgJgRQgJgRgWAAQgLAAgKAHQgKAGgGAMQgFAKgBAQQgCAQAAAqQAAAVACAHQABAGAFADIAIADQALAFAAAIQAAAIgLADQgKADgcAAQghAAgKgDg");
	this.shape_14.setTransform(-36,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglCZQgLgEAAgKQAAgGALgEIAFgCQAGgEACgHQACgHAAgQIAAgPIAAgRIAAgWQAAgigCgJQgCgKgEgCIgKgEQgNgEAAgIQAAgEAEgEQAEgDAJgFIAhgKIAVgEQAGAAADAEQACAEAAALIAAAMIAAAJIgCA2IAAABIgBA1QAAAUACAIQACAJAFADIAIADQALAEAAAIQAAAIgLAEQgKADgcAAQggAAgKgDgAgahrQgJgIAAgKQAAgMAKgKQAKgIAPAAQANAAAJAIQAJAHAAAMQAAAMgKAJQgKAHgOAAQgOABgJgIg");
	this.shape_15.setTransform(-54.8,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmBlIgLgMIgJAFQgaASgbAAQgfAAgUgSQgSgTAAgdQgBgiAZgSQAZgUAsAAQALAAAFAEQAFADABAIQAAAMgPAAQgVAAgNAKQgNAKABASQgBARALAKQAMALASAAQAUAAAKgJQAIgKABgWIAAhQQAAgTgJgKQgIgLgOAAQgKAAgKAFQgJAFgIAJIgEAGQgNAQgPAAQgJAAgFgFQgEgGAAgJQgBgUAZgOQAZgOAnAAQAXAAARAHQARAGAKAMQAFAIAEANQACANAAAfIAABEQAAAMACAGQACAGAEABIAHACQANAEAAAHQAAAKgOAIQgOAJgUAAQgJAAgKgLg");
	this.shape_16.setTransform(-71.9,5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABQCXQgMgFAAgJQAAgJAOgEIAJgFQAEgDABgJQACgKAAgdIAAgLIgBhaIgBg2IgbBHQg+CjgOAAQgGAAgNgWQgMgXgehGIgvhqIgCBUIAAA5IABAoQABAJAEADIAJAFQANAEAAAJQAAAJgLAEQgLAEgaAAQgXAAgLgEQgKgEAAgJQAAgHALgGQAMgFABgEQADgLADg3QADg2AAhDIAAgHQAAgXgBgHQgCgIgFgDIgKgEQgOgFAAgKQAAgIAKgDQAKgDAeAAIAfABIAIABQAEADAQAnIAMAeIAGAPQAzCAAEAAQAFgBATgtQATguAahLIAFgNQAHgXAHgIQADgDAJgBIAdgCQAdAAAJADQAKADAAAIQAAAKgMAEIgGACQgHAEgCAIQgCAJAAAgIACB6QACA2ACAJQACAEAJADIAFADIAIAEQACADAAAFQAAAJgLAFQgMADgjAAQghAAgLgDg");
	this.shape_17.setTransform(-102.9,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhiCNQgKgJAAgNQAAgLAIgHQAHgIALAAIAJACIAHAEIAFAIQAGAIAEAAQALAAALgPQALgQAAgRQAAgSgPgiIgCgFIgihKIgUgpQgDgJgNgFIAAAAQgIgDgCgDQgDgDAAgEQAAgKAMgEQALgDAfAAQAfAAALADQAKAEAAAIIgBAHIgEAEIgIADQgIAEAAAEIAEAQIASAqIAQApQAGAKADAAQACAAAFgKIAOgiIAQgrQAFgPAAgFQAAgGgMgHQgMgGAAgGQAAgIAJgDQAKgDAYAAQAaAAAJADQAJAEAAAIQAAAIgMAEIgJACQgMAHgOAkIgGARIgbBDQgjBagWAaQgXAbgfAAQgQAAgKgJg");
	this.shape_18.setTransform(64.4,-41.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAmBlIgMgMIgJAFQgZASgbAAQgfAAgTgSQgUgTAAgdQAAgiAZgSQAZgUAtAAQAKAAAFAEQAGADgBAIQAAAMgOAAQgUAAgNAKQgOAKAAASQAAARAMAKQALALASAAQAVAAAIgJQAJgKAAgWIAAhQQABgTgJgKQgIgLgOAAQgKAAgJAFQgJAFgJAJIgFAGQgNAQgOAAQgJAAgEgFQgGgGAAgJQAAgUAagOQAYgOAnAAQAXAAARAHQARAGAJAMQAHAIACANQADANAAAfIAABEQAAAMACAGQACAGAFABIAGACQAOAEAAAHQAAAKgPAIQgOAJgTAAQgJAAgLgLg");
	this.shape_19.setTransform(42.5,-45.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhdCCQgZgdAAgvQAAg0AdgfQAdgiAtAAIAPACQAHADADAEQAEAFAAAFQAAAMgOAAIgGAAIgFgBQgYAAgOAUQgPASAAAiQAAAjAQAXQAPAWAYABQAWAAANgNQAMgNAAgXIAAg6IAAhiQAAgPgDgGQgDgGgIgDIgFgCQgOgDAAgIQAAgFAGgEQAFgEAQgGIAYgIIAUgCQAHAAADAEQADAFAAAJIAAALIgCCDIABBZQABAVAEACIAPAGQALABAAAJQAAAJgfAKIgVAGIgQACQgGAAgDgEQgDgDAAgHIAAgLIAAgDIgBgCIgHAEIgJAIQgNAJgLAEQgNAFgNAAQgoAAgZgcg");
	this.shape_20.setTransform(18.8,-50.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglCZQgLgEAAgKQAAgGALgFIAFgBQAGgEACgHQACgHAAgRIAAgOIAAgRIAAgWQAAgigCgJQgCgKgEgCIgKgEQgNgEAAgIQAAgEAEgEQAEgEAJgEIAhgKIAVgEQAGAAADAEQACAFAAAKIAAAMIAAAJIgCA2IAAABIgBA1QAAAUACAIQACAJAFADIAIADQALAEAAAIQAAAJgLADQgKADgcAAQggAAgKgDgAgahrQgJgIAAgKQAAgMAKgKQAKgIAPAAQANAAAJAIQAJAIAAALQAAAMgKAJQgKAHgOABQgOAAgJgIg");
	this.shape_21.setTransform(-0.7,-50.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkCZQgKgDAAgKQAAgGAJgEIALgGQAEgDABgNIACgrIAAghIgBgoIAAgQQAAg2gBgPQgDgQgEgCIgNgFQgNgEAAgHQAAgGADgDQAFgEAPgFIAdgIIAVgDQAGAAADAEQACAEAAAKIAAAQQgCBNgBBMIACBJQABAPAEAFIAMAGQAJAEAAAIQAAAIgKAEQgKADgcAAQggAAgLgEg");
	this.shape_22.setTransform(-13,-50.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhNBQQgegfAAgwQAAgvAfggQAhghAuAAQAvAAAdAfQAdAeAAAuQAAAxgfAhQggAhgtAAQgvAAgegfgAgog/QgNARAAAdQAAApASAdQASAdAZAAQAVAAANgSQAMgSAAgcQAAgqgSgcQgRgcgZAAQgVAAgNARg");
	this.shape_23.setTransform(-30.6,-45.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAwCXQgMgFAAgJQAAgJANgEIAKgFQADgDACgOIABgxIAAgeIgCgIQgCgFgLgBQgKgCgoAAIgtABQgMABgDADIgDAHIgBAQIAAASIACAxQABAOAEADIAJAFQANAEAAAJQAAAJgLAFQgMADgiAAQghAAgMgDQgMgFAAgJQAAgJANgEIAJgFQAFgEACgaQACgbAAhAIgChPQgCghgDgDQgCgDgLgFQgLgFAAgJQAAgIAJgDQAKgDAmAAQAmAAAJADQAKADAAAIQAAAJgNAFIgJAFQgEADgCANIgBA/QAAAIAIAEQAIADAfAAIARAAIAtgBQANgCAEgDIADgEIAAgIIAAgKIgBg1QgCgLgDgCIgKgFQgNgFAAgJQAAgIAKgDQAKgDAlAAQAnAAAJADQAJADAAAIQAAAKgNAEIgJAFQgFADgCAdQgCAdAAA5IACBSQACAhADAEQACADALAFQALAEAAAIQAAAJgLAFQgNADghAAQgiAAgLgDg");
	this.shape_24.setTransform(-58.8,-50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainssidessweets, new cjs.Rectangle(-124.2,-78.1,248.4,156.3), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgWVgteMAsrAAAMAAABa9MgsrAAAg");
	this.shape.setTransform(0,0,1.045,1.029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-150.5,-300.5,301,601), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqAXuQkoh9jkjkQjkjkh9koQiCkyAAlPQAAlOCCkyQB9koDkjkQDkjkEoh9QEyiCFOAAQFPAAEyCCQEoB9DkDkQDkDkB9EoQCCEygBFOQABFPiCEyQh9EojkDkQjkDkkoB9QkyCClPAAQlOAAkyiCg");
	this.shape.setTransform(164.8,164.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,329.5,329.6), null);


(lib.deliciousmemories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZA2QgMgEgIgJIgCgCIgBgCIACgEIADgEIAEgDIAFgBQACAAACACIAIAFIAJAFQAGACAHAAIAJgBQAEAAAEgCQAFgCACgDQACgEABgFQAAgEgEgDQgDgDgEgBIgNgDIgMgBIgNgDIgMgEQgFgEgDgGQgDgFAAgJQAAgJAEgGQAFgHAGgEQAIgEAHgCQAJgCAHAAIAKABIAMACIALAFQAFADAEADIABACIAAACIgBAEIgEAEIgEACIgFABIgDAAQgGgFgHgDQgHgDgHAAIgHAAIgIADIgGAFQgCADgBAEQABAGAFADQAGADAHABIARACQAKACAHADQAJADAFAFQAGAGgBAMQABAKgFAHQgFAHgHAFQgHAEgJADQgJACgHAAQgNAAgMgFg");
	this.shape.setTransform(112.8,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA4IgEgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAhpQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIBOAAIADABIABAEIABAEIAAADIgBAFIgEACIg6AAIgDACIgCAEIAAAPQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAlAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIACAEIAAAFIAAACQAAAFgEABIgkAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABIAAARQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIA5AAQAEACAAAFIAAADIAAAFIgBADQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(102.5,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDA7QgEAAgCgEIAAhtIADgCIADgBIAEAAIADAAQAFAAABADIAABsIgCADIgEABIgEABg");
	this.shape_2.setTransform(93.9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdA6IgDgCIgDgBIgBgBIgTgdIgDgFIgFgBIgOAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAcQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgFABIgEABIgEAAQgDAAgCgCQgCgBAAgEIAAhnQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAEgBIAuAAQAKgBAGADQAIADAGAFQAFAFADAHQADAHAAAJQAAAJgEAHQgDAEgEAEIgIAGQgEACAAADIAAACIAFAHIAGAJIAGAJIACAGQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgDACIgFACIgEABgAgXgkQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIAAAZQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQADABADAAIAWAAIAIgBQAEgBADgCQADgCABgEQACgDABgFQAAgKgHgEQgDgCgEgCQgEgBgEAAIgWAAQgDAAgDABg");
	this.shape_3.setTransform(86.1,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA5IgMgDIgKgFIgJgHQgIgIgFgLIgEgLIgBgMIABgLIAEgLQAFgLAIgIIAJgHIAKgGIAMgDIALgBIAMABIAMADQALAFAIAIQAIAIAFALQAFALAAALIgCAMIgDALQgFALgIAIQgIAIgLAEIgMADQgGACgGAAQgFAAgGgCgAgOgjQgHADgFAFQgGAGgDAGQgDAIAAAHQAAAIADAIQADAGAGAFQAFAGAHADQAHADAHAAQAHAAAHgDQAHgDAGgGQAFgFADgGQAEgIAAgIQAAgHgEgIQgDgGgFgGQgGgFgHgDQgHgDgHAAQgHAAgHADg");
	this.shape_4.setTransform(73.1,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAmA5IgFgBQgDgBAAgEIAAgyIgBgCIgDgBQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgSAdQgCACgDAAIgDAAIgDgDIgQgcQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgBACIAAAyQgCAFgDABIgHAAIgDAAIgDgBIgCgCIgBgDIAAhmQABgDADgBIAHgBIAEABIADADIAbAtQACADADAAIADgBIACgCIAbgsQADgFAGAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIAABnIgBAEIgDACIgEAAg");
	this.shape_5.setTransform(60.1,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA4IgEgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAhpQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIBOAAIADABIABAEIABAEIAAADIgBAFIgEACIg6AAIgDACIgCAEIAAAPQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAlAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIACAEIAAAFIAAACQAAAFgEABIgkAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABIAAARQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIA5AAQAEACAAAFIAAADIAAAFIgBADQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_6.setTransform(48.9,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmA5IgFgBQgDgBAAgEIAAgyIgBgCIgDgBQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgSAdQgCACgDAAIgDAAIgDgDIgQgcQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgBACIAAAyQgCAFgDABIgHAAIgDAAIgDgBIgCgCIgBgDIAAhmQABgDADgBIAHgBIAEABIADADIAbAtQACADADAAIADgBIACgCIAbgsQADgFAGAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIAABnIgBAEIgDACIgEAAg");
	this.shape_7.setTransform(36.5,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYA2QgMgEgKgJIgBgCIgBgCIACgEIAEgEIADgDIAFgBQACAAACACIAIAFIAJAFQAGACAHAAIAJgBQAEAAAEgCQAEgCADgDQADgEAAgFQgBgEgDgDQgCgDgGgBIgLgDIgNgBIgNgDIgMgEQgFgEgDgGQgDgFAAgJQAAgJAEgGQAFgHAGgEQAHgEAJgCQAIgCAHAAIALABIALACIAKAFQAGADADADIABACIABACIgCAEIgDAEIgFACIgEABIgDAAQgGgFgHgDQgGgDgIAAIgHAAIgIADIgGAFQgDADABAEQAAAGAFADQAFADAJABIAQACQAJACAJADQAIADAFAFQAFAGABAMQgBAKgEAHQgFAHgHAFQgHAEgJADQgJACgHAAQgMAAgMgFg");
	this.shape_8.setTransform(19.9,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSA3QgKgDgGgHQgHgGgEgJIgDgJIgBgLIAAgeIAAgfQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIADgBIAFgBIADAAIAFABQABABAAAAQABABAAAAQAAAAABABQAAABAAAAIAAA6QAAAGACAGQACAGADAFQAEAFAGACQAFADAGAAQAHAAAGgDQAFgCAEgFQAEgEACgGIABgNIAAg5QAAgEADgBIAFgBIAEgBIAEABIAEACQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABIAAA9IgBALIgDAJQgEAJgHAGQgGAHgJADQgJAEgLAAQgJAAgJgEg");
	this.shape_9.setTransform(8.1,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLA5IgMgDIgKgFIgJgHQgIgIgFgLIgEgLIgBgMIABgLIAEgLQAFgLAIgIIAJgHIAKgGIAMgDIALgBIAMABIAMADQALAFAIAIQAIAIAFALQAFALAAALIgCAMIgDALQgFALgIAIQgIAIgLAEIgMADQgGACgGAAQgFAAgGgCgAgOgjQgHADgFAFQgGAGgDAGQgDAIAAAHQAAAIADAIQADAGAGAFQAFAGAHADQAHADAHAAQAHAAAHgDQAHgDAGgGQAFgFADgGQAEgIAAgIQAAgHgEgIQgDgGgFgGQgGgFgHgDQgHgDgHAAQgHAAgHADg");
	this.shape_10.setTransform(-4.8,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDA7QgEAAgCgEIAAhtIACgCIAFgBIACAAIAEAAQAFAAABADIAABsIgCADIgEABIgEABg");
	this.shape_11.setTransform(-14,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEA5IgMgDIgKgFIgJgHIgHgIIgGgKQgFgMAAgMQAAgMAFgLIAGgKQADgFAEgDQAIgIALgFQAGgCAGgBIALgBIAMACQAHABAGACQAGADAGAEQAFAEAEAFIABACQAAAEgCACIgFACIgDADIgEABQgCAAgDgCIgGgFIgJgGQgFgCgIAAQgHAAgHADQgHADgGAFQgFAGgDAHQgDAHAAAHQAAAIADAHQADAHAFAFQAGAGAHADQAHADAHAAQAIAAAIgEQAIgDAFgGIAEgBIAEABIAEACIAEAEIABAEIAAACIgKAJQgFAEgGACIgMAEQgHACgGAAQgHAAgEgCg");
	this.shape_12.setTransform(-22.5,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDA7QgEAAgCgEIAAhtIACgCIAFgBIACAAIAFAAQAEAAABADIAABsIgCADIgEABIgEABg");
	this.shape_13.setTransform(-31,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA6IgEgCIgCgEIAAhmQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIADgCIAEgBIAEAAQADAAACACQADABABADIAABPIAAAEIADADQACADAEAAIAzAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIACADIAAAEIABADQgBAEgBACQgBADgFAAg");
	this.shape_14.setTransform(-38.3,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmA4IgDgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAhpQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIADgBIBOAAIADABIABAEIAAAEIAAADIgBAFIgDACIg6AAIgDACIgBAEIAAAPQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAlAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAIACAEIAAAFIAAACQAAAFgEABIgkAAQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAAAAAABIAAARQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIA5AAQAEACAAAFIAAADIgBAFIgBADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_15.setTransform(-49,-0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvA4IgEgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhmQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIApAAIALABIAMACQALAFAIAHQAJAIAEAKQADAFABAGQABAGAAAFQAAANgFALIgFAJIgIAIIgJAGIgKAGQgLADgMAAgAgegiQgBABAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAA9QAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIAEACIAUAAQAIAAAHgCQAHgDAFgFQAGgFADgGQADgIAAgIQAAgIgDgGQgDgHgGgFQgFgEgHgDQgHgCgIgBIgUAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_16.setTransform(-61.1,-0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmA4IgDgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAhpQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIADgBIBOAAIADABIABAEIABAEIAAADIgCAFIgDACIg6AAIgDACIgCAEIAAAPQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAlAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAIACAEIAAAFIAAACQAAAFgEABIgkAAQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABIAAARQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIA5AAQAEACAAAFIAAADIgBAFIgBADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_17.setTransform(-77.7,-0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaA6IgEgCIgcgrIgDgDIgFgBIgGACQgDABAAAEIAAAjQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBABIgEACIgEAAIgEAAQgHAAAAgFIAAhqIADgDIADgBIAEAAIAEAAQAFAAACAEIAAAkQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAIAFACQADAAACgDIAfgmIACgBIADgBIADABIAEADIAEADIACADIgBACIgcAgIgCADIAAADIAAADIABADIAkAwIABACIAAABIgCADIgDADIgFABIgEABg");
	this.shape_18.setTransform(-88.7,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAsA5IgCAAIgHAAQgDgBgBgDIgGgPIgCgDIgEgBIglAAIgBABIgCABIgCABIgBABIgGAPIgCACIgDABIgDABIgEAAIgDAAIgDAAIgDgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAvhqQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAIADgBIAFAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAIAtBqIAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABgAgBgRIAAACIgCADIgCAFIgDAHIgCAFIgCAFIgBACIABADIACABIAVAAIADgBIABgCIgCgFIgEgJIgDgJIgDgGIgDgBg");
	this.shape_19.setTransform(-100.2,-0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAmA5IgFgBQgDgBAAgEIAAgyIgBgCIgDgBQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgSAdQgCACgDAAIgDAAIgDgDIgQgcQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgBACIAAAyQgCAFgDABIgHAAIgDAAIgDgBIgCgCIgBgDIAAhmQABgDADgBIAHgBIAEABIADADIAbAtQACADADAAIADgBIACgCIAbgsQADgFAGAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIAABnIgBAEIgDACIgEAAg");
	this.shape_20.setTransform(-112,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.deliciousmemories, new cjs.Rectangle(-120.4,-10.2,240.8,20.6), null);


(lib.canlde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteencandle();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.canlde, new cjs.Rectangle(-16.5,-13.5,33,27), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqoZNQk7iFjyjyQjyjziFk6QiJlFAAljQAAlkCJlFQCFk6DyjzQDzjyE6iFQFFiJFjAAQFkAAFFCJQE6CFDyDyQDyDzCGE6QCJFFAAFkQAAFjiJFFQiGE6jyDzQjyDyk6CFQlFCJlkAAQljAAlFiJgALTMVIgBANQgBAOALAAIAxAAQAMAAABALIAACUQAAAHAEADQAFABAJAAQAKAAAEgBQAFgDAAgHIAAiUQgBgLAMAAIAyAAQALABAAgTQAAgRgMAAIifAAQgIAAgBAIgADSOMIBBBGQAHAJATgBQAOAAAEgEQAGgFgIgJIhOhVQgJgKAJgIIBAg7QAKgJgMgLQgMgMgNALIhKBDQgFAFgEABQgFADgLgBQgJABAAgNIAAg3QAAgMgSgBQgKAAgEACQgGADAAAIIAAC1QABAMAQAAQAVABAAgMIAAg8QAAgGAEgFQADgFAFAAQATABALAIgAhwOXQALAAAGAJIAfAxQAHAKARgBQAOAAAEgEQAFgEgFgIIgjgxQgDgGAHgHQAPgKAIgJQAPgQAAgXQAAgggVgTQgUgTggAAIhrAAQgKABABAHIAAC7QAAALAMAAIAPAAQAKgCAAgGIAAgxQgBgEAEgDQAEgDADAAgAmQOxQAHAAADAGIAOAbQADAJAPgBQAHAAAHgBQAJgEgDgGIhYi7QgEgJgMAAQgKAAgFAKIhZC5QgGAMAXAAQASAAACgIIAMgWQAFgLAJAAgArGNkIANBsQABAFAFADQAFADAFgBQAXAAgBgKIgVi2QgCgIgEgDQgDgCgGgBQgLABgEAHIg8BRQgHAIgDAAQgFgBgFgHIg5hPQgEgJgKAAQgLAAgEAFQgEADgBAJIgVCyQAAAFAGADQAFADAFgBQAUAAABgKIAPhqQAAgGAGgBQAEABACADIAtA8QAEAGAHAAQAGAAAEgFIAwg/QADgDAEgBQAFABACAGgAGyMbIAACvQAAAPAMAAICdAAQAKgBAAgQQAAgTgKAAIh6AAQgKAAAAgKIAAgfQAAgKALAAIBGAAQALAAgBgSQAAgSgKAAIhHAAQgKAAAAgJIAAgcQABgIAIgBIB6AAQAHABADgGQACgEAAgJQAAgJgCgDQgDgFgGAAIidAAQgMAAAAAOgAT4IxQgMAMAAATQAAASAMANQAOANARAAQATAAANgNQANgNAAgSQAAgTgNgMQgNgOgTAAQgRAAgOAOgAP5JKQAlAMA0AAQBUAAAzgsQAzgtgBhKQAAgggMgfQgMgegWgXQgUgVgXgSQgWgRgzgjIgqgeQgbgWgMgSQgJgLAAgXQAAgaARgPQASgQAdAAQAtAAAjAbQAOALAGAHQAHAHAOAVQAKAPAMAAQAKgBAIgFQAHgGAAgJQgBgIgBgEIgUhbQgGgZgSAAQgFABgDABIgKAGQgLAHgIAAIgMgBIgVgGQgkgIgmAAQhGAAgrAmQgrAmAAA9QAAA0AgAlQATAXASAOIBOA4QA/ArAbAdQAbAfABAhQgBAigZAVQgaAUgqAAQgkAAghgSQgigRgWgfIgMgRQgJgMgMAAQgMAAgHAHQgIAJAAALQAAAJACAIIAVBVQAFAPAFAGQAGAHALAAQAJAAALgIQAJgJAJAAIASAFgAjRF+QAHAAACALIABACQAYBeBGA2QBGA2BlABQCCgBBMhQQBMhRAAiIQAAiFhMhQQhMhQiAAAQhmAAhHA3QhGA2gYBfIgBABQgBAKgIABQgHABgCgMQgWhfhHg3QhIg3hpAAQh/AAhMBQQhLBRgBCIQAACFBNBRQBLBQB+AAQBogBBIg2QBGg2AYhfIABgCQACgKAGAAIABAAgAFmIeQgFAHAAAKQAAANAKAFQAGADAVADQBdANBrABQBGgBAwgOQAxgNAlgeQAugmAag9QAZg+AAhNQAAhFgUg4QgUg4glglQgngog0gSQg2gShPAAQhrAAhdANQgVADgGADQgKAGAAAMQAAALAFAGQAHAIAIgBIARAAQAKABAFAKQACALABAXIAAF5QgBAYgCAKQgFALgKAAIgRAAQgIAAgHAHgAyyIgQgGAGgBALQAAAOAJAFQAIAFAXAAICcAAQAXAAAKgFQAIgFABgOQgBgLgFgGQgHgIgKAAIgTAAQgMABgGgLQgCgHAAgbIAAiKQAAgZAIgGQAEgDAeAAIBGAAQAbAAAHADQAIAEACAMIAAAGQAEAWATAAQAOAAAFgJQAFgIAAgWIAAhIQAAgWgFgJQgFgJgOAAQgTAAgEAWIAAAEQgCANgIADQgHAEgbAAIhGAAQgdAAgFgDQgIgGAAgZIAAhkQgBgjAJgIQAIgJAjAAIBtAAQAgAAAMAEQAQAFAFAQQAFANAEAFQAHANAOAAQANAAAFgIQAEgJgDgRIgMg6QgFgWgaABIlvAAQgWgBgJAGQgIAFgBAOQABAKAGAHQAHAHAJAAIARAAQAEAAAEADQAEAEABAFQAEALAAAXIAAF7QAAAYgDAKQgEALgKgBIgRAAQgJAAgHAIgACnrWQADAJgKADQgoAOgmATQgmATgYATQg6AngfBDQghBDAABZQAACLBPBUQBOBUCEAAQCHAABQhUQBQhVgBiOQABikhphOQg7gsg3AGQgiAEgFATQgEAUAaAKQA2AUAZA7QAXA4AABfQAABwgqBCQgrBChJAAQhMAAgphAQgrhBAAhxQAAhRAQgyQATg/AvgvQAegdBGgjQA+geAigsQAUgZAAgVQABgTgPgFQgMgDgNAMIgYAXQgvAfg4gTQgugOglgpQgbgfgogIQgcgGggAHQgKADgDgHQgEgHALgIQAcgVAqACQAvABAfAdQAeAbAgAPQAkAQAagEQARgDAAgPQAAgOgSgGQgggMgmg2Qglgzg1gQQhPgWhJA8QhDA4gYBWQgGAXALALQANALAUgJQA6gaAvAXQAJAEAhATQAcASAWAJQAsASA7gLIAGgBQAIAAABAIgAvDlQIBJDYQAHAYALAKQALAJATAAQATAAAKgLQALgMAJgeICHm0QAHgWAHgJQAIgJALgBQAjgFAAAxIAAF9QAAAbgCAHQgBAEgFADQgEADgFAAIgRAAQgIAAgHAHQgGAHAAAKQAAAOAIAFQAIAFAWAAICbAAQAUAAAIgFQAIgFAAgNQABgLgGgHQgGgHgJAAIgQAAQgLAAgGgKQgCgKAAgYIAAiBQABgdAFgHQAGgGAXgBIB0AAQAXABAGAHQADAEABAGIABAeIAAB8QAAAbgDAHQgGAKgJAAIgQAAQgJAAgHAHQgHAHAAAKQABAOAHAFQAJAFAWAAICaAAQAWAAAJgFQAIgFAAgOQAAgKgGgHQgGgHgJAAIgSAAQgFAAgDgDQgFgDgCgEQgCgLAAgXIAAl9QAAgYACgKQACgEAFgEQADgCAFAAIASAAQAIgBAHgGQAGgHAAgLQABgOgKgFQgIgFgWAAIiaAAQgWAAgJAFQgJAFAAAOQAAALAHAHQAGAGALABIAQAAQAKAAAFAKQADAGAAAcIAABoIgBAeQgBAHgDADQgGAIgXAAIh0AAQgXAAgGgHQgFgGgBgeIAAhtQAAgaACgIQAGgKALAAIAQAAQAJgBAGgGQAGgHAAgLQAAgOgIgFQgIgFgVAAIkmAAQgRAAgIAFQgHAHgBAMQABAVAbADQAdADAAASQABAJgEAMIheE6QgBAGgFAAQgEABgCgFIhfkuQgJgZABgKQAAgLAFgGQAGgEARgCQAbgEABgTQAAgXgdAAIinAAQgeAAABAZQAAAKAFAFQAFAFAOAEQAPADAGAFQAHAEADAJIAmBvQAHAXgJAZIg+C2QgCAGgFABQgEAAgCgGIhzlHQgDgKAAgJQgBgKAHgFQAGgFAOgBQARgCAGgEQAIgFAAgLQAAgXgcAAIiwAAQgcAAAAAWQAAAKAFAGQAFAFAOACQAUAEAHAIQAHAHAKAaICmG+QAJAZAKAJQALAJATAAQAQAAANgJQAGgHALgbIBMjYQACgEAFAAQADAAACAEgAOkiCQgGAHAAAKQAAAOAIAFQAJAGAVAAIFigBQAOAAAHgFQAHgFADgLIANhCQAEgQgFgJQgGgJgLAAQgPABgJAQIgHAPQgPAfgvAAIhVAAQgjAAgPgFQgKgEgDgLQgDgLAAgiIAAhrQAAgaAIgFQAEgDAfgBIAnAAQAaABAIADQAHADACANIABAGQAEAWASgBQAOABAFgJQAGgJgBgWIAAhIQABgWgGgIQgFgJgOAAQgTAAgDAVIgBAFQgCANgHADQgHAEgbAAIgnAAQgfAAgEgEQgIgEAAgaIAAhlQAAgiAJgJQAIgJAjAAIBPAAQAgABAMADQAPAGAHAPQAFAQADADQAHANAOgBQAMAAAGgIQAEgJgDgQIgMg7QgEgVgaAAIlTAAQgVAAgJAFQgJAGAAANQAAAKAGAHQAIAIAIgBIARAAQAEABAEADQAEADABAGQAEAIAAAZIAAF8QAAAagEAIQgBAFgDADQgEADgFAAIgRAAQgIAAgHAGgAHziCQgHAHAAAKQAAAOAIAFQAIAFAWAAIE/AAQAaAAAEgVIAOhCQADgQgFgJQgFgJgMAAQgPABgIAQIgIAPQgOAfgwAAIgwAAQgaABgLgCQgLgCgHgEQgHgFgCgJQgCgJAAgdIAAlkQAAgcACgGQADgLAPAAIASAAQAJAAAHgGQAHgHgBgLQAAgNgJgGQgIgFgXAAIidAAQgWAAgJAFQgJAGAAANQABALAGAHQAHAGAKAAIAQAAQALAAADALQADAJAAAZIAAGAQAAAXgDAIQgCAEgEAEQgEADgEAAIgQAAQgKAAgFAGg");
	this.shape.setTransform(0,0,0.223,0.223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgLQAKgJAOgBQAPABAKAJQAKALAAAOQAAAPgKAKQgKALgPgBQgOABgKgLgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgUIAFAAIAOAUIAKAAg");
	this.shape_1.setTransform(29.1,13.2,0.223,0.223);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(-2.5,18.9,0.223,0.223);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(29.1,12.9,0.223,0.223);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCtQgog+AAhsQAAhuAog/QApg/BFAAQBGAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_4.setTransform(-10.9,6.7,0.223,0.223);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgxQABgEADAAQADAAACAEIAZAyQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-9.9,19.6,0.223,0.223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(14.4,6.7,0.223,0.223);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_7.setTransform(1.5,6.7,0.223,0.223);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.223,0.223,0,0,0,164.9,164.9);
	this.instance.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogo, new cjs.Rectangle(-39,-39,78,78), null);


(lib.seventeenrollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// rollover
	this.instance = new lib.seventeenrollovervideo();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.2,9.8,142.5,35.5);


// stage content:
(lib.halfpagebannersixteen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_90 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(52).call(this.frame_90).wait(3));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(150.3,301.6,1.456,0.919,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(93));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(93));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.2,300,1.826,1,0,0,0,0.1,0);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(84));

	// logo
	this.instance_2 = new lib.whitelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,37,1.296,1.296);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.11,scaleY:0.11,y:37.1},0).to({scaleX:1.3,scaleY:1.3,y:37,alpha:1},6).to({scaleX:1.21,scaleY:1.21},7).wait(71));

	// make-deliciious-memories
	this.instance_3 = new lib.deliciousmemories();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,173.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({alpha:1},10).wait(57));

	// holiday-mains
	this.instance_4 = new lib.mainssidessweets();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,265.4);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({alpha:1},10).wait(57));

	// FIND-A-STORE
	this.instance_5 = new lib.ordernow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,347.3);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({y:346.3},0).to({alpha:1},10).wait(45));

	// cta-rollover
	this.cta_rollover = new lib.seventeenrollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(150,346.8);
	this.cta_rollover.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(38).to({alpha:1},10).wait(45));

	// cta-rectangle
	this.instance_6 = new lib.seventeenrectangle();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,346.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({alpha:1},10).wait(45));

	// candle
	this.instance_7 = new lib.canlde();
	this.instance_7.parent = this;
	this.instance_7.setTransform(283.5,13.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53).to({alpha:1},10).wait(30));

	// greens
	this.instance_8 = new lib.sixteengreens_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(254,98);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(58).to({alpha:1},10).wait(25));

	// pie
	this.instance_9 = new lib.sixteenpie_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(50.5,86);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63).to({alpha:1},10).wait(20));

	// meats
	this.instance_10 = new lib.sixteenmeats_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(201.5,501.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(68).to({alpha:1},10).wait(15));

	// spinach
	this.instance_11 = new lib.sixteenspinach_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(54.5,548.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(73).to({alpha:1},10).wait(10));

	// blue
	this.instance_12 = new lib.sixteenblue_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(76.5,458.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(78).to({alpha:1},10).wait(5));

	// table
	this.instance_13 = new lib.sixteentable_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,286.5,300,621.6);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg", id:"index_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;