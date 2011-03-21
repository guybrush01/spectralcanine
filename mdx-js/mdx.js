/// class MDX
/// Desc Holds all the internal data of a MDX file
function MDX () {
	this.versionChunk = null;
	this.modelChunk = null;
	this.sequenceChunk = null;
	this.globalSequenceChunk = null;
	this.textureChunk = null;
	this.layerChunk = null;
	this.materialChunk = null;
	this.textureAnimationChunk = null;
	this.geosetChunk = null;
	this.geosetAnimationChunk = null;
	this.boneChunk = null;
	this.lightChunk = null;
	this.helperChunk = null;
	this.attachmentChunk = null;
	this.pivotPointChunk = null;
	this.particleEmitterChunk = null;
	this.particleEmitter2Chunk = null;
	this.ribbonEmitterChunk = null;
	this.eventObjectChunk = null;
	this.cameraChunk = null;
	this.collisionShapeChunk = null;
}

MDX.prototype = {
	/// method MDX#draw
	/// Desc Draws the MDX model using an attribute locations array in the format of [vertex, normal, texcoord]
	draw : function (attribs) {
		var geosets = this.geosetChunk.geosets;
		
		for (var i = 0; i < geosets.length; i++) {
			geosets[i].draw(attribs);
		}
	}
}