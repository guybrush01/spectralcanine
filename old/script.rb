require "./mdx"

file = ""
target = ""
parser = nil

begin
	if ARGV.size < 1
		raise("Not enough command-line arguments")
	end
	
	file = ARGV[0]
	
	if ARGV.size > 1
		target = ARGV[1]
	else
		target = File.basename(file, File.extname(file)) + ".txt"
	end
	
	if File.extname(file).downcase() == ".mdx"
		parser = Mdx.new(file)
	else
		raise("Unsupported extension \"#{File.extname(file).downcase}\" (supported: .mdx)")
	end
		
	File.open("info.txt", "w") { |file|
		file.puts parser.info()
	}

	if File.extname(target).downcase() == ".txt"
		parser.export(target)
	else
		raise("Unsupported extension \"#{File.extname(file).downcase}\" (supported: .txt)")
	end
rescue Exception => e
	puts("Exception: #{e.message}")
	puts("Backtrace:")
	
	data = e.backtrace.inspect[1...e.backtrace.inspect.size-1]
	trace = data.split(",")
	
	trace.each { |error|
		important = /([\w]+\.[\w]+:[\d]+:[^"]+)/.match(error)
		puts "\t#{important[1]}"
	}
end