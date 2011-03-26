if (typeof window.DataView === 'undefined') {
	alert("Your browser does not support DataView (Firefox?)");
}

//var debug = 0;
var canvas;
var width = 500;
var height = 400;
var Gl;
var mouse = {};
var keys = {};
var t = 0;
var dt = 0;
var active = false;
var delay = 30;
var active = false;
var interval;
var state;
var mdx;
var program;
var translation = [0, 0, -600];
var rotation = [45, 0, 90];
var scale = [1, 1, 1];
var mouse = {left: false, middle: false, right: false, pos0: {x: 0, y: 0}, pos1: {x: 0, y: 0}};
var grab = false;
var moveModifier = -translation[2] * 0.0015;

function log(text) {
	console.log(text);
}

function resizeWebGL(width, height) {
	canvas.width = width;
	canvas.height = height;
	Gl.viewport(0.0, 0.0, canvas.width, canvas.height);
	Gl.state.perspective(45.0, canvas.width / canvas.height, 0.1, 3000.0);
}

function onKeyPress(key) {
	
}

function processEvents() {
	if (keys[37]) {
		rotation[2] -= 100 * dt;
	}
	
	if (keys[39]) {
		rotation[2] += 100 * dt;
	}
	
	if (keys[38]) {
		rotation[0] += 100 * dt;
	}
	
	if (keys[40]) {
		rotation[0] -= 100 * dt;
	}

	if (keys[33]) {
		translation[2] += 500 * dt;
		moveModifier = -translation[2] * 0.0015;
	}

	if (keys[34]) {
		translation[2] -= 500 * dt;
		moveModifier = -translation[2] * 0.0015;
	}
}

function keyDown(event) {
	keys[event.keyCode] = true;
	onKeyPress(event.keyCode);
}

function keyUp(event) {
	keys[event.keyCode] = false;
}

function mouseWheel(event) {
	event.preventDefault();
	translation[2] += event.wheelDelta / 2;
	moveModifier = -translation[2] * 0.0015;
}

function mouseDown(event) {
	mouse.pos0.x = mouse.pos1.x;
	mouse.pos0.y = mouse.pos1.y;
	
	mouse.pos1.x = event.clientX;
	mouse.pos1.y = event.clientY;
	
	switch (event.button) {
		case 0: mouse.left = true; break;
		case 1: mouse.middle = true; break;
		case 2: mouse.right = true; break;
	}
	
	grab = true;
}

function mouseUp(event) {
	mouse.pos0.x = mouse.pos1.x;
	mouse.pos0.y = mouse.pos1.y;
	
	mouse.pos1.x = event.clientX;
	mouse.pos1.y = event.clientY;
	
	switch (event.button) {
		case 0: mouse.left = false; break;
		case 1: mouse.middle = false; break;
		case 2: mouse.right = false; break;
	}
	
	grab = false;
}

function disableTextSelect(event) {
	event.cancelBubble = true;
	return false;
}

function mouseMove(event) {
	mouse.pos0.x = mouse.pos1.x;
	mouse.pos0.y = mouse.pos1.y;
	
	mouse.pos1.x = event.clientX;
	mouse.pos1.y = event.clientY;
	
	if (grab === true) {
		if (mouse.left) {
			rotation[2] -= mouse.pos1.x - mouse.pos0.x;
			rotation[0] -= mouse.pos1.y - mouse.pos0.y;
		}
		
		if (mouse.right) {
			translation[0] += (mouse.pos1.x - mouse.pos0.x) * moveModifier;
			translation[1] -= (mouse.pos1.y - mouse.pos0.y) * moveModifier;
		}
	}
}

function contextMenu(event) {
	return false;
}

function animate() {
	var new_t = new Date().getTime();
	
	if (t !== 0) {
		dt = (new_t - t);
		document.title = (1000 / dt).toFixed();
		dt *= 0.001;
	}
	
	t = new_t;
}

function draw() {
	Gl.clear(Gl.COLOR_BUFFER_BIT | Gl.DEPTH_BUFFER_BIT);
	Gl.state.loadIdentity();
	
	Gl.state.translate(translation);
	Gl.state.rotate(rotation[0], [1, 0, 0]);
	Gl.state.rotate(rotation[1], [0, 1, 0]);
	Gl.state.rotate(rotation[2], [0, 0, 1]);
	Gl.state.scale(scale);
	
	Gl.state.bindModelview("modelviewMatrix");
	
	mdx.draw(program);
}

function tick() {
	processEvents();
	animate();
	draw();
}

function activate(bool) {
	if (bool === false) {
		active = false;
		clearInterval(interval);
		document.title = "Deactivated";
		document.getElementById("activate").innerHTML = "Activate";
	} else {
		active = true;
		t = new Date().getTime();
		interval = setInterval(tick, delay);
		document.getElementById("activate").innerHTML = "Deactivate";
	}
}

function test(element, file) {
	canvas = element;
	
	try { Gl = canvas.getContext("experimental-webgl"); } catch (e) {}

	if (Gl) {
		Gl.state = new GlState();
		
		mdx = new Mdx(file);
		program = Gl.state.createProgram("shader.vs", "shader.fs");
		Gl.state.useProgram(program);
		
		resizeWebGL(width, height);
		Gl.state.bindProjection("projectionMatrix");
		
		Gl.clearColor(0.45, 0.45, 0.45, 1.0);
		Gl.enable(Gl.DEPTH_TEST);
		Gl.depthFunc(Gl.LEQUAL);
		Gl.enable(Gl.CULL_FACE);
		Gl.cullFace(Gl.BACK);
		Gl.frontFace(Gl.CCW);
		
		document.onkeydown = keyDown;
		document.onkeyup = keyUp;
		canvas.onmousedown = mouseDown;
		canvas.onselectstart = disableTextSelect;
		document.onmouseup = mouseUp;
		document.onmousemove = mouseMove;
		canvas.onmousewheel = mouseWheel;
		canvas.oncontextmenu = contextMenu;
		
		active = true;
		interval = setInterval(tick, delay);
		//setTimeout("draw();", 3000);
		document.getElementById("activate").innerHTML = "Deactivate";
	} else {
		alert("Your browser does not support WebGL.");
	}
}