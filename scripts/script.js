// Save this code in redirect.js

// Ensure jQuery is loaded
if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
    document.head.appendChild(script);
}

// Function to perform redirection based on IP address
function redirectBasedOnIP() {
    $.getJSON("https://jsonip.com?callback=?", function (data) {
        if (data.ip === "97.124.68.184", "104.28.85.155") {
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
    });
}

// Call the redirection function when the document is ready
$(document).ready(function () {
    redirectBasedOnIP();
});

