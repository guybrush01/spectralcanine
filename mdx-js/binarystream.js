/// class BinaryStream
/// Desc Imitates a binary data stream
function BinaryStream (file) {
	this.data = get(file, true);
	this.buffer = new ArrayBuffer(this.data.length);
	this.dataview = new DataView(this.buffer);
	
	for (var i = 0; i < this.buffer.byteLength; i++) {
		this.dataview.setUint8(i, this.data.charCodeAt(i));
	}
	
	this.index = 0;
}

BinaryStream.prototype = {
	/// method BinaryStream#size
	/// Desc Returns the size of the stream
	size : function () {
		return this.buffer.byteLength;
	},
	
	/// method BinaryStream#sizeRemaining
	/// Desc Returns the size remaining to be read from the internal index
	sizeRemaining : function () {
		return this.buffer.byteLength - this.index;
	},
	
	/// method BinaryStream#skip
	/// Desc Skips size bytes
	/// Note Can be negative
	skip : function (size) {
		this.index += size;
		
		if (this.index > this.size()) {
			this.index = this.size() - 1;
			console.log("Exception: clamping illegal internal index");
		} else if (this.index < 0) {
			this.index = 0;
			console.log("Exception: clamping illegal internal index");
		}
		
		return this.index;
	},
	
	/// method BinaryStream#read
	/// Desc Reads size bytes and returns them as a string
	read : function (size) {
		if (this.sizeRemaining() >= size) {
			var data = Array(size);
			
			for (var i = 0; i < size; i++) {
				data[i] = String.fromCharCode(String(this.dataview.getUint8(this.index + i)));
			}
			
			this.index += size;
			
			return data.join("");
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readInt8
	/// Desc Reads a signed 8 bits integer and returns it as a number
	readInt8 : function () {
		if (this.sizeRemaining() > 0) {
			var data = this.dataview.getInt8(this.index);
			this.index += 1;
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readInt8Array
	/// Desc Reads size times signed 8 bits integers and returns them as an array
	readInt8Array : function (size) {
		if (this.sizeRemaining() >= size) {
			var data = [];
			
			for (var i = 0; i < size; i++) {
				data[i] = this.dataview.getInt8(this.index);
				this.index += 1;
			}
			
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readInt16
	/// Desc Reads a signed 16 bits integer and returns it as a number
	readInt16 : function () {
		if (this.sizeRemaining() >= 2) {
			var data = this.dataview.getInt16(this.index, true);
			this.index += 2;
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readInt16Array
	/// Desc Reads size times signed 16 bits integers and returns them as an array
	readInt16Array : function (size) {
		if (this.sizeRemaining() >= (size * 2)) {
			var data = [];
			
			for (var i = 0; i < size; i++) {
				data[i] = this.dataview.getInt16(this.index + (i * 2), true);
			}
			
			this.index += size * 2;
			
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readInt32
	/// Desc Reads a signed 32 bits integer and returns it as a number
	readInt32 : function () {
		if (this.sizeRemaining() >= 4) {
			var data = this.dataview.getInt32(this.index, true);
			this.index += 4;
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readInt32Array
	/// Desc Reads size times signed 32 bits integers and returns them as an array
	readInt32Array : function (size) {
		if (this.sizeRemaining() >= (size * 4)) {
			var data = [];
			
			for (var i = 0; i < size; i++) {
				data[i] = this.dataview.getInt32(this.index + (i * 4), true);
			}
			
			this.index += size * 4;
			
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readUint8
	/// Desc Reads an unsigned signed 8 bits integer and returns it as a number
	readUint8 : function () {
		if (this.sizeRemaining() > 0) {
			var data = this.dataview.getUint8(this.index);
			this.index += 1;
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readUint8Array
	/// Desc Reads size times unsigned 8 bits integers and returns them as an array
	readUint8Array : function (size) {
		if (this.sizeRemaining() >= size) {
			var data = [];
			
			for (var i = 0; i < size; i++) {
				data[i] = this.dataview.getUint8(this.index + i);
			}
			
			this.index += size;
			
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readUint16
	/// Desc Reads an unsigned signed 16 bits integer and returns it as a number
	readUint16 : function () {
		if (this.sizeRemaining() >= 2) {
			var data = this.dataview.getUint16(this.index, true);
			this.index += 2;
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readUint16Array
	/// Desc Reads size times unsigned 16 bits integers and returns them as an array
	readUint16Array : function (size) {
		if (this.sizeRemaining() >= (size * 2)) {
			var data = [];
			
			for (var i = 0; i < size; i++) {
				data[i] = this.dataview.getUint16(this.index + (i * 2), true);
			}
			
			this.index += size * 2;
			
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readUint32
	/// Desc Reads an unsigned signed 32 bits integer and returns it as a number
	readUint32 : function () {
		if (this.sizeRemaining() >= 4) {
			var data = this.dataview.getUint32(this.index, true);
			this.index += 4;
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readUint32Array
	/// Desc Reads size times unsigned 32 bits integers and returns them as an array
	readUint32Array : function (size) {
		if (this.sizeRemaining() >= (size * 4)) {
			var data = [];
			
			for (var i = 0; i < size; i++) {
				data[i] = this.dataview.getUint32(this.index + (i * 4), true);	
			}
			
			this.index += size * 4;
			
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readFloat32
	/// Desc Reads a 32 bits floating point number and returns it as a number
	readFloat32 : function () {
		if (this.sizeRemaining() >= 4) {
			var data = this.dataview.getFloat32(this.index, true);
			this.index += 4;
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readFloat32Array
	/// Desc Reads size times 32 bits floating point numbers and returns them as an array
	readFloat32Array : function (size) {
		if (this.sizeRemaining() >= (size * 4)) {
			var data = [];
			
			for (var i = 0; i < size; i++) {
				data[i] = this.dataview.getFloat32(this.index + (i * 4), true);
			}
			
			this.index += size * 4;
			
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readFloat64
	/// Desc Reads a 64 bits floating point number and returns it as a number
	readFloat64 : function () {
		if (this.sizeRemaining() >= 8) {
			var data = this.dataview.getFloat64(this.index, true);
			this.index += 8;
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readFloat64Array
	/// Desc Reads size times 64 bits floating point numbers and returns them as an array
	readFloat64Array : function (size) {
		if (this.sizeRemaining() >= (size * 8)) {
			var data = [];
			
			for (var i = 0; i < size; i++) {
				data[i] = this.dataview.getFloat64(this.index + (i * 8), true);
			}
			
			this.index += size * 8;
			
			return data;
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readExpected
	/// Desc Reads what.size bytes and compares what to the returned string
	readExpected : function (what) {
		if (this.sizeRemaining() >= what.length) {
			var data = this.read(what.length);
			
			if (data === what) {
				return true;
			} else {
				console.log("Exception: expected " + what + " but found " + data);
				return false;
			}
		} else {
			console.log("Exception: illegal operation (causes buffer overflow)");
			return null;
		}
	},
	
	/// method BinaryStream#readHeader
	/// Desc Reads a MDX header
	readHeader : function () {
		if (this.sizeRemaining() >= 8) {
			return new Header(this);
		} else {
			return null;
		}
	}
};