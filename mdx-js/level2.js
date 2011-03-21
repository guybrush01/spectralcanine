/// class TranslationTrack
/// Desc ?
function TranslationTrack (stream, interpolationType) {
	this.time = stream.readUint32();
	this.translation = stream.readFloat32Array(3);
	
	if (interpolation > 1) {
		this.inTan = stream.readFloat32Array(3);
		this.outTan = stream.readFloat32Array(3);
	}
}
    
/// class RotationTrack
/// Desc ?
function RotationTrack (stream, interpolationType) {
	this.time = stream.readUint32();
	this.rotation = stream.readFloat32Array(4);
	
	if (interpolation > 1) {
		this.inTan = stream.readFloat32Array(4);
		this.outTan = stream.readFloat32Array(4);
	}
}

/// class ScalingTrack
/// Desc ?
function ScalingTrack (stream, interpolationType) {
	this.time = stream.readUint32();
	this.scalling = stream.readFloat32Array(3);
	
	if (interpolationType > 1) {
		this.inTan = stream.readFloat32Array(3);
		this.outTan = stream.readFloat32Array(3);
	}
}

/// class AlphaTrack
/// Desc ?
function AlphaTrack (stream, interpolationType) {
	this.time = stream.readUint32();
	this.alpha = stream.readFloat32();
	
	if (interpolationType > 1) {
		this.inTan = stream.readFloat32();
		this.outTan = stream.readFloat32();
	}
}

/// class TextureIdTrack
/// Desc ?
function TextureIdTrack (stream, interpolationType) {
	this.time = stream.readUint32();
	this.textureId = stream.readUint32();
	
	if (interpolationType > 1) {
		this.inTan = stream.readFloat32();
		this.outTan = stream.readFloat32();
	}
}

/// class ColorTrack
/// Desc ?
function ColorTrack (stream, interpolationType) {
	this.time = stream.readUint32();
	this.color = stream.readFloat32Array(3);
	
	if (interpolationType > 1) {
		this.inTan = stream.readFloat32Array(3);
		this.outTan = stream.readFloat32Array(3);
	}
}

/// class Sequence
/// Desc ?
function Sequence (stream) {
	this.name = stream.read(80);
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
function GlobalSequence (stream) {
	this.duration = stream.readUint32();
	
	if (typeof debug !== 'undefined') {
		console.log("\t\tduration = " + this.duration);
	}
}

/// class Texture
/// Desc ?
function Texture (stream) {
	this.replaceableId = stream.readUint32();
	this.fileName = stream.read(260);
	this.flags = stream.readUint32();
	
	if (typeof debug !== 'undefined') {
		console.log("\t\treplaceableId = " + this.replaceableId);
		console.log("\t\tfileName = " + this.fileName);
		console.log("\t\tflags = " + this.flags);
	}
}

/// class Layer
/// Desc ?
/// Uses class MaterialAlpha
/// Uses class MaterialTextureId
function Layer (stream) {
	var inclusiveSize = stream.readUint32();
	this.filterMode = stream.readUint32();
	this.shadingFlags = stream.readUint32();
	this.textureId = stream.readUint32();
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
		for (var i = 0; i < 2; i++) {
			var token = stream.read(4);
			
			if (token == "KMTA") {
				if (typeof debug !== 'undefined') {
					console.log("\t\t\t\tmaterialAlpha");
				}
				
				this.materialAlpha = new MaterialAlpha(stream);
			} else if (token == "KMTF") {
				if (typeof debug !== 'undefined') {
					console.log("\t\t\t\tmaterialTextureId");
				}
				
				this.materialTextureId = new MaterialTextureId(stream);
			} else {
				stream.skip(-4);
			}
		}
	}
}

/// class Material
/// Desc ?
/// Uses class LayerChunk
function Material (stream) {
	this.priorityPlane = stream.readUint32();
	this.flags = stream.readUint32();
	var token = stream.read(4);
	
	if (typeof debug !== 'undefined') {
		console.log("\t\tpriorityPlane = " + this.priorityPlane);
		console.log("\t\tflags = " + this.flags);
	}
	
	if (token == "LAYS") {
		if (typeof debug !== 'undefined') {
			console.log("\t\tlayerChunk");
		}
		
		this.layerChunk = new LayerChunk(stream);
	} else {
		stream.skip(-4);
	}
}

