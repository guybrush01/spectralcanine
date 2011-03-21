function MDXJS(canvas, file) {
	this.mouse = {};
	this.keys = {};
	this.t = 0;
	this.dt = 0;
	this.active = false;
	this.delay = 40;
		
	try { this.gl = canvas.getContext("experimental-webgl"); } catch (e) {}

	if (this.gl) {
		this.state = new GLES2State();
		this.mdx = new MDX(file);
		
		this.gl.clearColor(0.45, 0.45, 0.45, 1.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.depthFunc(this.gl.LEQUAL);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.cullFace(this.gl.BACK);
		this.gl.frontFace(this.gl.CCW);
		this.active = true;
		this.interval = setInterval(MDXJS.tick, this.delay);
	} else {
		alert("Your browser does not support WebGL.");
	}
}

MDXJS.prototype = {
	tick : function () {
		
	},
	
	draw : function () {
		
	},
	
	animate : function () {
		
	},
	
	active : function (bool) {
		
	}
};