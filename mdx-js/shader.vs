uniform mat4 projectionMatrix;
uniform mat4 modelviewMatrix;
uniform mat4 transformMatrix;

attribute vec3 in_vertex;
attribute vec3 in_normal;
attribute vec2 in_texcoord;

varying vec3 normal;
varying vec2 texcoord;

void main () {
	normal = in_normal;
	texcoord = in_texcoord;
	
	gl_Position = projectionMatrix * (modelviewMatrix * vec4(in_vertex, 1.0));
}