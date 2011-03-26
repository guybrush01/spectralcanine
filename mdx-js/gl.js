function GlState() {
	this.shaders = {};
	this.programs = [];
	this.currentProgram = null;
	this.projectionMatrix = Mat4.identity();
	this.modelviewMatrix = Mat4.identity();
	this.textures = [];
	this.currentTexture = {};
}

GlState.prototype = {
	getShader : function (file, type) {
		if (this.shaders[file] !== undefined) {
			return this.shaders[file];
		} else {
			var shader = new Shader(file, type);
			this.shaders[file] = shader;
			return shader;
		}
	},
	
	createProgram : function (vertexFile, fragmentFile) {
		var program = new Program(vertexFile, fragmentFile);
		return program;
	},
	
	useProgram : function (program) {
		var attributes;
		var keys;
		var i;
		
		if (this.currentProgram !== null) {
			attributes = this.currentProgram.attributes;
			keys = Object.keys(attributes);
				
			for (i = 0; i < keys.length; i++) {
				Gl.disableVertexAttribArray(attributes[keys[i]]);
			}
		}
	
		this.currentProgram = program;
		Gl.useProgram(program.id);
		
		attributes = this.currentProgram.attributes;
		keys = Object.keys(attributes);
			
		for (i = 0; i < keys.length; i++) {
			Gl.enableVertexAttribArray(attributes[keys[i]]);
		}
	},
	
	usedProgram : function () {
		return this.currentProgram;
	},
	
	bindProjection : function (name) {
		Gl.uniformMatrix4fv(this.currentProgram.uniforms[name], Gl.FALSE, this.projectionMatrix);
	},
	
	bindModelview : function (name) {
		Gl.uniformMatrix4fv(this.currentProgram.uniforms[name], Gl.FALSE, this.modelviewMatrix);
	},
	
	bindTransform : function (name) {
		Gl.uniformMatrix4fv(this.currentProgram.uniforms[name], Gl.FALSE, Mat4.multMatrix(this.projectionMatrix, this.modelviewMatrix));
	},
	
	ortho : function (left, right, bottom, top, nearVal, farVal) {
		this.projectionMatrix = Mat4.ortho(left, right, bottom, top, nearVal, farVal);
	},
	
	perspective : function (fovy, aspect, zNear, zFar) {
		this.projectionMatrix = Mat4.perspective(fovy, aspect, zNear, zFar);
	},
	
	translate : function (v) {
		this.modelviewMatrix = Mat4.multMatrix(this.modelviewMatrix, Mat4.translation(v));
	},
	
	rotate : function (angle, axis) {
		this.modelviewMatrix = Mat4.multMatrix(this.modelviewMatrix, Mat4.rotation(angle, axis));
	},
	
	scale : function (v) {
		this.modelviewMatrix = Mat4.multMatrix(this.modelviewMatrix, Mat4.scaling(v));
	},
	
	loadIdentity : function () {
		this.modelviewMatrix = Mat4.identity();
	},
	
	pushMatrix : function () {
		this.matrixStack.push(this.modelviewMatrix.copy());
	},
	
	popMatrix : function () {
		this.modelviewMatrix = this.matrixStack.pop();
	},
	
	getTexture : function (file) {
		if (this.textures[file]) {
			return this.textures[file];
		} else {
			var texture = new Texture(file);
			
			this.textures[file] = texture;

			return texture;
		}
	},
	
	bindTexture : function (unit, texture) {
		this.currentTexture[unit] = texture;
		Gl.activeTexture(unit);
		Gl.bindTexture(Gl.TEXTURE_2D, texture.id);
	},
	
	boundTexture : function (unit) {
		return this.currentTexture[unit];
	}
/*
	createBuffer : function () {
		var buffer = gl.createBuffer();
		
		this.buffers[this.buffers.length] = buffer;
		
		return buffer;
	},
	
	clear : function () {
		
	}
*/
};

function Shader(file, type) {
	this.file = file;
	this.type = type;
	this.source = get(file);
	this.id = Gl.createShader(type);
	
	console.log("registering shader object " + this.id);

	Gl.shaderSource(this.id, this.source);
	Gl.compileShader(this.id);
}

Shader.prototype = {
	getParameter : function (param) {
		return Gl.getShaderParameter(this.id, param);
	},
	
	getInfoLog : function () {
		return Gl.getShaderInfoLog(this.id);
	}
};

function Program(vertexFile, fragmentFile) {
	var vs = Gl.state.getShader(vertexFile, Gl.VERTEX_SHADER);
	var fs = Gl.state.getShader(fragmentFile, Gl.FRAGMENT_SHADER);
	var count;
	var location;
	var i;
	
	if (vs.getParameter(Gl.COMPILE_STATUS) && fs.getParameter(Gl.COMPILE_STATUS)) {
		this.id = Gl.createProgram();
		
		Gl.attachShader(this.id, vs.id);
		Gl.attachShader(this.id, fs.id);
		Gl.linkProgram(this.id);
		
		if (Gl.getProgramParameter(this.id, Gl.LINK_STATUS) === true) {
			this.uniforms = {};
			this.attributes = {};
			
			count = Gl.getProgramParameter(this.id, Gl.ACTIVE_UNIFORMS);
				
			for (i = 0; i < count; i++) {
				var uniform = Gl.getActiveUniform(this.id, i);
				location = Gl.getUniformLocation(this.id, uniform.name);
				this.uniforms[uniform.name] = location;
			}
			
			count = Gl.getProgramParameter(this.id, Gl.ACTIVE_ATTRIBUTES);
			
			for (i = 0; i < count; i++) {
				var attribute = Gl.getActiveAttrib(this.id, i);
				location = Gl.getAttribLocation(this.id, attribute.name);
				this.attributes[attribute.name] = location;
			}
		} else {
			console.log("Error: the program object failed to link");
		}
	} else {
		console.log("Error: one or both of the shaders failed to compile");
	}
}

Program.prototype = {
	uniform1i : function (name, v0) {
		Gl.uniform1i(this.uniforms[name], v0);
	}
	
	
	//void uniform[1234][fi](WebGLUniformLocation location, ...)
	//void uniform[1234][fi]v(WebGLUniformLocation location, ...)
	//void uniformMatrix[234]fv(WebGLUniformLocation location, GLboolean transpose, ...)
};

function Texture(file) {
	this.file = file;
	this.id = Gl.createTexture();
	this.image = new Image();
	this.image.src = file;
	
	var file = this.file;
	var id = this.id;
	
	this.image.onload = function () {
		//Gl.pixelStorei(Gl.UNPACK_FLIP_Y_WEBGL, true);
		Gl.bindTexture(Gl.TEXTURE_2D, id);
		Gl.texImage2D(Gl.TEXTURE_2D, 0, Gl.RGBA, Gl.RGBA, Gl.UNSIGNED_BYTE, this);
		Gl.texParameteri(Gl.TEXTURE_2D, Gl.TEXTURE_MAG_FILTER, Gl.LINEAR);
		Gl.texParameteri(Gl.TEXTURE_2D, Gl.TEXTURE_MIN_FILTER, Gl.LINEAR_MIPMAP_NEAREST);
		Gl.generateMipmap(Gl.TEXTURE_2D);
		console.log("loaded image " + file);
	};
}

Texture.prototype = {
	
};