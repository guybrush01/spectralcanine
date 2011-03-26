files = Dir["*"].entries

File.open("mdx-js.js", "w") { |output|
	files.each { |file|
		if /.*\.js/.match(file)
			File.open(file, "r") { |input|
				output.puts(input.read())
			}
		end
	}
}