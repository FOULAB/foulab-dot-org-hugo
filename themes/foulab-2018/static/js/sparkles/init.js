document.addEventListener("DOMContentLoaded", function(event) {
    
    if( addGLCanvas() ) {
	WebGLStatic();
	if( screen.width > 800 )
	{
	    WebGLClouds();
	}
    }
});

var addGLCanvas = function() {
    return true;
}
