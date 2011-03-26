require "./worker"

$Server = TCPServer.new("", 80)

$Listener = Thread.new() {
	loop {
		Thread.new($Server.accept) { |target|
			Worker.new(target)
		}
	}
}

puts("press enter to exit")
c = gets()

$Listener.exit()
$Server.close()