/// class TextureAnimation
/// Desc ?
/// Uses class TextureTranslation
/// Uses class TextureRotation
/// Uses class TextureScaling
function TextureAnimation (stream) {
	
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
function Geoset (stream) {
	stream.readExpected("VRTX");
	
	var nrOfVertexPositions = stream.readUint32();
	this.vertexPositions = Array(nrOfVertexPositions);
	
	for (var i = 0; i < nrOfVertexPositions; i++) {
		this.vertexPositions[i] = new VertexPosition(stream);
	}
	
	stream.readExpected("NRMS");
	
	var nrOfVertexNormals = stream.readUint32();
	this.vertexNormals = Array(nrOfVertexNormals);
	
	for (var i = 0; i < nrOfVertexNormals; i++) {
		this.vertexNormals[i] = new VertexNormal(stream);
	}
	
	stream.readExpected("PTYP");
	
	var nrOfFaceTypeGroups = stream.readUint32();
	this.faceTypeGroups = Array(nrOfFaceTypeGroups);
	
	for (var i = 0; i < nrOfFaceTypeGroups; i++) {
		this.faceTypeGroups[i] = new FaceTypeGroup(stream);
	}
	
	stream.readExpected("PCNT");
	
	var nrOfFaceGroups = stream.readUint32();
	this.faceGroups = Array(nrOfFaceGroups);
	
	for (var i = 0; i < nrOfFaceGroups; i++) {
		this.faceGroups[i] = new FaceGroup(stream);
	}
	
	stream.readExpected("PVTX");
	
	var totalNrOfIndexes = stream.readUint32();
	var totalNrOfFaces = totalNrOfIndexes / 3;
	this.faces = Array(totalNrOfFaces);
	
	for (var i = 0; i < totalNrOfFaces; i++) {
		this.faces[i] = new Face(stream);
	}
	
	stream.readExpected("GNDX");
	
	var nrOfVertexGroups = stream.readUint32();
	this.vertexGroups = Array(nrOfVertexGroups);
	
	for (var i = 0; i < nrOfVertexGroups; i++) {
		this.vertexGroups[i] = new VertexGroup(stream);
	}
	
	stream.readExpected("MTGC");
	
	var nrOfMatrixGroups = stream.readUint32();
	this.matrixGroups = Array(nrOfMatrixGroups);
	
	for (var i = 0; i < nrOfMatrixGroups; i++) {
		this.matrixGroups[i] = new MatrixGroup(stream);
	}
	
	stream.readExpected("MATS");
	
	var nrOfMatrixIndexes = stream.readUint32();
	this.matrixIndexes = Array(nrOfMatrixIndexes);
	
	for (var i = 0; i < nrOfMatrixIndexes; i++) {
		this.matrixIndexes[i] = new MatrixIndex(stream);
	}
	
	this.materialId = stream.readUint32();
	this.selectionGroup = stream.readUint32();
	this.selectionFlags = stream.readUint32();
	this.boundsRadius = stream.readFloat32();
	this.minimumExtent = stream.readFloat32Array(3);
	this.maximumExtent = stream.readFloat32Array(3);
	
	var nrOfExtents = stream.readUint32();
	this.extents = Array(nrOfExtents);
	
	for (var i = 0; i < nrOfExtents; i++) {
		this.extents[i] = new Extent(stream);
	}
	
	stream.readExpected("UVAS");
	
	var nrOfTextureVertexGroups = stream.readUint32();
	
	stream.readExpected("UVBS");
	
	var nrOfVertexTexturePositions = stream.readUint32();
	this.vertexTexturePositions = Array(nrOfVertexTexturePositions);
	
	for (var i = 0; i < nrOfVertexTexturePositions; i++) {
		this.vertexTexturePositions[i] = new VertexTexturePosition(stream);
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
	
	for (var i = 0, j = 0; i < this.vertexPositions.length; i++, j += 8) {
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
	
	for (var i = 0, j = 0; i < this.faces.length; i++, j += 3) {
		var face = this.faces[i];
		
		index[j] = face[0];
		index[j + 1] = face[1];
		index[j + 2] = face[2];
	}
	
	this.buffers = new Object;
	this.buffers.array = gl.createBuffer();
	this.buffers.index = gl.createBuffer();
	
	gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.array);
	gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
	this.buffers.array.length = this.vertexPositions.length * 8;
	
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.index);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, index, gl.STATIC_DRAW);
	this.buffers.index.length = this.faces.length * 3;
}


