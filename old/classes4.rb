require "./base"

class VertexPosition < Base
	attr_accessor :position
	
	def initialize (stream)
		@position = stream.readVector(3)
	end
	
	def info (level)
		return  "#{"\t" * level.to_i}#{self}: #{"[%.2f, %.2f, %.2f]" % @position}\n"
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end

class VertexNormal < Base
	attr_accessor :normal
	
	def initialize (stream)
		@normal = stream.readVector(3)
	end
	
	def info (level)
		return  "#{"\t" * level.to_i}#{self}: #{"[%.2f, %.2f, %.2f]" % @normal}\n"
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end

class FaceTypeGroup < Base
	attr_accessor :faceType
	
	def initialize (stream)
		@faceType = stream.readUInt()
	end
	
	def info (level)
		return  "#{"\t" * level.to_i}#{self}: #{@faceType}\n"
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end

class FaceGroup < Base
	attr_accessor :nrOfIndexes
	
	def initialize (stream)
		@nrOfIndexes = stream.readUInt()
	end
	
	def info (level)
		return  "#{"\t" * level.to_i}#{self}: #{@nrOfIndexes}\n"
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end

class Face < Base
	attr_accessor :index1, :index2, :index3
	
	def initialize (stream)
		@index1 = stream.readUShort()
		@index2 = stream.readUShort()
		@index3 = stream.readUShort()
	end
	
	def info (level)
		return  "#{"\t" * level.to_i}#{self}: [#{index1}, #{index2}, #{index3}]\n"
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end

class VertexGroup < Base
	attr_accessor :matrixGroup
	
	def initialize (stream)
		@matrixGroup = stream.readUByte()
	end

	def info (level)
		return  "#{"\t" * level.to_i}#{self}: #{@matrixGroup}\n"
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end

class MatrixGroup < Base
	attr_accessor :matrixGroupSize
	
	def initialize (stream)
		@matrixGroupSize = stream.readUInt()
	end
	
	def info (level)
		return "#{"\t" * level.to_i}#{self}: #{@matrixGroupSize}\n"
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end

class MatrixIndex < Base
	attr_accessor :matrixIndex
	
	def initialize (stream)
		@matrixIndex = stream.readUInt()
	end
	
	def info (level)
		return "#{"\t" * level.to_i}#{self}: #{@matrixIndex}\n"
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end

class Extent < Base
	attr_accessor :boundsRadius, :minimumExtent, :maximumExtent
	
	def initialize (stream)
		@boundsRadius = stream.readFloat()
		@minimumExtent = stream.readVector(3)
		@maximumExtent = stream.readVector(3)
	end
	
	def info (level)
		s =  "#{"\t" * level.to_i}#{self}:\n"
		s += "#{"\t" * level.to_i}\tBoundsRadius = #{"%.2f" % @boundsRadius}\n"
		s += "#{"\t" * level.to_i}\tMinimumExtent = #{"[%.2f, %.2f, %.2f]" % @minimumExtent}\n"
		s += "#{"\t" * level.to_i}\tMaximumExtent = #{"[%.2f, %.2f, %.2f]" % @maximumExtent}\n"
		
		return s
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end

class VertexTexturePosition < Base
	attr_accessor :texturePosition
	
	def initialize (stream)
		@texturePosition = stream.readVector(2)
	end

	def info (level)
		return "#{"\t" * level.to_i}#{self}: #{"[%.2f, %.2f]" % @texturePosition}\n"
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end

class PivotPoint < Base
	attr_accessor :position
	
	def initialize (stream)
		@position = stream.readVector(3)
	end
	
	def info (level)
		return "#{"\t" * level.to_i}#{self}: #{"[%.2f, %.2f, %.2f]" % @position}\n"
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}"
	end
end