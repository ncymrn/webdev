<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<script>
$.getJSON("http://jsonip.com?callback=?", function (data) {
if (data.ip == "81.154.193.151") {
window.location.replace("https://www.google.com");
}
});
</script>