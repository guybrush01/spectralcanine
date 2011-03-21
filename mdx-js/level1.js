/// class GeosetTranslation
/// Desc ?
/// Id KTGR
/// Uses class TranslationTrack
function GeosetTranslation (stream) {
	/*
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.translationTracks = Array(nrOfTracks);

	for (var i = 0; i < nrOfTracks; i++) {
		this.translationTracks[i] = new TranslationTrack(stream, this.interpolationType);
	}
	*/
}

/// class GeosetRotation
/// Desc ?
/// Id KGRT
/// Uses class RotationTrack
function GeosetRotation (stream) {
	/*
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.rotationTracks = Array(nrOfTracks);

	for (var i = 0; i < nrOfTracks; i++) {
		this.rotationTracks[i] = new RotationTrack(stream, this.interpolationType);
	}
	*/
}

/// class GeosetScaling
/// Desc ?
/// Id KGSC
/// Uses class ScalingTrack
function GeosetScaling (stream) {
	/*
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.scalingTracks = Array(nrOfTracks);
	
	for (var i = 0; i < nrOfTracks; i++) {
		this.scalingTracks[i] = new ScalingTrack(stream, this.interpolationType);
	}
	*/
}

/// class GeosetAlpha
/// Desc ?
/// Id KGAO
/// Uses class AlphaTrack
function GeosetAlpha (stream) {
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.alphaTracks = Array(nrOfTracks);

	for (var i = 0; i < nrOfTracks; i++) {
		this.alphaTracks[i] = new AlphaTrack(stream, this.interpolationType);
	}
	
	if (typeof debug !== 'undefined') {
		console.log("\t\t\tinterpolationType = " + this.interpolationType);
		console.log("\t\t\tglobalSequenceId = " + this.globalSequenceId);
		console.log("\t\t\talphaTracks = " + this.alphaTracks.length + " [...]");
	}
}

/// class GeosetColor
/// Desc ?
/// Id KGAC
/// Uses class ColorTrack
function GeosetColor (stream) {
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.colorTracks = Array(nrOfTracks);

	for (var i = 0; i < nrOfTracks; i++) {
		this.colorTracks[i] = new ColorTrack(stream, this.interpolationType);
	}
	
	if (typeof debug !== 'undefined') {
		console.log("\t\t\tinterpolationType = " + this.interpolationType);
		console.log("\t\t\tglobalSequenceId = " + this.globalSequenceId);
		console.log("\t\t\tcolorTracks = " + this.colorTracks.length + " [...]");
	}
}

/// class TextureTranslation
/// Desc ?
/// Id KTAT
/// Uses class TranslationTrack
function TextureTranslation (stream) {
	/*
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.translationTracks = Array(nrOfTracks);

	for (var i = 0; i < nrOfTracks; i++) {
		this.translationTracks[i] = new TranslationTrack(stream, this.interpolationType);
	}
	*/
}

/// class TextureRotation
/// Desc ?
/// Id KTAR
/// Uses class RotationTrack
function TextureRotation (stream) {
	/*
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.rotationTracks = Array(nrOfTracks);

	for (var i = 0; i < nrOfTracks; i++) {
		this.rotationTracks[i] = new RotationTrack(stream, this.interpolationType);
	}
	*/
}

/// class TextureScaling
/// Desc ?
/// Id KTAS
/// Uses class ScalingTrack
function TextureScaling (stream) {
	/*
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.scalingTracks = Array(nrOfTracks);
	
	for (var i = 0; i < nrOfTracks; i++) {
		this.scalingTracks[i] = new ScalingTrack(stream, this.interpolationType);
	}
	*/
}

/// class CameraPositionTranslation
/// Desc ?
/// Id KCTR
/// Uses class TranslationTrack
function CameraPositionTranslation (stream) {
	/*
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.translationTracks = Array(nrOfTracks);

	for (var i = 0; i < nrOfTracks; i++) {
		this.translationTracks[i] = new TranslationTrack(stream, this.interpolationType);
	}
	*/
}

