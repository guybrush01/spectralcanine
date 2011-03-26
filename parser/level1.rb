require "./level2"

# KTGR
# Uses class TranslationTrack
class GeosetTranslation
	attr_accessor :interpolationType, :globalSequenceId, :translationTracks
	
	def initialize (stream)
		print("GeosetTranslation#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KGRT
# Uses class RotationTrack
class GeosetRotation
	attr_accessor :interpolationType, :globalSequenceId, :rotationTrack
	
	def initialize (stream)
		print("GeosetRotation#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KGSC
# Uses class ScalingTrack
class GeosetScaling
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("GeosetScaling#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KGAO
# Uses class ScalingTrack
class GeosetAlpha
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("GeosetAlpha#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KGAC
# Uses class ScalingTrack
class GeosetColor
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("GeosetColor#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KTAT
# Uses class TranslationTrack
class TextureTranslation
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("TextureTranslation#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KTAR
# Uses class TranslationTrack
class TextureRotation
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("TextureRotation#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KTAS
# Uses class TranslationTrack
class TextureScaling
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("TextureScaling#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KCTR
# Uses class TranslationTrack
class CameraPositionTranslation
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("CameraPositionTranslation#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KTTR
# Uses class TranslationTrack
class CameraTargetTranslation
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("CameraTargetTranslation#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KCRL
# Uses class TranslationTrack
class CameraRotation
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("CameraRotation#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KMTF
# Uses class ScalingTrack
class MaterialTextureId
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("MaterialTextureId#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KMTA
# Uses class ScalingTrack
class MaterialAlpha
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("MaterialAlpha#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KATV
# Uses class ScalingTrack
class AttachmentVisibility
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("AttachmentVisibility#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KLAV
# Uses class ScalingTrack
class LightVisibility
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("LightVisibility#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KLAC
# Uses class ScalingTrack
class LightColor
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("LightColor#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KLAI
# Uses class ScalingTrack
class LightIntensity
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("LightIntensity#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KLBC
# Uses class ScalingTrack
class LightAmbientColor
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("LightAmbientColor#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KLBI
# Uses class ScalingTrack
class LightAmbientIntensity
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("LightAmbientIntensity#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KPEV
# Uses class ScalingTrack
class ParticleEmitterVisibility
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("ParticleEmitterVisibility#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KP2V
# Uses class ScalingTrack
class ParticleEmitter2Visibility
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("ParticleEmitter2Visibility#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KP2E
# Uses class ScalingTrack
class ParticleEmitter2EmissionRate
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("ParticleEmitter2EmissionRate#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KP2W
# Uses class ScalingTrack
class ParticleEmitter2Width
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("ParticleEmitter2Width#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KP2N
# Uses class ScalingTrack
class ParticleEmitter2Length
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("ParticleEmitter2Length#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KP2S
# Uses class ScalingTrack
class ParticleEmitter2Speed
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("ParticleEmitter2Speed#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KRVS
# Uses class ScalingTrack
class RibbonEmitterVisibility
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("RibbonEmitterVisibility#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KRHA
# Uses class ScalingTrack
class RibbonEmitterHeightAbove
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("RibbonEmitterHeightAbove#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KRHB
# Uses class ScalingTrack
class RibbonEmitterHeightBelow
	attr_accessor :interpolationType, :globalSequenceId, :scalingTrack
	
	def initialize (stream)
		print("RibbonEmitterHeightBelow#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# ?
# Uses class GeosetTranslation
# Uses class GeosetRotation
# Uses class GeosetScaling
class Node
	attr_accessor :name, :objectId, :parentId, :flags, :geosetTranslation, :geosetRotation, :geosetScaling
	
	def initialize (stream)
		print("Node#initialize...")
		puts "NOT IMPLEMENTED"
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# VERS
class VersionChunk
	attr_accessor :version
	
	def initialize (stream, size)
		print("VersionChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# MODL
class ModelChunk
	attr_accessor :name, :animationFileName, :boundsRadius, :minimumExtent, :maximumExtent, :blendTime
	
	def initialize (stream, size)
		print("ModelChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# SEQS
# Uses class Sequence
class SequenceChunk
	attr_accessor :sequences
	
	def initialize (stream, size)
		print("SequenceChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# GLBS
# Uses class GlobalSequence
class GlobalSequenceChunk
	attr_accessor :globalSequences
	
	def initialize (stream, size)
		print("GlobalSequenceChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# TEXS
# Uses class Texture
class TextureChunk
	attr_accessor :textures
	
	def initialize (stream, size)
		print("TextureChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# LAYS
# Use class Layer
class LayerChunk
	attr_accessor :layers
	
	def initialize (stream, size)
		print("TextureChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# MATS
# Uses class Material
class MaterialChunk
	attr_accessor :materials
	
	def initialize (stream, size)
		print("MaterialChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# TXAN
# Uses class TextureAnimation
class TextureAnimationChunk
	attr_accessor :textureAnimations
	
	def initialize (stream, size)
		print("TextureAnimationChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# GEOS
# Uses class Geoset
class GeosetChunk
	attr_accessor :geosets
	
	def initialize (stream, size)
		print("GeosetChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# GEOA
# Uses class GeosetAnimation
class GeosetAnimationChunk
	attr_accessor :geosetAnimations
	
	def initialize (stream, size)
		print("GeosetAnimationChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# BONE
# Uses class Bone
class BoneChunk
	attr_accessor :bones
	
	def initialize (stream, size)
		print("BoneChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# LITE
# Uses class Light
class LightChunk
	attr_accessor :lights
	
	def initialize (stream, size)
		print("LightChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# HELP
# Uses class Helper
class HelperChunk
	attr_accessor :helpers
	
	def initialize (stream, size)
		print("HelperChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# ATCH
# Uses class Attachment
class AttachmentChunk
	attr_accessor :attachments
	
	def initialize (stream, size)
		print("AttachmentChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# PIVT
# Uses class PivotPoint
class PivotPointChunk
	attr_accessor :pivotPoints
	
	def initialize (stream, size)
		print("PivotPointChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# PREM
# Uses class ParticleEmitter
class ParticleEmitterChunk
	attr_accessor :particleEmitters
	
	def initialize (stream, size)
		print("ParticleEmitterChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# PRE2
# Uses class ParticleEmitter2
class ParticleEmitter2Chunk
	attr_accessor :particleEmitters
	
	def initialize (stream, size)
		print("ParticleEmitter2Chunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# RIBB
# Uses class RibbonEmitter
class RibbonEmitterChunk
	attr_accessor :ribbonEmitters
	
	def initialize (stream, size)
		print("RibbonEmitterChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# KEVT
# Uses class Track
class Tracks
	attr_accessor :tracks
	
	def initialize (stream, size)
		print("Tracks#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# EVTS
# Uses class EventObject
class EventObjectChunk
	attr_accessor :eventObjects
	
	def initialize (stream, size)
		print("EventObjectChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# CAMS
# Uses class Camera
class CameraChunk
	attr_accessor :cameras
	
	def initialize (stream, size)
		print("CameraChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end

# CLID
# Uses class CollisionShape
class CollisionShapeChunk
	attr_accessor :collisionShapes
	
	def initialize (stream, size)
		print("CollisionShapeChunk#initialize...")
		puts "NOT IMPLEMENTED"
		stream.skip(size)
	end
	
	def tree (level)
		"TREE NOT IMPLEMENTED\n"
	end
end