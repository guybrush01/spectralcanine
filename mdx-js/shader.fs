#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D texture;

varying vec3 normal;
varying vec2 texcoord;

void main () {
	vec4 color = texture2D(texture, texcoord);
	gl_FragColor = color;
}