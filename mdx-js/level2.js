/// class TranslationTrack
/// Desc ?
function MdxTranslationTrack(stream, interpolationType) {
	this.time = stream.readUint32();
	this.translation = stream.readFloat32Array(3);
	
	if (interpolationType > 1) {
		this.inTan = stream.readFloat32Array(3);
		this.outTan = stream.readFloat32Array(3);
	}
}
    
/// class RotationTrack
/// Desc ?
function MdxRotationTrack(stream, interpolationType) {
	this.time = stream.readUint32();
	this.rotation = stream.readFloat32Array(4);
	
	if (interpolationType > 1) {
		this.inTan = stream.readFloat32Array(4);
		this.outTan = stream.readFloat32Array(4);
	}
}

/// class ScalingTrack
/// Desc ?
function MdxScalingTrack(stream, interpolationType) {
	this.time = stream.readUint32();
	this.scalling = stream.readFloat32Array(3);
	
	if (interpolationType > 1) {
		this.inTan = stream.readFloat32Array(3);
		this.outTan = stream.readFloat32Array(3);
	}
}

/// class AlphaTrack
/// Desc ?
function MdxAlphaTrack(stream, interpolationType) {
	this.time = stream.readUint32();
	this.alpha = stream.readFloat32();
	
	if (interpolationType > 1) {
		this.inTan = stream.readFloat32();
		this.outTan = stream.readFloat32();
	}
}

/// class TextureIdTrack
/// Desc ?
function MdxTextureIdTrack(stream, interpolationType) {
	this.time = stream.readUint32();
	this.textureId = stream.readUint32();
	
	if (interpolationType > 1) {
		this.inTan = stream.readFloat32();
		this.outTan = stream.readFloat32();
	}
}

/// class ColorTrack
/// Desc ?
function MdxColorTrack(stream, interpolationType) {
	this.time = stream.readUint32();
	this.color = stream.readFloat32Array(3);
	
	if (interpolationType > 1) {
		this.inTan = stream.readFloat32Array(3);
		this.outTan = stream.readFloat32Array(3);
	}
}

/// class Sequence
/// Desc ?
function MdxSequence(stream) {
	var name = stream.read(80);
	this.name = name.substring(0, name.indexOf('\0'));
	this.intervalStart = stream.readUint32();
	this.intervalEnd = stream.readUint32();
	this.moveSpeed = stream.readFloat32();
	this.flags = stream.readUint32();
	this.rarity = stream.readFloat32();
	this.syncPoint = stream.readUint32();
	this.boundsRadius = stream.readFloat32();
	this.minimumExtent = stream.readFloat32Array(3);
	this.maximumExtent = stream.readFloat32Array(3);
	
	if (typeof debug !== 'undefined') {
		console.log("\t\tname = " + this.name);
		console.log("\t\tintervalStart = " + this.intervalStart);
		console.log("\t\tintervalEnd = " + this.intervalEnd);
		console.log("\t\tmoveSpeed = " + this.moveSpeed);
		console.log("\t\tflags = " + this.flags);
		console.log("\t\trarity = " + this.rarity);
		console.log("\t\tsyncPoint = " + this.syncPoint);
		console.log("\t\tboundsRadius = " + this.boundsRadius);
		console.log("\t\tminimumExtent = " + this.minimumExtent);
		console.log("\t\tmaximumExtent = " + this.maximumExtent);
	}
}

/// class GlobalSequence
/// Desc ?
function MdxGlobalSequence(stream) {
	this.duration = stream.readUint32();
	
	if (typeof debug !== 'undefined') {
		console.log("\t\tduration = " + this.duration);
	}
}

/// class Texture
/// Desc ?
function MdxTexture(stream) {
	this.replaceableId = stream.readUint32();
	var fileName = stream.read(260);
	this.fileName = fileName.substring(0, fileName.indexOf('\0')).replace(/\\/g, '/');
	this.flags = stream.readUint32();
	
	if (typeof debug !== 'undefined') {
		console.log("\t\treplaceableId = " + this.replaceableId);
		console.log("\t\tfileName = " + this.fileName);
		console.log("\t\tflags = " + this.flags);
	}
	
	if (this.fileName !== '') {
		this.httpName = this.fileName.substring(0, this.fileName.lastIndexOf('.')) + '.png';
		this.texture = Gl.state.getTexture(this.httpName);
	}
}

