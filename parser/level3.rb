class VertexPosition
	attr_accessor :position
	
	def initialize (stream)
		@position = stream.readVector(3)
	end
	
	def to_s ()
		return "[%.2f, %.2f, %.2f]" % @position
	end
end

class VertexNormal
	attr_accessor :normal
	
	def initialize (stream)
		@normal = stream.readVector(3)
	end
	
	def to_s ()
		return "[%.2f, %.2f, %.2f]" % @normal
	end
end

class FaceTypeGroup
	attr_accessor :faceType
	
	def initialize (stream)
		@faceType = stream.readUInt()
	end
	
	def to_s ()
		return @faceType.to_s
	end
end

class FaceGroup
	attr_accessor :nrOfIndexes
	
	def initialize (stream)
		@nrOfIndexes = stream.readUInt()
	end
	
	def to_s ()
		return @nrOfIndexes.to_s
	end
end

class Face
	attr_accessor :index1, :index2, :index3
	
	def initialize (stream)
		@index1 = stream.readUShort()
		@index2 = stream.readUShort()
		@index3 = stream.readUShort()
	end
	
	def to_s ()
		return "[%d, %d, %d]" % [@index1, @index2, @index3]
	end
end

class VertexGroup
	attr_accessor :matrixGroup
	
	def initialize (stream)
		@matrixGroup = stream.readUByte()
	end
	
	def to_s ()
		return @matrixGroup.to_s
	end
end

class MatrixGroup
	attr_accessor :matrixGroupSize
	
	def initialize (stream)
		@matrixGroupSize = stream.readUInt()
	end
	
	def to_s ()
		return @matrixGroupSize.to_s
	end
end

class MatrixIndex
	attr_accessor :matrixIndex
	
	def initialize (stream)
		@matrixIndex = stream.readUInt()
	end
	
	def to_s ()
		return @matrixIndex.to_s
	end
end

class Extent
	attr_accessor :boundsRadius, :minimumExtent, :maximumExtent
	
	def initialize (stream)
		@boundsRadius = stream.readFloat()
		@minimumExtent = stream.readVector(3)
		@maximumExtent = stream.readVector(3)
	end
	
	def to_s ()
		return "[%.2f, [%.2f, %.2f, %.2f], [%.2f, %.2f, %.2f]]" % [@boundsRadius, @minimumExtent, @maximumExtent]
	end
end

class VertexTexturePosition
	attr_accessor :texturePosition
	
	def initialize (stream)
		@texturePosition = stream.readVector(2)
	end
	
	def to_s ()
		return "[%.2f, %.2f]" % @texturePosition
	end
end

class Vertex
	attr_accessor :position
	
	def initialize (stream)
		@position = stream.readVector(3)
	end
	
	def to_s ()
		return "[%.2f, %.2f, %.2f]" % @position
	end
end
