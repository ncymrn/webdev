
// Function to perform redirection based on IP address
function redirectBasedOnIP() {
    $.getJSON("https://jsonip.com?callback=?", function (data) {
        if (data.ip === "38.141.146.151", "38.141.146.15", "216.46.132.38", "99.232.165.127", "175.136.119.239", "108.89.222.158",
        "189.195.192.251", "189.195.192.35", "62.182.98.157", "187.190.138.30", "103.75.11.104", "167.248.171.46", "194.124.76.104") {
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


