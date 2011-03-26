require "./base"
require "./classes4"

class Sequence < Base
	attr_accessor :name, :intervalStart, :intervalEnd, :moveSpeed, :flags, :rarity, :syncPoint, :boundsRadius, :minimumExtent, :maximumExtent
	
	def initialize (stream)
		print("Sequence#initialize...")
		parse(stream, 0)
	end
	
	def parse (stream, size)
		@name = stream.readCStr(80)
		@intervalStart = stream.readUInt()
		@intervalEnd = stream.readUInt()
		@moveSpeed = stream.readFloat()
		@flags = stream.readUInt()
		@rarity = stream.readFloat()
		@syncPoint = stream.readUInt()
		@boundsRadius = stream.readFloat()
		@minimumExtent = stream.readVector(3)
		@maximumExtent = stream.readVector(3)
		
		puts("OK")
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		s += "#{"\t" * level.to_i}\tName = #{@name}\n"
		s += "#{"\t" * level.to_i}\tIntervalStart = #{@intervalStart}\n"
		s += "#{"\t" * level.to_i}\tIntervalEnd = #{@intervalEnd}\n"
		s += "#{"\t" * level.to_i}\tMoveSpeed = #{"%.2f" % @moveSpeed}\n"
		s += "#{"\t" * level.to_i}\tFlags = #{@flags}\n"
		s += "#{"\t" * level.to_i}\tRarity = #{"%.2f" % @rarity}\n"
		s += "#{"\t" * level.to_i}\tSyncPoint = #{@syncPoint}\n"
		s += "#{"\t" * level.to_i}\tBoundsRadius = #{"%.2f" % @boundsRadius}\n"
		s += "#{"\t" * level.to_i}\tMinimumExtent = #{"[%.2f, %.2f, %.2f]" % @minimumExtent}\n"
		s += "#{"\t" * level.to_i}\tMaximumExtent = #{"[%.2f, %.2f, %.2f]" % @maximumExtent}\n"
		
		return s
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}\n"
	end
end

class GlobalSequence
	attr_accessor :duration
	
	def initialize (stream)
		print("GlobalSequence#initialize...")
		parse(stream, 0)
	end
	
	def parse (stream, size)
		@duration = stream.readUInt()
		
		puts("OK")
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		s += "#{"\t" * level.to_i}\tDuration: #{@duration}:\n"
		
		return s
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}\n"
	end
end

class Texture
	attr_accessor :replaceableId, :fileName, :flags
	
	def initialize (stream)
		print("Texture#initialize...")
		parse(stream, 0)
	end
	
	def parse (stream, size)
		@replaceableId = stream.readUInt()
		@fileName = stream.readCStr(260)
		@flags = stream.readUInt()
		
		puts("OK")
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		s += "#{"\t" * level.to_i}\tReplaceableId: #{@replaceableId}\n"
		s += "#{"\t" * level.to_i}\tFileName: #{@fileName}\n"
		s += "#{"\t" * level.to_i}\tFlags: #{@flags}\n"
		
		return s
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}\n"
	end
end

class Material
	attr_accessor :
	
	def initialize (stream)
		
	end
	
	def info (level)
		raise "Not implemented"
	end
	
	def tree (level)
		raise "Not implemented"
	end
end
	
