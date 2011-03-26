/// class VertexPosition
/// Desc A vector describing a 3D vertex
function MdxVertexPosition(stream) {
	this.position = stream.readFloat32Array(3);
}

/// class VertexNormal
/// Desc A vector describing a 3D normal
function MdxVertexNormal(stream) {
	this.normal = stream.readFloat32Array(3);
}

/// class FaceTypeGroup
/// Desc ?
function MdxFaceTypeGroup(stream) {
	this.faceType = stream.readUint32();
}

/// class FaceGroup
/// Desc ?
function MdxFaceGroup(stream) {
	this.nrOfIndexes = stream.readUint32();
}

/// class Face
/// Desc A triplet of integers that describe indices to vertices that form a triangle
function MdxFace(stream) {
	this.index1 = stream.readUint16();
	this.index2 = stream.readUint16();
	this.index3 = stream.readUint16();
}

/// class VertexGroup
/// Desc ?
function MdxVertexGroup(stream) {
	this.matrixGroup = stream.readUint8();
}

/// class MatrixGroup
/// Desc ?
function MdxMatrixGroup(stream) {
	this.matrixGroupSize = stream.readUint32();
}

/// class MatrixIndex
/// Desc ?
function MdxMatrixIndex(stream) {
	this.matrixIndex = stream.readUint32();
}

/// class Extent
/// Desc ?
function MdxExtent(stream) {
	this.boundsRadius = stream.readFloat32();
	this.minimumExtent = stream.readFloat32Array(3);
	this.maximumExtent = stream.readFloat32Array(3);
}

/// class VertexTexturePosition
/// Desc A vector describing a 2D point in a texture
function MdxVertexTexturePosition(stream) {
	this.texturePosition = stream.readFloat32Array(2);
}