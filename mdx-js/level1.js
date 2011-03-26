/// class GeosetTranslation
/// Desc ?
/// Id KTGR
/// Uses class TranslationTrack
function MdxGeosetTranslation(stream) {
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
function MdxGeosetRotation(stream) {
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
function MdxGeosetScaling(stream) {
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
function MdxGeosetAlpha(stream) {
	var nrOfTracks = stream.readUint32();
	var i;
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.alphaTracks = new Array(nrOfTracks);

	for (i = 0; i < nrOfTracks; i++) {
		this.alphaTracks[i] = new MdxAlphaTrack(stream, this.interpolationType);
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
function MdxGeosetColor(stream) {
	var nrOfTracks = stream.readUint32();
	var i;
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.colorTracks = new Array(nrOfTracks);

	for (i = 0; i < nrOfTracks; i++) {
		this.colorTracks[i] = new MdxColorTrack(stream, this.interpolationType);
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
function MdxTextureTranslation(stream) {
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
function MdxTextureRotation(stream) {
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
function MdxTextureScaling(stream) {
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
function MdxCameraPositionTranslation(stream) {
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
function MdxCameraTargetTranslation(stream) {
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
function MdxCameraRotation(stream) {
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
function MdxMaterialTextureId(stream) {
	var nrOfTracks = stream.readUint32();
	var i;
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.textureIdTracks = new Array(nrOfTracks);

	for (i = 0; i < nrOfTracks; i++) {
		this.textureIdTracks[i] = new MdxTextureIdTrack(stream, this.interpolationType);
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
function MdxMaterialAlpha(stream) {
	var nrOfTracks = stream.readUint32();
	var i;
	
	this.interpolationType = stream.readUint32();
	this.globalSequenceId = stream.readUint32();
	this.alphaTracks = new Array(nrOfTracks);
	
	for (i = 0; i < nrOfTracks; i++) {
		this.alphaTracks[i] = new MdxAlphaTrack(stream, this.interpolationType);
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
function MdxAttachmentVisibility(stream) {
	
}

/// class LightVisibility
/// Desc ?
/// Id KLAV
/// Uses class ScalingTrack
function MdxLightVisibility(stream) {
	
}

/// class LightColor
/// Desc ?
/// Id KLAC
/// Uses class ScalingTrack
function MdxLightColor(stream) {
	
}

/// class LightIntensity
/// Desc ?
/// Id KLAI
/// Uses class ScalingTrack
function MdxLightIntensity(stream) {
	
}

/// class LightAmbientColor
/// Desc ?
/// Id KLBC
/// Uses class ScalingTrack
function MdxLightAmbientColor(stream) {
	
}

/// class LightAmbientIntensity
/// Desc ?
/// Id KLBI
/// Uses class ScalingTrack
function MdxLightAmbientIntensity(stream) {
	
}

/// class ParticleEmitterVisibility
/// Desc ?
/// Id KPEV
/// Uses class ScalingTrack
function MdxParticleEmitterVisibility(stream) {
	
}

/// class ParticleEmitter2Visibility
/// Desc ?
/// Id KP2V
/// Uses class ScalingTrack
function MdxParticleEmitter2Visibility(stream) {
	
}

/// class ParticleEmitter2EmissionRate
/// Desc ?
/// Id KP2E
/// Uses class ScalingTrack
function MdxParticleEmitter2EmissionRate(stream) {
	
}

/// class ParticleEmitter2Width
/// Desc ?
/// Id KP2W
/// Uses class ScalingTrack
function MdxParticleEmitter2Width(stream) {
	
}

/// class ParticleEmitter2Length
/// Desc ?
/// Id KP2N
/// Uses class ScalingTrack
function MdxParticleEmitter2Length(stream) {
	
}

/// class ParticleEmitter2Speed
/// Desc ?
/// Id KP2S
/// Uses class ScalingTrack
function MdxParticleEmitter2Speed(stream) {
	
}

/// class RibbonEmitterVisibility
/// Desc ?
/// Id KRVS
/// Uses class ScalingTrack
function MdxRibbonEmitterVisibility(stream) {
	
}

/// class RibbonEmitterHeightAbove
/// Desc ?
/// Id KRHA
/// Uses class ScalingTrack
function MdxRibbonEmitterHeightAbove(stream) {
	
}

/// class RibbonEmitterHeightBelow
/// Desc ?
/// Id KRHB
/// Uses class ScalingTrack
function MdxRibbonEmitterHeightBelow(stream) {
	
}

/// class Node
/// Desc ?
/// Id ?
/// Uses class GeosetTranslation
/// Uses class GeosetRotation
/// Uses class GeosetScaling
function MdxNode(stream) {
	
}

/// class VersionChunk
/// Desc ?
/// Id VERS
function MdxVersionChunk(stream, size) {
	log("VersionChunk...");
	
	this.version = stream.readUint32();
	
	if (typeof debug !== 'undefined') {
		console.log("\tversion = " + this.version);
	}
	
	log("OK");
}

/// class ModelChunk
/// Desc ?
/// Id MODL
function MdxModelChunk(stream, size) {
	log("ModelChunk...");
	
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
	
	log("OK");
}

/// class SequenceChunk
/// Desc ?
/// Id SEQS
/// Uses class Sequence
function MdxSequenceChunk(stream, size) {
	log("SequenceChunk...");
	
	var nrOfSequences = size / 132;
	var i;
	
	this.sequences = new Array(nrOfSequences);
	
	for (i = 0; i < nrOfSequences; i++) {
		if (typeof debug !== 'undefined') {
			console.log("\tsequence " + i);
		}
		
		this.sequences[i] = new MdxSequence(stream);
	}
	
	log("OK");
}

/// class GlobalSequenceChunk
/// Desc ?
/// Id GLBS
/// Uses class GlobalSequence
function MdxGlobalSequenceChunk(stream, size) {
	log("GlobalSequenceChunk...");
	
	var nrOfGlobalSequences = size / 4;
	var i;
	
	this.globalSequences = new Array(nrOfGlobalSequences);
	
	for (i = 0; i < nrOfGlobalSequences; i++) {
		if (typeof debug !== 'undefined') {
			console.log("\tglobal sequence " + i);
		}
		
		this.globalSequences[i] = new MdxGlobalSequence(stream);
	}
	
	log("OK");
}

/// class TextureChunk
/// Desc ?
/// Id TEXS
/// Uses class Texture
function MdxTextureChunk(stream, size) {
	log("TextureChunk...");
	
	var nrOfTextures = size / 268;
	var i;
	
	this.textures = new Array(nrOfTextures);
	
	for (i = 0; i < nrOfTextures; i++) {
		if (typeof debug !== 'undefined') {
			console.log("\ttexture " + i);
		}
		
		this.textures[i] = new MdxTexture(stream);
	}
	
	log("OK");
}

/// class LayerChunk
/// Desc ?
/// Id LAYS
/// Uses class Layer
function MdxLayerChunk(stream, size) {
	var nrOfLayers = stream.readUint32();
	var i;
	
	this.layers = new Array(nrOfLayers);
	
	for (i = 0; i < nrOfLayers; i++) {
		if (typeof debug !== 'undefined') {
			console.log("\t\t\tlayer " + i);
		}
		
		this.layers[i] = new MdxLayer(stream);
	}
}

/// class MaterialChunk
/// Desc ?
/// Id MATS
/// Uses class Material
function MdxMaterialChunk(stream, size) {
	log("MaterialChunk...");
	
	var inclusiveSize = 0;
	var totalInclusiveSize = 0;
	this.materials = [];
	
	while (totalInclusiveSize !== size) {
		inclusiveSize = stream.readUint32();
		totalInclusiveSize += inclusiveSize;
		
		if (typeof debug !== 'undefined') {
			console.log("\tmaterial " + this.materials.length);
		}
		
		this.materials.push(new MdxMaterial(stream));
	}
	
	log("OK");
}

/// class TextureAnimationChunk
/// Desc ?
/// Id TXAN
/// Uses class TextureAnimation
function MdxTextureAnimationChunk(stream, size) {
	console.log("TextureAnimationChunk...");
	
	stream.skip(size);
	
	console.log("Oops, not impelemented yet");
}

/// class GeosetChunk
/// Desc ?
/// Id GEOS
/// Uses class Geoset
function MdxGeosetChunk(stream, size) {
	log("GeosetChunk...");
	
	var inclusiveSize = 0;
	var totalInclusiveSize = 0;
	this.geosets = [];
	
	while (totalInclusiveSize !== size) {
		inclusiveSize = stream.readUint32();
		totalInclusiveSize += inclusiveSize;
		
		if (typeof debug !== 'undefined') {
			console.log("\tgeoset " + this.geosets.length);
		}
		
		this.geosets[this.geosets.length] = new MdxGeoset(stream);
	}
	
	log("OK");
}

/// class GeosetAnimationChunk
/// Desc ?
/// Id GEOA
/// Uses class GeosetAnimation
function MdxGeosetAnimationChunk(stream, size) {
	log("GeosetAnimationChunk...");
	
	var inclusiveSize = 0;
	var totalInclusiveSize = 0;
	this.geosetAnimations = [];
	
	while (totalInclusiveSize !== size) {
		inclusiveSize = stream.readUint32();
		totalInclusiveSize += inclusiveSize;
		
		if (typeof debug !== 'undefined') {
			console.log("\tgeosetAnimation " + this.geosetAnimations.length);
		}
		
		this.geosetAnimations[this.geosetAnimations.length] = new MdxGeosetAnimation(stream);
	}
	
	log("OK");
}

/// class BoneChunk
/// Desc ?
/// Id BONE
/// Uses class Bone
function MdxBoneChunk(stream, size) {
	log("BoneChunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}

/// class LightChunk
/// Desc ?
/// Id LITE
/// Uses class Light
function MdxLightChunk(stream, size) {
	log("LightChunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}

/// class HelperChunk
/// Desc ?
/// Id HELP
/// Uses class Helper
function MdxHelperChunk(stream, size) {
	log("HelperChunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}

/// class AttachmentChunk
/// Desc ?
/// Id ATCH
/// Uses class Attachment
function MdxAttachmentChunk(stream, size) {
	log("AttachmentChunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}

/// class PivotPointChunk
/// Desc ?
/// Id PIVT
/// Uses class PivotPoint
function MdxPivotPointChunk(stream, size) {
	log("PivotPointChunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}

/// class ParticleEmitterChunk
/// Desc ?
/// Id PREM
/// Uses class ParticleEmitter
function MdxParticleEmitterChunk(stream, size) {
	log("ParticleEmitterChunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}

/// class ParticleEmitter2Chunk
/// Desc ?
/// Id PRE2
/// Uses class ParticleEmitter2
function MdxParticleEmitter2Chunk(stream, size) {
	log("ParticleEmitter2Chunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}

/// class RibbonEmitterChunk
/// Desc ?
/// Id RIBB
/// Uses class RibbonEmitter
function MdxRibbonEmitterChunk(stream, size) {
	log("RibbonEmitterChunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}

/// class Tracks
/// Desc ?
/// Id KEVT
/// Uses class Track
function MdxTracks(stream, size) {
	
}

/// class EventObjectChunk
/// Desc ?
/// Id EVTS
/// Uses class EventObject
function MdxEventObjectChunk(stream, size) {
	log("EventObjectChunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}

/// class CameraChunk
/// Desc ?
/// Id CAMS
/// Uses class Camera
function MdxCameraChunk(stream, size) {
	log("CameraChunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}

/// class CollisionShapeChunk
/// Desc ?
/// Id CLID
/// Uses class CollisionShape
function MdxCollisionShapeChunk(stream, size) {
	log("CollisionShapeChunk...");
	
	stream.skip(size);
	
	log("Oops, not impelemented yet");
}