/// class Layer
/// Desc ?
/// Uses class MaterialAlpha
/// Uses class MaterialTextureId
function MdxLayer(stream) {
	var inclusiveSize = stream.readUint32();
	var i;
	
	this.filterMode = stream.readUint32();
	this.shadingFlags = stream.readUint32();
	console.log(stream.index);
	this.textureId = stream.readUint32();
	console.log(this.textureId);
	this.textureAnimationId = stream.readUint32();
	this.coordId = stream.readUint32();
	this.alpha = stream.readFloat32();
	
	if (typeof debug !== 'undefined') {
		console.log("\t\t\t\tfilterMode = " + this.filterMode);
		console.log("\t\t\t\tshadingFlags = " + this.shadingFlags);
		console.log("\t\t\t\ttextureId = " + this.textureId);
		console.log("\t\t\t\ttextureAnimationId = " + this.textureAnimationId);
		console.log("\t\t\t\tcoordId = " + this.coordId);
		console.log("\t\t\t\talpha = " + this.alpha);
	}
	
	if (inclusiveSize > 28) {
		for (i = 0; i < 2; i++) {
			var token = stream.read(4);
			
			if (token === "KMTA") {
				if (typeof debug !== 'undefined') {
					console.log("\t\t\t\tmaterialAlpha");
				}
				
				this.materialAlpha = new MdxMaterialAlpha(stream);
			} else if (token === "KMTF") {
				if (typeof debug !== 'undefined') {
					console.log("\t\t\t\tmaterialTextureId");
				}
				
				this.materialTextureId = new MdxMaterialTextureId(stream);
			} else {
				stream.skip(-4);
			}
		}
	}
}

/// class Material
/// Desc ?
/// Uses class LayerChunk
function MdxMaterial(stream) {
	this.priorityPlane = stream.readUint32();
	this.flags = stream.readUint32();
	
	var token = stream.read(4);
	
	if (typeof debug !== 'undefined') {
		console.log("\t\tpriorityPlane = " + this.priorityPlane);
		console.log("\t\tflags = " + this.flags);
	}
	
	if (token === "LAYS") {
		if (typeof debug !== 'undefined') {
			console.log("\t\tlayerChunk");
		}
		
		this.layerChunk = new MdxLayerChunk(stream);
	} else {
		stream.skip(-4);
	}
}

/// class TextureAnimation
/// Desc ?
/// Uses class TextureTranslation
/// Uses class TextureRotation
/// Uses class TextureScaling
function MdxTextureAnimation(stream) {
	
}

