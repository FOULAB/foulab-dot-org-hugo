function handleStatus() {
    if (JSON.parse(this.responseText)["status"] === "OPEN") {
	document.getElementById("status").style.visibility = "visible";
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var a = new XMLHttpRequest();
    a.addEventListener("load", handleStatus);
    a.open("GET", "https://foulab.org/status/");
    a.send();
});
