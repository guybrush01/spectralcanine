/// class Mdx
/// Desc Holds all the internal data of a MDX file
function Mdx(file) {
	var stream = new BinaryStream(file);
	var header;
	
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
	
	if (true === stream.readExpected("MDLX")) {
		while ((header = stream.readHeader()) !== null) {
			switch (header.token) {
				case "VERS": this.versionChunk = new MdxVersionChunk(stream, header.size); break;
				case "MODL": this.modelChunk = new MdxModelChunk(stream, header.size); break;
				case "SEQS": this.sequenceChunk = new MdxSequenceChunk(stream, header.size); break;
				case "GLBS": this.globalSequenceChunk = new MdxGlobalSequenceChunk(stream, header.size); break;
				case "TEXS": this.textureChunk = new MdxTextureChunk(stream, header.size); break;
				//case "LAYS": this.layerChunk = new MdxLayerChunk(stream, header.size); break;
				case "MTLS": this.materialChunk = new MdxMaterialChunk(stream, header.size); break;
				case "TXAN": this.textureAnimationChunk = new MdxTextureAnimationChunk(stream, header.size); break;
				case "GEOS": this.geosetChunk = new MdxGeosetChunk(stream, header.size); break;
				case "GEOA": this.geosetAnimationChunk = new MdxGeosetAnimationChunk(stream, header.size); break;
				case "BONE": this.boneChunk = new MdxBoneChunk(stream, header.size); break;
				case "LITE": this.lightChunk = new MdxLightChunk(stream, header.size); break;
				case "HELP": this.helperChunk = new MdxHelperChunk(stream, header.size); break;
				case "ATCH": this.attachmentChunk = new MdxAttachmentChunk(stream, header.size); break;
				case "PIVT": this.pivotPointChunk = new MdxPivotPointChunk(stream, header.size); break;
				case "PREM": this.particleEmitterChunk = new MdxParticleEmitterChunk(stream, header.size); break;
				case "PRE2": this.particleEmitter2Chunk = new MdxParticleEmitter2Chunk(stream, header.size); break;
				case "RIBB": this.ribbonEmitterChunk = new MdxRibbonEmitterChunk(stream, header.size); break;
				case "EVTS": this.eventObjectChunk = new MdxEventObjectChunk(stream, header.size); break;
				case "CAMS": this.cameraChunk = new MdxCameraChunk(stream, header.size); break;
				case "CLID": this.collisionShapeChunk = new MdxCollisionShapeChunk(stream, header.size); break;
				default: throw "Exception: unknown chunk ID " + header.token;
			}
		}
	} else {
		throw "Exception: Oops, " + file + " is not a MDX file";
	}
}

Mdx.prototype = {
	/// method MDX#draw
	/// Desc Draws the MDX model using an attribute locations array in the format of [vertex, normal, texcoord]
	draw : function (program) {
		var geosets = this.geosetChunk.geosets;
		var materials = this.materialChunk.materials;
		var i;
		
		//console.log(materials[0]);
		for (i = 0; i < geosets.length; i++) {
			var geoset = geosets[i];
			//console.log("material " + geoset.materialId);
			//var material = materials[geoset.materialId];
			//var layer = material.layerChunk.layers[0];
			//var texture = this.textureChunk.textures[layer.textureId].texture;
			//console.log(texture);
			//console.log("geoset " + i + " is using material " + geoset.materialId + " which uses texture " + layer.textureId-1);
			//console.log(geoset);
			//if (texture) {
				//console.log("binding texture " + layer.textureId + " to geoset " + i);
				//Gl.state.bindTexture(Gl.TEXTURE0, texture);
				//program.uniform1i('texture', 0);
			//} else {
			//	Gl.state.bindTexture(Gl.TEXTURE0, 0);
			//	program.uniform1i('texture', 0);
			//}
			
			geoset.draw(program);
		}
	}
};