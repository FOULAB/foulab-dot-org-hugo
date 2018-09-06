document.addEventListener("DOMContentLoaded", function(event) {
    
    if( addGLCanvas() ) {
	WebGLStatic();
	WebGLClouds();
    }
});

var addGLCanvas = function() {
    return true;
}