class Geoset
	attr_accessor :vertexPositions, :vertexNormals, :faceTypeGroups, :faceGroups, :faces, :vertexGroups, :matrixGroups, :matrixIndexes, :materialId, :selectionGroup, :selectionFlags, :boundsRadious, :minimumExtent, :maximumExtent, :extents, :vertexTexturePositions
	
	def initialize (stream)
		print("Geoset#initialize...")
		parse(stream, 0)
	end
	
	def parse (stream, size)
		stream.readCheck("VRTX")
		
		nrOfVertexPositions = stream.readUInt()
		@vertexPositions = []
		
		(0...nrOfVertexPositions).each { |i|
			@vertexPositions[i] = VertexPosition.new(stream)
		}
		
		stream.readCheck("NRMS")
		
		nrOfVertexNormals = stream.readUInt()
		@vertexNormals = []
		
		(0...nrOfVertexNormals).each { |i|
			@vertexNormals[i] = VertexNormal.new(stream)
		}
		
		stream.readCheck("PTYP")
		
		nrOfFaceTypeGroups = stream.readUInt()
		@faceTypeGroups = []
		
		(0...nrOfFaceTypeGroups).each { |i|
			@faceTypeGroups[i] = FaceTypeGroup.new(stream)
		}
		
		stream.readCheck("PCNT")
		
		nrOfFaceGroups = stream.readUInt()
		@faceGroups = []
		
		(0...nrOfFaceGroups).each { |i|
			@faceGroups[i] = FaceGroup.new(stream)
		}
		
		stream.readCheck("PVTX")
		
		totalNrOfIndexes = stream.readUInt()
		totalNrOfFaces = totalNrOfIndexes / 3
		@faces = []
		
		(0...totalNrOfFaces).each { |i|
			@faces[i] = Face.new(stream)
		}
		
		stream.readCheck("GNDX")
		
		nrOfVertexGroups = stream.readUInt()
		@vertexGroups = []
		
		(0...nrOfVertexGroups).each { |i|
			@vertexGroups[i] = VertexGroup.new(stream)
		}
		
		stream.readCheck("MTGC")
		
		nrOfMatrixGroups = stream.readUInt()
		@matrixGroups = []
		
		(0...nrOfMatrixGroups).each { |i|
			@matrixGroups[i] = MatrixGroup.new(stream)
		}
		
		stream.readCheck("MATS")
		
		nrOfMatrixIndexes = stream.readUInt()
		@MatrixIndexes = []
		
		(0...nrOfMatrixIndexes).each { |i|
			@MatrixIndexes[i] = MatrixIndex.new(stream)
		}
		
		@materialId = stream.readUInt()
		@selectionGroup = stream.readUInt()
		@selectionFlags = stream.readUInt()
		@boundsRadius = stream.readFloat()
		@minimumExtent = stream.readVector(3)
		@maximumExtent = stream.readVector(3)
		nrOfExtents = stream.readUInt()
		@extents = []
		
		(0...nrOfExtents).each { |i|
			@extents[i] = Extent.new(stream)
		}
		
		stream.readCheck("UVAS")
		
		nrOfTextureVertexGroups = stream.readUInt()
		
		stream.readCheck("UVBS")
		
		nrOfVertexTexturePositions = stream.readUInt()
		@vertexTexturePositions = []
		
		(0...nrOfVertexTexturePositions).each { |i|
			@vertexTexturePositions[i] = VertexTexturePosition.new(stream)
		}
		
		puts("OK")
	end
	
	def info (level)
		s = "#{"\t" * level.to_i}#{self}:\n"
		
		s += "#{"\t" * level.to_i}\tVertexPositions:\n"
		
		(0...@vertexPositions.size).each { |i|
			s += @vertexPositions[i].info(level + 2)
		}
		
		s += "#{"\t" * level.to_i}\tVertexNormals:\n"
		
		(0...@vertexNormals.size).each { |i|
			s += @vertexNormals[i].info(level + 2)
		}
		
		s += "#{"\t" * level.to_i}\tFaceTypeGroups:\n"
		
		(0...@faceTypeGroups.size).each { |i|
			s += @faceTypeGroups[i].info(level + 2)
		}
		
		s += "#{"\t" * level.to_i}\tFaces:\n"
		
		(0...@faces.size).each { |i|
			s += @faces[i].info(level + 2)
		}
		
		s += "#{"\t" * level.to_i}\tVertexGroups:\n"
		
		(0...@vertexGroups.size).each { |i|
			s += @vertexGroups[i].info(level + 2)
		}
		
		s += "#{"\t" * level.to_i}\tMatrixGroups:\n"
		
		(0...@matrixGroups.size).each { |i|
			s += @matrixGroups[i].info(level + 2)
		}
		
		s += "#{"\t" * level.to_i}\tMatrixIndexes:\n"
		
		if @matrixIndexes
			(0...@matrixIndexes.size).each { |i|
				s += @matrixIndexes[i].info(level + 2)
			}
		end
		
		s += "#{"\t" * level.to_i}\tMaterialId: #{@materialId}\n"
		s += "#{"\t" * level.to_i}\tSelectionGroup: #{@selectionGroup}\n"
		s += "#{"\t" * level.to_i}\tSelectionFlags: #{@selectionFlags}\n"
		s += "#{"\t" * level.to_i}\tBoundsRadius: #{@boundsRadius}\n"
		s += "#{"\t" * level.to_i}\tMinimumExtent: #{@minimumExtent}\n"
		s += "#{"\t" * level.to_i}\tMaximumExtent: #{@maximumExtent}\n"
		s += "#{"\t" * level.to_i}\tExtents:\n"
		
		(0...@extents.size).each { |i|
			s += @extents[i].info(level + 2)
		}
		
		s += "#{"\t" * level.to_i}\tVertexTexturePositions:\n"
		
		(0...@vertexTexturePositions.size).each { |i|
			s += @vertexTexturePositions[i].info(level + 2)
		}
		
		return s
	end
	
	def tree (level)
		return "#{"\t" * level.to_i}#{self}\n"
	end
end