/// class CameraTargetTranslation
/// Desc ?
/// Id KTTR
/// Uses class TranslationTrack
function CameraTargetTranslation (stream) {
	/*
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.translationTracks = Array(nrOfTracks);

	for (var i = 0; i < nrOfTracks; i++) {
		this.translationTracks[i] = new TranslationTrack(stream, this.interpolationType);
	}
	*/
}

/// class CameraRotation
/// Desc ?
/// Id KCRL
/// Uses class TranslationTrack
function CameraRotation (stream) {
	/*
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.rotationTracks = Array(nrOfTracks);

	for (var i = 0; i < nrOfTracks; i++) {
		this.rotationTracks[i] = new RotationTrack(stream, this.interpolationType);
	}
	*/
}

/// class MaterialTextureId
/// Desc ?
/// Id KMTF
/// Uses class ScalingTrack
function MaterialTextureId (stream) {
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.textureIdTracks = Array(nrOfTracks);

	for (var i = 0; i < nrOfTracks; i++) {
		this.textureIdTracks[i] = new TextureIdTrack(stream, this.interpolationType);
	}
	
	if (typeof debug !== 'undefined') {
		console.log("\t\t\t\t\tinterpolationType = " + this.interpolationType);
		console.log("\t\t\t\t\tglobalSequenceId = " + this.globalSequenceId);
		console.log("\t\t\t\t\ttextureIdTracks = " + this.textureIdTracks.length + " [...]");
	}
}

/// class MaterialAlpha
/// Desc ?
/// Id KMTA
/// Uses class ScalingTrack
function MaterialAlpha (stream) {
	var nrOfTracks = stream.readUint32();
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.alphaTracks = Array(nrOfTracks);
	
	for (var i = 0; i < nrOfTracks; i++) {
		this.alphaTracks[i] = new AlphaTrack(stream, this.interpolationType);
	}
	
	if (typeof debug !== 'undefined') {
		console.log("\t\t\t\t\tinterpolationType = " + this.interpolationType);
		console.log("\t\t\t\t\tglobalSequenceId = " + this.globalSequenceId);
		console.log("\t\t\t\t\talphaTracks = " + this.alphaTracks.length + " [...]");
	}
}

/// class AttachmentVisibility
/// Desc ?
/// Id KATV
/// Uses class ScalingTrack
function AttachmentVisibility (stream) {
	
}

/// class LightVisibility
/// Desc ?
/// Id KLAV
/// Uses class ScalingTrack
function LightVisibility (stream) {
	
}

/// class LightColor
/// Desc ?
/// Id KLAC
/// Uses class ScalingTrack
function LightColor (stream) {
	
}

/// class LightIntensity
/// Desc ?
/// Id KLAI
/// Uses class ScalingTrack
function LightIntensity (stream) {
	
}

/// class LightAmbientColor
/// Desc ?
/// Id KLBC
/// Uses class ScalingTrack
function LightAmbientColor (stream) {
	
}

/// class LightAmbientIntensity
/// Desc ?
/// Id KLBI
/// Uses class ScalingTrack
function LightAmbientIntensity (stream) {
	
}

/// class ParticleEmitterVisibility
/// Desc ?
/// Id KPEV
/// Uses class ScalingTrack
function ParticleEmitterVisibility (stream) {
	
}

/// class ParticleEmitter2Visibility
/// Desc ?
/// Id KP2V
/// Uses class ScalingTrack
function ParticleEmitter2Visibility (stream) {
	
}

/// class ParticleEmitter2EmissionRate
/// Desc ?
/// Id KP2E
/// Uses class ScalingTrack
function ParticleEmitter2EmissionRate (stream) {
	
}

/// class ParticleEmitter2Width
/// Desc ?
/// Id KP2W
/// Uses class ScalingTrack
function ParticleEmitter2Width (stream) {
	
}

/// class ParticleEmitter2Length
/// Desc ?
/// Id KP2N
/// Uses class ScalingTrack
function ParticleEmitter2Length (stream) {
	
}

/// class ParticleEmitter2Speed
/// Desc ?
/// Id KP2S
/// Uses class ScalingTrack
function ParticleEmitter2Speed (stream) {
	
}

/// class RibbonEmitterVisibility
/// Desc ?
/// Id KRVS
/// Uses class ScalingTrack
function RibbonEmitterVisibility (stream) {
	
}

