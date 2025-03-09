var WebGLStatic = function() {
    
    // START SHADERS
    
    var staticVS = `
    attribute vec2 a_position; 
    attribute vec2 a_texcoord; 

    varying vec2 v_texcoord;

    void main()
    {
	v_texcoord  = a_texcoord;
	gl_Position = vec4( a_position, 0.0, 1.0 );
    }
    `;

    var staticFS = `
    precision highp float;

    uniform float u_timeBase;
    varying vec2  v_texcoord;

    uniform sampler2D u_logoTexture;

    vec4 hash42(vec2 p) {
	vec4 p4 = fract(vec4(p.xyxy) * vec4(443.8975,397.2973, 491.1871, 470.7827));
	p4 += dot(p4.wzxy, p4+19.19);
	
	return fract(vec4(p4.x * p4.y, p4.x*p4.z, p4.y*p4.w, p4.x*p4.w));
    }

    float hash( float n ) {
	return fract(sin(n)*43758.5453123/ <#SEED#> );
    }

    float n( in vec3 x ) {
	vec3 p = floor(x);
	vec3 f = fract(x);
	f = f*f*(3.0-2.0*f);
	float n = p.x + p.y*57.0 + 113.0*p.z;
	float res = mix(mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
			    mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y),
			mix(mix( hash(n+113.0), hash(n+114.0),f.x),
			    mix( hash(n+170.0), hash(n+171.0),f.x),f.y),f.z);
	return res;
    }

    float nn(vec2 p) {
	float y = p.y;
	float s = u_timeBase*.7;

	float v = (n( vec3(y*.01 -s, 1., 1.0) ) + .0)
	    *(n( vec3(y*.011+1000.0-s, 1., 1.0) ) + .0)
	    *(n( vec3(y*.51+421.0-s, 1., 1.0) ) + .0);

	v*= hash42(   vec2(p.x + u_timeBase*1.1, p.y) ).x +.3 ;
	v = pow(v+.3, 3.);

	if(v<.7) v = 0.;
	return v;
    }

    void main() {
	vec2 fragCoord = v_texcoord;
	vec2 uv = fragCoord.xy;
	vec2 iResolution = vec2(892.0, 168.0);

	float linesN = 480.;
	float one_y = iResolution.y / linesN;
	uv = floor(uv*iResolution.xy/one_y)*one_y;

	float col = nn(uv);
	vec4 logo = texture2D(u_logoTexture, v_texcoord);
	gl_FragColor = vec4(logo.x +col, logo.y+col, logo.z + col, 1.0 );
    }
    `;
    staticFS = staticFS.replace("<#SEED#>", (11 * Math.round(Math.random() * 3248575) + 17) % 25 + ".");
    // END SHADERS

    var frameCount = 0;
    var currentFps = 60;
    var sinceStart = 0;

    const tolerance = 0.01;
    var fps, fpsInterval, startTime, now, then, delta;
    
    var gl = twgl.getWebGLContext(document.getElementById("gl_canvas"));
	
    var program = twgl.createProgramFromSources(gl, [staticVS, staticFS]);
    var programInfo = twgl.createProgramInfoFromProgram(gl, program);

    var header_img = new Image();
    header_img.src = "/img/textures/header.png";
    
    
    var vertices_quads = [ // BOTTOM QUAD
                           -1.0, -1.0, 0.0, // BOTTOM-LEFT
                            1.0, -1.0, 0.0, // BOTTOM-RIGHT
                           -1.0,  1.0, 0.0, // TOP-LEFT
                           // TOP QUAD
                           -1.0,  1.0, 0.0, // TOP-LEFT
                            1.0, -1.0, 0.0, // BOTTOM-RIGHT
                            1.0,  1.0, 0.0  // TOP-RIGHT
    ];
    
    var tex_quads = [ 0.0, 1.0,
		      1.0, 1.0,
		      0.0, 0.0,
		      0.0, 0.0,
		      1.0, 1.0,
		      1.0, 0.0
		    ];

    var attributes = {
        a_position: vertices_quads,
        a_texcoord: tex_quads,
    };
    
    var bufferInfo = twgl.createBufferInfoFromArrays(gl, attributes);
    
    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    
    var render = function(timeBase) {
	setTimeout(function (){
	    requestAnimationFrame(render);
	}, fpsInterval - 1000/currentFps);
	
	now = timeBase;
	delta = now - then;
	
	if (delta >= fpsInterval - tolerance) {

	    then = now - (delta % fpsInterval);
	    
            var uniforms = {
		u_timeBase: timeBase * 0.001,
            };
	    
            twgl.setUniforms(programInfo, uniforms);
            twgl.drawBufferInfo(gl, bufferInfo);
	    sinceStart = now - startTime;
	    currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100)/ 100;
	}
    }
    
    var startAnimation = function (fps) {
	fpsInterval = 1000 / fps;
	then = window.performance.now();
	startTime = then;
	render();
    }

    header_img.onload = function () {
	var tex_logo = twgl.createTexture(gl, {
	    src: header_img, mag: gl.LINEAR,
	});
	twgl.resizeCanvasToDisplaySize(gl.canvas);
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	document.getElementById("gl_canvas").style.visibility = "visible";
	startAnimation(16);
    }
};
