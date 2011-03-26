require "./base"

class BinaryStream
	def initialize (file)
		@file = file
		
		File.open(file, "rb") { |desc|
			@data = desc.read()
		}
		
		@byte = 0
	end

	def skip (size)
		@byte += size
		
		if @byte < 0
			@byte = 0
		elsif @byte >= @data.size
			@byte = @data.size - 1
		end
	end
	
	def remaining ()
		return @data.size - @byte
	end
	
	def read (size)
		if @data.size - @byte >= size
			data = @data[@byte...@byte + size]
			@byte += size
			
			return data
		else
			return nil
		end
	end
	
	def readCStr (size)
		read(size).unpack("A*")[0]
	end
	
	def readByte ()
		return read(1).unpack("c")[0]
	end
	
	def readShort ()
		return read(2).unpack("s")[0]
	end
	
	def readInt ()
		return read(4).unpack("i")[0]
	end
	
	def readLongLong
		return read(8).unpack("q")[0]
	end
	
	def readUByte ()
		return read(1).unpack("C")[0]
	end
	
	def readUShort ()
		return read(2).unpack("S")[0]
	end
	
	def readUInt ()
		return read(4).unpack("I")[0]
	end
	
	def readULongLong ()
		return read(8).unpack("Q")[0]
	end
	
	def readFloat ()
		return read(4).unpack("f")[0]
	end
	
	def readDouble ()
		return read(8).unpack("d")[0]
	end
	
	def readSVector (size)
		return read(size * 2).unpack("s*")
	end
	
	def readIVector (size)
		return read(size * 4).unpack("i*")
	end
	
	def readVector (size)
		return read(size * 4).unpack("f*")
	end
	
	def readCheck (what)
		data = read(what.size)
		
		if data != what
			raise("Expected #{what} but got #{data}")
		else
			return data
		end
	end
	
	def readHeader ()
		if remaining() >= 8
			return Header.new(self)
		else
			return nil
		end
	end 
end