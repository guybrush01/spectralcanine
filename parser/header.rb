class Header
	attr_reader :token, :size
	
	def initialize (stream)
		@token = stream.read(4)
		@size = stream.readUInt()
		puts "#{self}: #{@token}, #{@size}"
	end
end