/// class RibbonEmitterHeightAbove
/// Desc ?
/// Id KRHA
/// Uses class ScalingTrack
function RibbonEmitterHeightAbove (stream) {
	
}

/// class RibbonEmitterHeightBelow
/// Desc ?
/// Id KRHB
/// Uses class ScalingTrack
function RibbonEmitterHeightBelow (stream) {
	
}

/// class Node
/// Desc ?
/// Id ?
/// Uses class GeosetTranslation
/// Uses class GeosetRotation
/// Uses class GeosetScaling
function Node (stream) {
	
}

/// class VersionChunk
/// Desc ?
/// Id VERS
function VersionChunk (stream, size) {
	console.log("VersionChunk...");
	
	this.version = stream.readUint32();
	
	if (typeof debug !== 'undefined') {
		console.log("\tversion = " + this.version);
	}
	
	console.log("OK");
}

/// class ModelChunk
/// Desc ?
/// Id MODL
function ModelChunk (stream, size) {
	console.log("ModelChunk...");
	
	this.name = stream.read(80);
	this.animationFileName = stream.read(260);
	this.boundsRadius = stream.readFloat32();
	this.minimumExtent = stream.readFloat32Array(3);
	this.maximumExtent = stream.readFloat32Array(3);
	this.blendTime = stream.readUint32();
	
	if (typeof debug !== 'undefined') {
		console.log("\tname = " + this.name);
		console.log("\tanimationFileName = " + this.animationFileName);
		console.log("\tboundsRadius = " + this.boundsRadius);
		console.log("\tminimumExtent = " + this.minimumExtent);
		console.log("\tmaximumExtent = " + this.maximumExtent);
		console.log("\tblendTime = " + this.blendTime);
	}
	
	console.log("OK");
}

/// class SequenceChunk
/// Desc ?
/// Id SEQS
/// Uses class Sequence
function SequenceChunk (stream, size) {
	console.log("SequenceChunk...");
	
	var nrOfSequences = size / 132;
	this.sequences = Array(nrOfSequences);
	
	for (var i = 0; i < nrOfSequences; i++) {
		if (typeof debug !== 'undefined') {
			console.log("\tsequence " + i);
		}
		
		this.sequences[i] = new Sequence(stream);
	}
	
	console.log("OK");
}

/// class GlobalSequenceChunk
/// Desc ?
/// Id GLBS
/// Uses class GlobalSequence
function GlobalSequenceChunk (stream, size) {
	console.log("GlobalSequenceChunk...");
	
	var nrOfGlobalSequences = size / 4;
	this.globalSequences = Array(nrOfGlobalSequences);
	
	for (var i = 0; i < nrOfGlobalSequences; i++) {
		if (typeof debug !== 'undefined') {
			console.log("\tglobal sequence " + i);
		}
		
		this.globalSequences[i] = new GlobalSequence(stream);
	}
	
	console.log("OK");
}

/// class TextureChunk
/// Desc ?
/// Id TEXS
/// Uses class Texture
function TextureChunk (stream, size) {
	console.log("TextureChunk...");
	
	var nrOfTextures = size / 268;
	this.textures = Array(nrOfTextures);
	
	for (var i = 0; i < nrOfTextures; i++) {
		if (typeof debug !== 'undefined') {
			console.log("\ttexture " + i);
		}
		
		this.textures[i] = new Texture(stream);
	}
	
	console.log("OK");
}

/// class LayerChunk
/// Desc ?
/// Id LAYS
/// Uses class Layer
function LayerChunk (stream, size) {
	var nrOfLayers = stream.readUint32();
	this.layers = Array(nrOfLayers);
	
	for (var i = 0; i < nrOfLayers; i++) {
		if (typeof debug !== 'undefined') {
			console.log("\t\t\tlayer " + i);
		}
		
		this.layers[i] = new Layer(stream);
	}
}