/// class Geoset
/// Desc ?
/// Uses class VertexPosition
/// Uses class VertexNormal
/// Uses class FaceTypeGroup
/// Uses class FaceGroup
/// Uses class Face
/// Uses class VertexGroup
/// Uses class MatrixGroup
/// Uses class MatrixIndex
/// Uses class Extent
/// Uses class VertexTexturePosition
function MdxGeoset(stream) {
	stream.readExpected("VRTX");
	
	var nrOfVertexPositions = stream.readUint32();
	var i;
	var j;
	
	this.vertexPositions = new Array(nrOfVertexPositions);
	
	for (i = 0; i < nrOfVertexPositions; i++) {
		this.vertexPositions[i] = new MdxVertexPosition(stream);
	}
	
	stream.readExpected("NRMS");
	
	var nrOfVertexNormals = stream.readUint32();
	this.vertexNormals = new Array(nrOfVertexNormals);
	
	for (i = 0; i < nrOfVertexNormals; i++) {
		this.vertexNormals[i] = new MdxVertexNormal(stream);
	}
	
	stream.readExpected("PTYP");
	
	var nrOfFaceTypeGroups = stream.readUint32();
	this.faceTypeGroups = new Array(nrOfFaceTypeGroups);
	
	for (i = 0; i < nrOfFaceTypeGroups; i++) {
		this.faceTypeGroups[i] = new MdxFaceTypeGroup(stream);
	}
	
	stream.readExpected("PCNT");
	
	var nrOfFaceGroups = stream.readUint32();
	this.faceGroups = new Array(nrOfFaceGroups);
	
	for (i = 0; i < nrOfFaceGroups; i++) {
		this.faceGroups[i] = new MdxFaceGroup(stream);
	}
	
	stream.readExpected("PVTX");
	
	var totalNrOfIndexes = stream.readUint32();
	var totalNrOfFaces = totalNrOfIndexes / 3;
	this.faces = new Array(totalNrOfFaces);
	
	for (i = 0; i < totalNrOfFaces; i++) {
		this.faces[i] = new MdxFace(stream);
	}
	
	stream.readExpected("GNDX");
	
	var nrOfVertexGroups = stream.readUint32();
	this.vertexGroups = new Array(nrOfVertexGroups);
	
	for (i = 0; i < nrOfVertexGroups; i++) {
		this.vertexGroups[i] = new MdxVertexGroup(stream);
	}
	
	stream.readExpected("MTGC");
	
	var nrOfMatrixGroups = stream.readUint32();
	this.matrixGroups = new Array(nrOfMatrixGroups);
	
	for (i = 0; i < nrOfMatrixGroups; i++) {
		this.matrixGroups[i] = new MdxMatrixGroup(stream);
	}
	
	stream.readExpected("MATS");
	
	var nrOfMatrixIndexes = stream.readUint32();
	this.matrixIndexes = new Array(nrOfMatrixIndexes);
	
	for (i = 0; i < nrOfMatrixIndexes; i++) {
		this.matrixIndexes[i] = new MdxMatrixIndex(stream);
	}
	
	this.materialId = stream.readUint32();
	this.selectionGroup = stream.readUint32();
	this.selectionFlags = stream.readUint32();
	this.boundsRadius = stream.readFloat32();
	this.minimumExtent = stream.readFloat32Array(3);
	this.maximumExtent = stream.readFloat32Array(3);
	
	var nrOfExtents = stream.readUint32();
	this.extents = new Array(nrOfExtents);
	
	for (i = 0; i < nrOfExtents; i++) {
		this.extents[i] = new MdxExtent(stream);
	}
	
	stream.readExpected("UVAS");
	
	var nrOfTextureVertexGroups = stream.readUint32();
	
	stream.readExpected("UVBS");
	
	var nrOfVertexTexturePositions = stream.readUint32();
	this.vertexTexturePositions = new Array(nrOfVertexTexturePositions);
	
	for (i = 0; i < nrOfVertexTexturePositions; i++) {
		this.vertexTexturePositions[i] = new MdxVertexTexturePosition(stream);
	}
	
	if (typeof debug !== 'undefined') {
		console.log("\t\tvertexPositions = " + this.vertexPositions.length + " [...]");
		console.log("\t\tvertexNormals = " + this.vertexNormals.length + " [...]");
		console.log("\t\tfaceTypeGroups = " + this.faceTypeGroups.length + " [...]");
		console.log("\t\tfaceGroups = " + this.faceGroups.length + " [...]");
		console.log("\t\tfaces = " + this.faces.length + " [...]");
		console.log("\t\tvertexGroups = " + this.vertexGroups.length + " [...]");
		console.log("\t\tmatrixGroups = " + this.matrixGroups.length + " [...]");
		console.log("\t\tmatrixIndexes = " + this.matrixIndexes.length + " [...]");
		console.log("\t\tmaterialId = " + this.materialId);
		console.log("\t\tselectionGroup = " + this.selectionGroup);
		console.log("\t\tselectionFlags = " + this.selectionFlags);
		console.log("\t\tboundsRadius = " + this.boundsRadius);
		console.log("\t\tminimumExtent = " + this.minimumExtent);
		console.log("\t\tmaximumExtent = " + this.maximumExtent);
		console.log("\t\textents = " + this.extents.length + " [...]");
		console.log("\t\tvertexTexturePositions = " + this.vertexTexturePositions.length + " [...]");
	}
	
	var array = new Float32Array(this.vertexPositions.length * 8);
	var index = new Uint16Array(this.faces.length * 3);
	
	for (i = 0, j = 0; i < this.vertexPositions.length; i++, j += 8) {
		var position = this.vertexPositions[i].position;
		var normal = this.vertexNormals[i].normal;
		var texcoord = this.vertexTexturePositions[i].texturePosition;
		
		array[j] = position[0];
		array[j + 1] = position[1];
		array[j + 2] = position[2];
		
		array[j + 3] = normal[0];
		array[j + 4] = normal[1];
		array[j + 5] = normal[2];
		
		array[j + 6] = texcoord[0];
		array[j + 7] = texcoord[1];
	}
	
	for (i = 0, j = 0; i < this.faces.length; i++, j += 3) {
		var face = this.faces[i];
		
		index[j] = face.index1;
		index[j + 1] = face.index2;
		index[j + 2] = face.index3;
	}
	
	this.buffers = {};
	this.buffers.array = Gl.createBuffer();
	this.buffers.index = Gl.createBuffer();
	
	Gl.bindBuffer(Gl.ARRAY_BUFFER, this.buffers.array);
	Gl.bufferData(Gl.ARRAY_BUFFER, array, Gl.STATIC_DRAW);
	this.buffers.array.length = this.vertexPositions.length * 8;
	
	Gl.bindBuffer(Gl.ELEMENT_ARRAY_BUFFER, this.buffers.index);
	Gl.bufferData(Gl.ELEMENT_ARRAY_BUFFER, index, Gl.STATIC_DRAW);
	this.buffers.index.length = this.faces.length * 3;
}


