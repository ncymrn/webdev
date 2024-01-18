
function redirectBasedOnIP() {
    $.getJSON("https://jsonip.com?callback=?", function (data) {
        if (data.ip === ) {
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); 
        }
    });
}

// Check if jQuery is already loaded, if not, load it dynamically
if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
    script.onload = redirectBasedOnIP; 
    document.head.appendChild(script);
} else {
    redirectBasedOnIP(); // jQuery is already loaded
}


