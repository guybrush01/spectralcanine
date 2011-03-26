require "socket"
require "erb"
require "./mime"

class Worker
	def initialize (target)
		request = /GET \/(.*) HTTP\/\d\.\d/.match(target.gets)
		
		if request
			@file = request[1]
			
			if @file.include?("?")
				@file = @file[0...@file.index("?")];
			end
			
			begin
				File.open(@file, "rb") { |file|
					@data = file.read()
				}
				
				@mime = mime(@file)
				
				if @mime == "text/html"
					@data = ERB.new(@data).result(binding)
				end
				
				target.puts("HTTP/1.1 200 OK")
				target.puts("Server: Ruby")
				target.puts("Connection: close")
				target.puts("Cache-Control: no-cache")
				target.puts("Content-Type: #{@mime}")
				target.puts("Content-Length: #{@data.size()}")
				target.puts("")
				target.puts(@data)
			rescue Errno::ENOENT
				#error = "#{file} not found"
				error = ""
				
				target.puts("HTTP/1.1 404 Not Found")
				target.puts("Server: Ruby")
				target.puts("Connection: close")
				target.puts("Content-Type: text/html")
				target.puts("Content-Length: #{error.size()}")
				target.puts("")
				target.puts(error)
			rescue Exception => e
				puts("Exception: #{e.message}")
				puts(e.backtrace.inspect)
			end
			
			puts("#{Time.new.strftime("%H:%M:%S")} #{target.peeraddr[3]} requested #{@file}")
		end
		
		target.gets()
		target.close()
	end
end