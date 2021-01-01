

var WebGLClouds = function() {
    // START SHADERS
    // VERTEX SHADER
    var cloudsVS = `
    attribute vec2 a_position; 
    attribute vec2 a_texcoord; 

    varying vec2 v_texcoord; 

    void main() 
    { 
	v_texcoord  = a_texcoord;
	gl_Position = vec4( a_position, 0.0, 1.0 ); 
    }
    `;

    // FRAGMENT SHADER
    var cloudsFS = `
    precision highp float;
    
    uniform float u_timeBase;
    uniform float u_retio;
    varying vec2  v_texcoord;
    
    const float pi = 3.14159;
    const float tau = 6.28318;

    vec2 random2( vec2 p ) {
	return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*(43758.5453+ <#SEED#> ));
    }

    const float timeDiv = 50000.;

    float voronoi(vec2 uv)
    {
	vec2 cell = floor(uv);
	vec2 frac = fract(uv);
	float ret = 1.0;
	float change = u_timeBase / timeDiv;
	
	for (int i = -1; i <= 1; i++) {
	    for (int j = -1; j <=1; j++) {
		vec2 neighbor = vec2(float(i), float(j));
		vec2 rand = random2(cell + neighbor);
		float t = u_timeBase *floor(sin(u_timeBase));
		rand = 0.5 + 0.5 * sin(change * 4. + 2. * pi * rand);
		vec2 toCenter = neighbor + rand - frac;
		ret = min(ret, max(abs(toCenter.x), abs(toCenter.y)));
	    }
	}
	
	return ret;
    }
    
    vec2 gradient(in vec2 x, float thickness)
    {
	vec2 h = vec2(thickness, 0.);
	return vec2(voronoi(x + h.xy) - voronoi(x - h.xy),
		    voronoi(x + h.yx) - voronoi(x - h.yx)) / (.9 * h.x);
    }

    void main()
    {
	vec2 fragCoord = v_texcoord;
	
	vec2 uv = fragCoord.xy;
	vec2 u_resolution = vec2(480.0, 360.0/ u_retio);

	uv.x *= u_resolution.x / u_resolution.y;

	uv *= 12.;

	float val = voronoi(uv) / length(gradient(uv, .0235));
	float colVal = pow(val, 3.) *3.9;

	gl_FragColor.rgb = mix( vec3(0.86+colVal, 0.86+colVal, 0.86+colVal),
			     vec3(0.6, 0.6, 0.6),
				clamp(0.5, 0.5, 0.5));
	gl_FragColor.a = 1.0;

    }
    `;
    cloudsFS = cloudsFS.replace("<#SEED#>", (11 * Math.round(Math.random() * 3248575) + 17) % 25 + ".");
    // END SHADERS
    var frameCount = 0;
    var sinceStart = 0;
    var currentFps = 60;
    
    const tolerance = 0.01;
    var fps, fpsInterval, startTime, now, then, delta;
    


    var gl_clouds = twgl.getWebGLContext(document.getElementById("gl_canvas_bg"));
	
    var program_clouds = twgl.createProgramFromSources(gl_clouds, [cloudsVS, cloudsFS]);
    var programInfo_clouds = twgl.createProgramInfoFromProgram(gl_clouds, program_clouds);
	
    
    var vertices_quads_clouds = [ // BOTTOM QUAD
                           -1.0, -1.0, 0.0, // BOTTOM-LEFT
                            1.0, -1.0, 0.0, // BOTTOM-RIGHT
                           -1.0,  1.0, 0.0, // TOP-LEFT
                           // TOP QUAD
                           -1.0,  1.0, 0.0, // TOP-LEFT
                            1.0, -1.0, 0.0, // BOTTOM-RIGHT
                            1.0,  1.0, 0.0  // TOP-RIGHT
    ];
    
    var tex_quads_clouds = [ 0.0, 1.0,
		      1.0, 1.0,
		      0.0, 0.0,
		      0.0, 0.0,
		      1.0, 1.0,
		      1.0, 0.0
		    ];

    var attributes_clouds = {
        a_position: vertices_quads_clouds,
        a_texcoord: tex_quads_clouds,
    };


    var eventWindowResize = function() {
    	twgl.resizeCanvasToDisplaySize(gl_clouds.canvas);
    	gl_clouds.viewport(0, 0, gl_clouds.canvas.width, gl_clouds.canvas.height);

    }
    window.addEventListener("resize", eventWindowResize);
    
    var bufferInfo_clouds = twgl.createBufferInfoFromArrays(gl_clouds, attributes_clouds);
    
		   
    gl_clouds.useProgram(programInfo_clouds.program);
    twgl.setBuffersAndAttributes(gl_clouds, programInfo_clouds, bufferInfo_clouds);
    gl_clouds.viewport(0, 0, gl_clouds.canvas.width, gl_clouds.canvas.height);
    var render_clouds = function(timeBase_clouds) {
	setTimeout(function (){
	    requestAnimationFrame(render_clouds);
	}, fpsInterval - 1000/currentFps);
	
	now = timeBase_clouds;
	delta = now - then;
	
	if (delta >= fpsInterval - tolerance) {

	    then = now - (delta % fpsInterval);

            var uniforms_clouds = {
		u_timeBase: timeBase_clouds,
		u_retio: gl_clouds.canvas.width/ gl_clouds.canvas.height,
            };
	    console.log(gl_clouds.canvas.width/ gl_clouds.canvas.height);
            twgl.setUniforms(programInfo_clouds, uniforms_clouds);
            twgl.drawBufferInfo(gl_clouds, bufferInfo_clouds);
	    sinceStart = now - startTime;
	    currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100)/ 100;
	}
    }

    var startAnimation = function(fps) {
	fpsInterval = 1000 / fps;
	then = window.performance.now();
	startTime = then;
	render_clouds();
    }
    
    twgl.resizeCanvasToDisplaySize(gl_clouds.canvas);
    gl_clouds.viewport(0, 0, gl_clouds.canvas.width, gl_clouds.canvas.height);
    startAnimation(20);	
};
