require "./parser"

file = ""
target = ""
parser = nil

begin
	raise("Expected an argument but got none") if ARGV.size < 1
	
	file = ARGV[0]
	
	if ARGV.size > 1
		target = ARGV[1]
	else
		target = File.basename(file, File.extname(file)) + ".txt"
	end
	
	parser = Parser.new(file)
	parser.export(target)
	
	puts parser.tree()
rescue Exception => e
	puts("Exception: #{e.message}")
	puts("Backtrace: #{e.backtrace.inspect}")
end