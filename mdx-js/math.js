Object.prototype.copy = function () {
	var newObj = (this instanceof Array) ? [] : {};
	var i;
		
	for (i in this) {
		if (i !== 'copy' && this[i] && typeof this[i] === "object") {
			newObj[i] = this[i].copy();
		} else {
			newObj[i] = this[i];
		}
	}

	return newObj;
};

var PI = Math.PI;
var TWO_PI = 2.0 * PI;
var HALF_PI = 0.5 * PI;
var PI_OVER_360 = PI / 360.0;
var DEG_TO_RAD = PI / 180.0;
var HALF_DEG_TO_RAD = DEG_TO_RAD / 2.0;
var RAD_TO_DEG = 180.0 / PI;

var Vec3 = {};
var Mat4 = {};

function radians(degrees) {
	return DEG_TO_RAD * degrees;
}


Vec3.dot = function (a, b) {
	return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]);
};

Vec3.length = function (a) {
	return Math.sqrt(Vec3.dot(a, a));
};

Vec3.length2 = function (a) {
	return Vec3.dot(a, a);
};

Vec3.normalize = function (a) {
	var v = new Float32Array(a);
	var l = Vec3.length2(a);

	if (0.0 !== l && 1.0 !== l) {
		l = 1.0 / Math.sqrt(l);
		v[0] *= l;
		v[1] *= l;
		v[2] *= l;
	}

	return v;
};

Mat4.identity = function () {
	return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
};

Mat4.multMatrix = function (a, b) {
	var m = new Float32Array(16);
	var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	var b00 = b[0], b01 = b[1], b02 = b[2], b03 = b[3];
	var b10 = b[4], b11 = b[5], b12 = b[6], b13 = b[7];
	var b20 = b[8], b21 = b[9], b22 = b[10], b23 = b[11];
	var b30 = b[12], b31 = b[13], b32 = b[14], b33 = b[15];
	
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
};

Mat4.translation = function (v) {
	return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, v[0], v[1], v[2], 1]);
};

Mat4.rotation = function (angle, axis) {
	var m = new Float32Array(16);
	var rad = radians(angle);
	var c = Math.cos(rad);
	var s = Math.sin(rad);
	var t = 1 - c;
	axis = Vec3.normalize(axis);

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
	
	return m;
};

Mat4.scaling = function (v) {
	return new Float32Array([v[0], 0, 0, 0, 0, v[1], 0, 0, 0, 0, v[2], 0, 0, 0, 0, 1]);
};

Mat4.ortho = function (left, right, bottom, top, nearVal, farVal) {
	var m = new Float32Array(16);
	var rl = right - left;
	var tb = top - bottom;
	var fn = farVal - nearVal;

	m[0] = 2.0 / rl;
	m[5] = 2.0 / tb;
	m[10] = -2.0 / fn;
	m[12] = -(right + left) / rl;
	m[13] = -(top + bottom) / tb;
	m[14] = -(farVal + nearVal) / fn;

	return m;
};

Mat4.frustum = function (left, right, bottom, top, nearVal, farVal) {
	var m = new Float32Array(16);
	var rl = right - left;
	var tb = top - bottom;
	var fn = farVal - nearVal;

	m[0] = (nearVal * 2) / rl;
	m[5] = (nearVal * 2) / tb;
	m[8] = (right + left) / rl;
	m[9] = (top + bottom) / tb;
	m[10] = -(farVal + nearVal) / fn;
	m[11] = -1;
	m[14] = -(farVal * nearVal * 2) / fn;

	return m;
};

Mat4.perspective = function (fovy, aspect, zNear, zFar) {
	var right = zNear * Math.tan(fovy * PI_OVER_360);
	var top = right / aspect;

	return Mat4.frustum(-right, right, -top, top, zNear, zFar);
};