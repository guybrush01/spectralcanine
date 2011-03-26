require "./base"

class GeosetTranslation < Base
	def initialize (stream, size)
		puts "GeosetTranslationChunk#initialize"
		stream.skip(size)
	end
end

class GeosetRotation < Base
	def initialize (stream, size)
		puts "GeosetRotationChunk#initialize"
		stream.skip(size)
	end
end

class GeosetScaling < Base
	def initialize (stream, size)
		puts "GeosetScalingChunk#initialize"
		stream.skip(size)
	end
end

class GeosetAlpha < Base
	def initialize (stream, size)
		puts "GeosetAlphaChunk#initialize"
		stream.skip(size)
	end
end

class GeosetColor < Base
	def initialize (stream, size)
		puts "GeosetColorChunk#initialize"
		stream.skip(size)
	end
end

class TextureTranslation < Base
	def initialize (stream, size)
		puts "TextureTranslationChunk#initialize"
		stream.skip(size)
	end
end

class TextureRotation < Base
	def initialize (stream, size)
		puts "TextureRotationChunk#initialize"
		stream.skip(size)
	end
end

class TextureScaling < Base
	def initialize (stream, size)
		puts "TextureScalingChunk#initialize"
		stream.skip(size)
	end
end

class CameraPositionTranslation < Base
	def initialize (stream, size)
		puts "CameraPositionTranslationChunk#initialize"
		stream.skip(size)
	end
end

class CameraTargetTranslation < Base
	def initialize (stream, size)
		puts "CameraTargetTranslationChunk#initialize"
		stream.skip(size)
	end
end

class CameraRotation < Base
	def initialize (stream, size)
		puts "CameraRotationChunk#initialize"
		stream.skip(size)
	end
end

class MaterialTextureId < Base
	def initialize (stream, size)
		puts "MaterialTextureIdChunk#initialize"
		stream.skip(size)
	end
end

class MaterialAlpha < Base
	def initialize (stream, size)
		puts "MaterialAlphaChunk#initialize"
		stream.skip(size)
	end
end

class AttachmentVisibility < Base
	def initialize (stream, size)
		puts "AttachmentVisibilityChunk#initialize"
		stream.skip(size)
	end
end

class LightVisibility < Base
	def initialize (stream, size)
		puts "LightVisibilityChunk#initialize"
		stream.skip(size)
	end
end

class LightColor < Base
	def initialize (stream, size)
		puts "LightColorChunk#initialize"
		stream.skip(size)
	end
end

class LightIntensity < Base
	def initialize (stream, size)
		puts "LightIntensityChunk#initialize"
		stream.skip(size)
	end
end

class LightAmbientColor < Base
	def initialize (stream, size)
		puts "LightAmbientColorChunk#initialize"
		stream.skip(size)
	end
end

class LightAmbientIntensity < Base
	def initialize (stream, size)
		puts "LightAmbientIntensityChunk#initialize"
		stream.skip(size)
	end
end

class ParticleEmitterVisibility < Base
	def initialize (stream, size)
		puts "ParticleEmitterVisibilityChunk#initialize"
		stream.skip(size)
	end
end

class ParticleEmitter2Visibility < Base
	def initialize (stream, size)
		puts "ParticleEmitter2VisibilityChunk#initialize"
		stream.skip(size)
	end
end

class ParticleEmitter2EmissionRate < Base
	def initialize (stream, size)
		puts "ParticleEmitter2EmissionRateChunk#initialize"
		stream.skip(size)
	end
end

class ParticleEmitter2Width < Base
	def initialize (stream, size)
		puts "ParticleEmitter2WidthChunk#initialize"
		stream.skip(size)
	end
end

class ParticleEmitter2Length < Base
	def initialize (stream, size)
		puts "ParticleEmitter2LengthChunk#initialize"
		stream.skip(size)
	end
end

class ParticleEmitter2Speed < Base
	def initialize (stream, size)
		puts "ParticleEmitter2Speed#initialize"
		stream.skip(size)
	end
end

class RibbonEmitterVisibility < Base
	def initialize (stream, size)
		puts "RibbonEmitterVisibility#initialize"
		stream.skip(size)
	end
end

class RibbonEmitterHeightAbove < Base
	def initialize (stream, size)
		puts "RibbonEmitterHeightAbove#initialize"
		stream.skip(size)
	end
end

class RibbonEmitterHeightBelow < Base
	def initialize (stream, size)
		puts "RibbonEmitterHeightBelow#initialize"
		stream.skip(size)
	end
end

class Node < Base
	def initialize (stream, size)
		puts "Node#initialize"
		stream.skip(size)
	end
end

class Tracks < Base
	def initialize (stream, size)
		puts "Tracks#initialize"
		stream.skip(size)
	end
end

class LayerChunk < Base
	def initialize (stream, size)
		print("LayerChunk#initialize...")
		stream.skip(size)
	end
end