/// class VertexPosition
/// Desc A vector describing a 3D vertex
function VertexPosition (stream) {
	this.position = stream.readFloat32Array(3);
}

/// class VertexNormal
/// Desc A vector describing a 3D normal
function VertexNormal (stream) {
	this.normal = stream.readFloat32Array(3);
}

/// class FaceTypeGroup
/// Desc ?
function FaceTypeGroup (stream) {
	this.faceType = stream.readUint32();
}

/// class FaceGroup
/// Desc ?
function FaceGroup (stream) {
	this.nrOfIndexes = stream.readUint32();
}

/// class Face
/// Desc A triplet of integers that describe indices to vertices that form a triangle
function Face (stream) {
	this.index1 = stream.readUint16();
	this.index2 = stream.readUint16();
	this.index3 = stream.readUint16();
}

/// class VertexGroup
/// Desc ?
function VertexGroup (stream) {
	this.matrixGroup = stream.readUint8();
}

/// class MatrixGroup
/// Desc ?
function MatrixGroup (stream) {
	this.matrixGroupSize = stream.readUint32();
}

/// class MatrixIndex
/// Desc ?
function MatrixIndex (stream) {
	this.matrixIndex = stream.readUint32();
}

/// class Extent
/// Desc ?
function Extent (stream) {
	this.boundsRadius = stream.readFloat32();
	this.minimumExtent = stream.readFloat32Array(3);
	this.maximumExtent = stream.readFloat32Array(3);
}

/// class VertexTexturePosition
/// Desc A vector describing a 2D point in a texture
function VertexTexturePosition (stream) {
	this.texturePosition = stream.readFloat32Array(2);
}