Geoset.prototype = {
	/// method Geoset#draw
	/// Desc Draws the geoset using an attribute locations array in the format of [vertex, normal, texcoord]
	draw : function (attribs) {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.array);
		gl.vertexAttribPointer(attribs[0], 3, gl.FLOAT, false, 0, 0);
	
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.array);
		gl.vertexAttribPointer(attribs[1], 3, gl.FLOAT, false, 12, 0);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.array);
		gl.vertexAttribPointer(attribs[2], 2, gl.FLOAT, false, 24, 0);
		
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.index);
		gl.drawElements(gl.TRIANGLES, this.buffers.index.length, gl.UNSIGNED_SHORT, 0);
	}
}

/// class GeosetAnimation
/// Desc ?
/// Uses class GeosetAlpha
/// Uses class GeosetColor
function GeosetAnimation (stream) {
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
	
	for (var i = 0; i < 2; i++) {
		var token = stream.read(4);
		
		if (token == "KGAO") {
			if (typeof debug !== 'undefined') {
				console.log("\t\tgeosetAlpha");
			}
			
			this.geosetAlpha = new GeosetAlpha(stream);
		} else if (token == "KGAC") {
			if (typeof debug !== 'undefined') {
				console.log("\t\tgeosetColor");
			}
			
			this.geosetColor = new GeosetColor(stream);
		} else {
			stream.skip(-4);
		}
	}
}

/// class Bone
/// Desc ?
/// Uses class Node
function Bone (stream) {
	
}

/// class Light
/// Desc ?
/// Uses class Node
/// Uses class LightVisibility
/// Uses class LightColor
/// Uses class LightIntensity
/// Uses class LightAmbientColor
/// Uses class LightAmbientIntensity
function Light (stream) {
	
}

/// class Helper
/// Desc ?
/// Uses class Node
function Helper (stream) {
	
}

/// class Attachment
/// Desc ?
/// Uses class Node
/// Uses class AttachmentVisibility
function Attachment (stream) {
	
}

/// class PivotPoint
/// Desc ?
function PivotPoint (stream) {
	this.position = stream.readFloat32Array(3);
}

/// class ParticleEmitter
/// Desc ?
/// Uses class Node
/// Uses class ParticleEmitterVisibility
function ParticleEmitter (stream) {
	
}

/// class ParticleEmitter2
/// Desc ?
/// Uses class Node
/// Uses class ParticleEmitter2Visibility
/// Uses class ParticleEmitter2EmissionRate
/// Uses class ParticleEmitter2Width
/// Uses class ParticleEmitter2Length
/// Uses class ParticleEmitter2Speed
function ParticleEmitter2 (stream) {
	
}

/// class RibbonEmitter
/// Desc ?
/// Uses class Node
/// Uses class RibbonEmitterVisibility
/// Uses class RibbonEmitterHeightAbove
/// Uses class RibbonEmitterHeightBelow
function RibbonEmitter (stream) {
	
}

/// class Track
/// Desc ?
function Track (stream) {
	this.time = stream.readUint32();
}

/// class EventObject
/// Desc ?
/// Uses class Node
/// Uses class Tracks
function EventObject (stream) {
	
}

/// class Camera
/// Desc ?
/// Uses class CameraPositionTranslation
/// Uses class CameraTargetTranslation
function Camera (stream) {
	
}

/// class CollisionShape
/// Desc ?
/// Uses class Node
/// Uses class Vertex
function CollisionShape (stream) {
	
}