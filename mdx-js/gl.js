var PI = Math.PI;
var TWO_PI = 2.0 * PI;
var HALF_PI = 0.5 * PI;
var PI_OVER_360 = PI / 360.0;
var DEG_TO_RAD = PI / 180.0;
var HALF_DEG_TO_RAD = DEG_TO_RAD / 2.0;
var RAD_TO_DEG = 180.0 / PI;

Object.prototype.copy = function () {
	var newObj = (this instanceof Array) ? [] : {};
	
	for (var i in this) {
		if (i !== 'copy' && this[i] && typeof this[i] === "object") {
			newObj[i] = this[i].copy();
		} else {
			newObj[i] = this[i];
		}
	}

	return newObj;
};

var projectionMatrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
var modelviewMatrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

var matrixStack = {};
	
var textures = {};
var shaders = {};
var programs = {};
var meshes = {};

function clamp(x, minVal, maxVal) {
	if (x > maxVal) {
		return maxVal;
	} else if (x < minVal) {
		return minVal;
	} else {
		return x;
	}
}

function radians(degrees) {
	return DEG_TO_RAD * degrees;
}

function dot(x, y) {
	return (x[0] * y[0] + x[1] * y[1] + x[2] * y[2]);
}

function length2(x) {
	return dot(x, x);
}

function normalize(x) {
	var v = new Float32Array(x);
	var l = length2(v);

	if (0.0 !== l && 1.0 !== l) {
		l = 1.0 / Math.sqrt(l);
		v[0] *= l;
		v[1] *= l;
		v[2] *= l;
	}

	return v;
}

function multMatrix(x, y) {
	var m = new Float32Array(16);
	var a00 = x[0], a01 = x[1], a02 = x[2], a03 = x[3];
	var a10 = x[4], a11 = x[5], a12 = x[6], a13 = x[7];
	var a20 = x[8], a21 = x[9], a22 = x[10], a23 = x[11];
	var a30 = x[12], a31 = x[13], a32 = x[14], a33 = x[15];
	var b00 = y[0], b01 = y[1], b02 = y[2], b03 = y[3];
	var b10 = y[4], b11 = y[5], b12 = y[6], b13 = y[7];
	var b20 = y[8], b21 = y[9], b22 = y[10], b23 = y[11];
	var b30 = y[12], b31 = y[13], b32 = y[14], b33 = y[15];
	
	m[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
	m[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
	m[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
	m[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
	m[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
	m[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
	m[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
	m[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
	m[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
	m[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
	m[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
	m[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
	m[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
	m[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
	m[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
	m[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
	
	return m;
}

function pushMatrix() {
	matrixStack.push(modelviewMatrix.copy());
}

function popMatrix() {
	modelviewMatrix = matrixStack.pop();
}

function ortho(left, right, bottom, top, nearVal, farVal) {
	var p = projectionMatrix;
	var rl = right - left;
	var tb = top - bottom;
	var fn = farVal - nearVal;

	p[0] = 2.0 / rl;
	p[5] = 2.0 / tb;
	p[10] = -2.0 / fn;
	p[12] = - (right + left) / rl;
	p[13] = - (top + bottom) / tb;
	p[14] = - (farVal + nearVal) / fn;

	return p;
}

function frustum(left, right, bottom, top, nearVal, farVal) {
	var p = projectionMatrix;
	var rl = right - left;
	var tb = top - bottom;
	var fn = farVal - nearVal;
	
	p[0] = (nearVal * 2) / rl;
	p[5] = (nearVal * 2) / tb;
	p[8] = (right + left) / rl;
	p[9] = (top + bottom) / tb;
	p[10] = -(farVal + nearVal) / fn;
	p[11] = -1;
	p[14] = -(farVal * nearVal * 2) / fn;
	
	return p;
}

function perspective(fovy, aspect, zNear, zFar)
{
	var right = zNear * Math.tan(fovy * PI_OVER_360);
	var top = right / aspect;
	
	return frustum(-right, right, -top, top, zNear, zFar);
}

function loadIdentity() {
	modelviewMatrix.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}

function translate(x, y, z) {
	var m = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
	modelviewMatrix = multMatrix(modelviewMatrix, m);
}

function scale(x, y, z) {
	var m = new Float32Array([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]);
	modelviewMatrix = multMatrix(modelviewMatrix, m);
}

function rotate(a, x, y, z) {
	var m = new Float32Array(16);
	var rad = radians(a);
	var c = Math.cos(rad);
	var s = Math.sin(rad);
	var t = 1 - c;
	var axis = normalize([x, y, z]);

	m[0] = t * axis[0] * axis[0] + c;
	m[1] = t * axis[0] * axis[1] - s * axis[2];
	m[2] = t * axis[0] * axis[1] + s * axis[1];
	m[4] = t * axis[0] * axis[1] + s * axis[2];
	m[5] = t * axis[1] * axis[1] + c;
	m[6] = t * axis[1] * axis[2] - s * axis[0];
	m[8] = t * axis[0] * axis[2] - s * axis[1];
	m[9] = t * axis[1] * axis[2] + s * axis[0];
	m[10] = t * axis[2] * axis[2] + c;
	m[15] = 1;

	modelviewMatrix = multMatrix(modelviewMatrix, m);
}

function getTexture(name) {
	if (textures[name]) {
		return textures[name];
	} else {
		var texture = gl.createTexture();
    
		texture.image = new Image();
		texture.image.onload = function () {
			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
			gl.generateMipmap(gl.TEXTURE_2D);

			gl.bindTexture(gl.TEXTURE_2D, null);
		};

		texture.image.src = name;
		
		textures[name] = texture;
		
		return texture;
	}
}

function getShader(name, type) {
	if (shaders[name]) {
		return shaders[name];
	} else {
		var source = get(name);
		
		if (source) {
			var shader;
			
			shader = gl.createShader(type);
			gl.shaderSource(shader, source);
			gl.compileShader(shader);
			
			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
				console.log(gl.getShaderInfoLog(shader));
			}
			
			shaders[name] = shader;
			return shader;
		}
	}
	
	return null;
}

function createProgram(vertex, fragment) {
	var program;
	
	var vs = getShader(vertex, gl.VERTEX_SHADER);
	var fs = getShader(fragment, gl.FRAGMENT_SHADER);
	
	if (vs && fs) {
		program = gl.createProgram();
		
		gl.attachShader(program, vs);
		gl.attachShader(program, fs);
		gl.linkProgram(program);

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.log("could not link " + vertex + " and " + fragment + "");
		}
		
		programs[programs.length] = program;
	}

	return program;
}