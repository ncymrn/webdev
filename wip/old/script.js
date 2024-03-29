function redirectBasedOnIP() {
    $.getJSON("https://jsonip.com?callback=?", function (data) {
        var blockedIPs = ["108.89.222.158","216.46.132.38","99.232.165.127","175.136.119.239","194.124.76.104","189.195.192.251","189.195.192.35",
        "62.182.98.157","103.75.11.104","187.190.138.30","167.248.171.46","38.141.146.151", "65.154.226.166",
        "72.136.120.255", "72.136.110.34", "72.136.111.106", "38.141.146.15", "99.234.127.7", "200.68.151.72", "99.234.127.7", "65.154.226.168",
        "98.47.115.244", "189.195.192.227" ];
        if (blockedIPs.includes(data.ip)) {
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); 
        }
    });
}

// Check if jQuery is already loaded
if (typeof jQuery == 'undefined') {
    // jQuery is not loaded, so dynamically load it
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
    script.onload = function () {
        // jQuery has loaded, call the redirect function
        redirectBasedOnIP();
    };
    document.head.appendChild(script);
} else {
    // jQuery is already loaded, call the redirect function
    redirectBasedOnIP();
}
