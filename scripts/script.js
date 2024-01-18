
// Function to perform redirection based on IP address
function redirectBasedOnIP() {
    $.getJSON("https://jsonip.com?callback=?", function (data) {
        if (data.ip === "97.124.68.184", "81.154.193.151") {
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
    });
}

// Check if jQuery is already loaded, if not, load it dynamically
if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
    script.onload = redirectBasedOnIP; // Run the redirection function after jQuery is loaded
    document.head.appendChild(script);
} else {
    redirectBasedOnIP(); // jQuery is already loaded, so run the redirection function
}