MdxGeoset.prototype = {
	/// method Geoset#draw
	/// Desc Draws the geoset
	draw : function Mdx(program) {
		var attributes = program.attributes;
		
		Gl.bindBuffer(Gl.ARRAY_BUFFER, this.buffers.array);
		Gl.vertexAttribPointer(attributes.in_vertex, 3, Gl.FLOAT, false, 32, 0);
		Gl.vertexAttribPointer(attributes.in_normal, 3, Gl.FLOAT, false, 32, 12);
		Gl.vertexAttribPointer(attributes.in_texcoord, 2, Gl.FLOAT, false, 32, 24);
		
		Gl.bindBuffer(Gl.ELEMENT_ARRAY_BUFFER, this.buffers.index);
		Gl.drawElements(Gl.TRIANGLES, this.buffers.index.length, Gl.UNSIGNED_SHORT, 0);
	}
};

/// class GeosetAnimation
/// Desc ?
/// Uses class GeosetAlpha
/// Uses class GeosetColor
function MdxGeosetAnimation(stream) {
	var i;
	
	this.alpha = stream.readUint32();
	this.flags = stream.readFloat32();
	this.color = stream.readFloat32Array(3);
	this.geosetId = stream.readUint32();
	
	if (typeof debug !== 'undefined') {
		console.log("\t\talpha = " + this.alpha);
		console.log("\t\tflags = " + this.flags);
		console.log("\t\tcolor = " + this.color);
		console.log("\t\tgeosetId = " + this.geosetId);
	}
	
	for (i = 0; i < 2; i++) {
		var token = stream.read(4);
		
		if (token === "KGAO") {
			if (typeof debug !== 'undefined') {
				console.log("\t\tgeosetAlpha");
			}
			
			this.geosetAlpha = new MdxGeosetAlpha(stream);
		} else if (token === "KGAC") {
			if (typeof debug !== 'undefined') {
				console.log("\t\tgeosetColor");
			}
			
			this.geosetColor = new MdxGeosetColor(stream);
		} else {
			stream.skip(-4);
		}
	}
}

/// class Bone
/// Desc ?
/// Uses class Node
function MdxBone(stream) {
	
}

/// class Light
/// Desc ?
/// Uses class Node
/// Uses class LightVisibility
/// Uses class LightColor
/// Uses class LightIntensity
/// Uses class LightAmbientColor
/// Uses class LightAmbientIntensity
function MdxLight(stream) {
	
}

/// class Helper
/// Desc ?
/// Uses class Node
function MdxHelper(stream) {
	
}

/// class Attachment
/// Desc ?
/// Uses class Node
/// Uses class AttachmentVisibility
function MdxAttachment(stream) {
	
}

/// class PivotPoint
/// Desc ?
function MdxPivotPoint(stream) {
	this.position = stream.readFloat32Array(3);
}

/// class ParticleEmitter
/// Desc ?
/// Uses class Node
/// Uses class ParticleEmitterVisibility
function MdxParticleEmitter(stream) {
	
}

/// class ParticleEmitter2
/// Desc ?
/// Uses class Node
/// Uses class ParticleEmitter2Visibility
/// Uses class ParticleEmitter2EmissionRate
/// Uses class ParticleEmitter2Width
/// Uses class ParticleEmitter2Length
/// Uses class ParticleEmitter2Speed
function MdxParticleEmitter2(stream) {
	
}

/// class RibbonEmitter
/// Desc ?
/// Uses class Node
/// Uses class RibbonEmitterVisibility
/// Uses class RibbonEmitterHeightAbove
/// Uses class RibbonEmitterHeightBelow
function MdxRibbonEmitter(stream) {
	
}

/// class Track
/// Desc ?
function MdxTrack(stream) {
	this.time = stream.readUint32();
}

/// class EventObject
/// Desc ?
/// Uses class Node
/// Uses class Tracks
function MdxEventObject(stream) {
	
}

/// class Camera
/// Desc ?
/// Uses class CameraPositionTranslation
/// Uses class CameraTargetTranslation
function MdxCamera(stream) {
	
}

/// class CollisionShape
/// Desc ?
/// Uses class Node
/// Uses class Vertex
function MdxCollisionShape(stream) {
	
}