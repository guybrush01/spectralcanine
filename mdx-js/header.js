/// class Header
/// Desc Reads a chunk header
function Header (stream) {
	this.token = stream.read(4);
	this.size = stream.readUint32();
}