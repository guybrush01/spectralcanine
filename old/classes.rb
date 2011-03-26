require "./base"
require "./classes2"
require "./classes3"

class VersionChunk < Base
	attr_accessor :version
	
	def initialize (stream, size)
		print "VersionChunk#initialize..."
		
		@version = stream.readUInt()
		
		puts "OK"
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		s += "#{"\t" * level.to_i}\tVersion: #{@version}"
		
		return s
	end
	
	def tree (level)
		s = "#{"\t" * level.to_i}#{self}\n"
	end
end

class ModelChunk < Base
	attr_accessor :name, :animationFileName, :boundsRadius, :minimumExtent, :maximumExtent, :blendTime
	
	def initialize (stream, size)
		print("ModelChunk#initialize...")
		
		@name = stream.readCStr(80)
		@animationFileName = stream.readCStr(260)
		@boundsRadius = stream.readFloat()
		@minimumExtent = stream.readVector(3)
		@maximumExtent = stream.readVector(3)
		@blendTime = stream.readUInt()
		
		puts("OK")
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		s += "#{"\t" * level.to_i}\tName: #{@name}\n"
		s += "#{"\t" * level.to_i}\tAnimationFileName: #{@animationFileName}\n"
		s += "#{"\t" * level.to_i}\tBoundsRadius: #{"%.2f" % @boundsRadius}\n"
		s += "#{"\t" * level.to_i}\tMinimumExtent: #{"[%.2f, %.2f, %.2f]" % @minimumExtent}\n"
		s += "#{"\t" * level.to_i}\tMaximumExtent: #{"[%.2f, %.2f, %.2f]" % @maximumExtent}\n"
		s += "#{"\t" * level.to_i}\tBlendTime: #{@blendTime}\n"
		
		return s
	end
	
	def tree (level)
		s = "#{"\t" * level.to_i}#{self}\n"
	end
end

class SequenceChunk < Base
	attr_accessor :sequences
	
	def initialize (stream, size)
		puts("SequenceChunk#initialize...")
		
		@sequences = Array.new(size/132)
		
		(0...size/132).each { |i|
			@sequences[i] = Sequence.new(stream)
		}
		
		puts("OK")
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		
		(0...@sequences.size).each { |i|
			s += "#{@sequences[i].info(level + 1)}"
		}
		
		return s
	end
	
	def tree (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		
		(0...@sequences.size).each { |i|
			s += "#{@sequences[i].tree(level + 1)}"
		}
		
		return s
	end
end

class GlobalSequenceChunk < Base
	attr_accessor :globalSequences
	
	def initialize (stream, size)
		puts("GlobalSequenceChunk#initialize...")
		
		@globalSequences = Array.new(size/4)
		
		(0...size/4).each { |i|
			@globalSequences[i] = GlobalSequence.new(stream)
		}
		
		puts("OK")
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		
		(0...@globalSequences.size).each { |i|
			s += "#{@globalSequences[i].info(level + 1)}"
		}
		
		return s
	end
	
	def tree (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		
		(0...@globalSequences.size).each { |i|
			s += "#{@globalSequences[i].tree(level + 1)}"
		}
		
		return s
	end
end

class TextureChunk < Base
	attr_accessor :textures
	
	def initialize (stream, size)
		puts("TextureChunk#initialize...")
		
		@textures = Array.new(size/268)
		
		(0...size/268).each { |i|
			@textures[i] = Texture.new(stream)
		}
		
		puts("OK")
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		
		(0...@textures.size).each { |i|
			s += "#{@textures[i].info(level + 1)}"
		}
		
		return s
	end
	
	def tree (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		
		(0...@textures.size).each { |i|
			s += "#{@textures[i].tree(level + 1)}"
		}
		
		return s
	end
end

class MaterialChunk < Base
	attr_accessor :materials
	
	def initialize (stream, size)
		print("MaterialChunk#initialize...")
		
		totalSize = 0
		
		@materials = Array.new()
		
		until totalSize == size
			inclusiveSize = stream.readUInt()
			totalSize += inclusiveSize
			
			@materials[@materials.size] = Material.new(stream)
		end
		
		
		puts "OK"
	end
end

class TextureAnimationChunk < Base
	def initialize (stream, size)
		print("TextureAnimationChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class GeosetChunk < Base
	attr_accessor :geosets
	
	def initialize (stream, size)
		puts("GeosetChunk#initialize...")
		
		totalSize = 0

		@geosets = Array.new()
		
		until totalSize == size
			inclusiveSize = stream.readUInt()
			totalSize += inclusiveSize
			
			@geosets[@geosets.size] = Geoset.new(stream)
		end
		
		puts("OK")
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		
		(0...@geosets.size).each { |i|
			s += "#{@geosets[i].info(level + 1)}"
		}
		
		return s
	end
	
	def tree (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		
		(0...@geosets.size).each { |i|
			s += "#{@geosets[i].tree(level + 1)}"
		}
		
		return s
	end
end

class GeosetAnimationChunk < Base
	def initialize (stream, size)
		print("GeosetAnimationChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class BoneChunk < Base
	def initialize (stream, size)
		print("BoneChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class LightChunk < Base
	def initialize (stream, size)
		print("LightChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class HelperChunk < Base
	def initialize (stream, size)
		print("HelperChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class AttachmentChunk < Base
	def initialize (stream, size)
		print("AttachmentChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class PivotPointChunk < Base
	attr_accessor :pivotPoints
	
	def initialize (stream, size)
		print("PivotPointChunk#initialize...")
		
		@pivotPoints = []
		
		(0...size/12).each { |i|
			@pivotPoints[i] = PivotPoint.new(stream)
		}
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		s += "#{"\t" * level.to_i}\tPivotPoints:\n"
		
		(0...@pivotPoints.size).each { |i|
			s += @pivotPoints[i].info(level + 2)
		}
		
		return s
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}:\n"
	end
end

class ParticleEmitterChunk < Base
	def initialize (stream, size)
		print("ParticleEmitterChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class ParticleEmitter2Chunk < Base
	def initialize (stream, size)
		print("ParticleEmitter2Chunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class RibbonEmitterChunk < Base
	def initialize (stream, size)
		print("RibbonEmitterChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class EventObjectChunk < Base
	def initialize (stream, size)
		print("EventObjectChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class CameraChunk < Base
	def initialize (stream, size)
		print("CameraChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end

class CollisionShapeChunk < Base
	def initialize (stream, size)
		print("CollisionShapeChunk#initialize...")
		parse(stream, size)
		
		stream.skip(size)
	end
end