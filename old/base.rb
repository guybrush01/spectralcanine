class Header
	attr_reader :token, :size
	
	def initialize (stream)
		@token = stream.read(4)
		@size = stream.readUInt()
	end
end

class Base
	def initialize (stream, size)
		raise("This will never be shown")
	end
	
	def parse (stream, size)
		puts("Not implemented yet")
	end
	
	def info (level)
		return "Not implemented yet\n"
	end
	
	def tree (level)
		return "Not implemented yet\n"
	end
end