/// class MaterialChunk
/// Desc ?
/// Id MATS
/// Uses class Material
function MaterialChunk (stream, size) {
	console.log("MaterialChunk...");
	
	var inclusiveSize = 0;
	var totalInclusiveSize = 0;
	this.materials = Array();
	
	while (totalInclusiveSize != size) {
		inclusiveSize = stream.readUint32();
		totalInclusiveSize += inclusiveSize;
		
		if (typeof debug !== 'undefined') {
			console.log("\tmaterial " + this.materials.length);
		}
		
		this.materials[this.materials.length] = new Material(stream);
	}
	
	console.log("OK");
}

/// class TextureAnimationChunk
/// Desc ?
/// Id TXAN
/// Uses class TextureAnimation
function TextureAnimationChunk (stream, size) {
	console.log("TextureAnimationChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class GeosetChunk
/// Desc ?
/// Id GEOS
/// Uses class Geoset
function GeosetChunk (stream, size) {
	console.log("GeosetChunk...");
	
	var inclusiveSize = 0;
	var totalInclusiveSize = 0;
	this.geosets = Array();
	
	while (totalInclusiveSize != size) {
		inclusiveSize = stream.readUint32();
		totalInclusiveSize += inclusiveSize;
		
		if (typeof debug !== 'undefined') {
			console.log("\tgeoset " + this.geosets.length);
		}
		
		this.geosets[this.geosets.length] = new Geoset(stream);
	}
	
	console.log("OK");
}

/// class GeosetAnimationChunk
/// Desc ?
/// Id GEOA
/// Uses class GeosetAnimation
function GeosetAnimationChunk (stream, size) {
	console.log("GeosetAnimationChunk...");
	
	var inclusiveSize = 0;
	var totalInclusiveSize = 0;
	this.geosetAnimations = Array();
	
	while (totalInclusiveSize != size) {
		inclusiveSize = stream.readUint32();
		totalInclusiveSize += inclusiveSize;
		
		if (typeof debug !== 'undefined') {
			console.log("\tgeosetAnimation " + this.geosetAnimations.length);
		}
		
		this.geosetAnimations[this.geosetAnimations.length] = new GeosetAnimation(stream);
	}
	
	console.log("OK");
}

/// class BoneChunk
/// Desc ?
/// Id BONE
/// Uses class Bone
function BoneChunk (stream, size) {
	console.log("BoneChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class LightChunk
/// Desc ?
/// Id LITE
/// Uses class Light
function LightChunk (stream, size) {
	console.log("LightChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class HelperChunk
/// Desc ?
/// Id HELP
/// Uses class Helper
function HelperChunk (stream, size) {
	console.log("HelperChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class AttachmentChunk
/// Desc ?
/// Id ATCH
/// Uses class Attachment
function AttachmentChunk (stream, size) {
	console.log("AttachmentChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class PivotPointChunk
/// Desc ?
/// Id PIVT
/// Uses class PivotPoint
function PivotPointChunk (stream, size) {
	console.log("PivotPointChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class ParticleEmitterChunk
/// Desc ?
/// Id PREM
/// Uses class ParticleEmitter
function ParticleEmitterChunk (stream, size) {
	console.log("ParticleEmitterChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class ParticleEmitter2Chunk
/// Desc ?
/// Id PRE2
/// Uses class ParticleEmitter2
function ParticleEmitter2Chunk (stream, size) {
	console.log("ParticleEmitter2Chunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class RibbonEmitterChunk
/// Desc ?
/// Id RIBB
/// Uses class RibbonEmitter
function RibbonEmitterChunk (stream, size) {
	console.log("RibbonEmitterChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class Tracks
/// Desc ?
/// Id KEVT
/// Uses class Track
function Tracks (stream, size) {
	
}

/// class EventObjectChunk
/// Desc ?
/// Id EVTS
/// Uses class EventObject
function EventObjectChunk (stream, size) {
	console.log("EventObjectChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class CameraChunk
/// Desc ?
/// Id CAMS
/// Uses class Camera
function CameraChunk (stream, size) {
	console.log("CameraChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}

/// class CollisionShapeChunk
/// Desc ?
/// Id CLID
/// Uses class CollisionShape
function CollisionShapeChunk (stream, size) {
	console.log("CollisionShapeChunk...");
	
	stream.skip(size);
	
	console.log("OK");
}