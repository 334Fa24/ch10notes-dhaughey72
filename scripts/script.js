/*
  Student Name: Dakotah Haughey
  File Name: script.js
  Date: 9/24
*/

//Global variables
var video = document.getElementById("example");
var videoSource = getElementById("vid-src");
var descriptionsSource = getElementById("despsrc");

//hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

//Functions to display the burpees example video
function burpees() {
    videoSrc.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpees-descriptions.vtt";
    video.stayle.display = "block";
    video.load();
}

//function to display the plank example video
function plank() {
    videoSrc.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-descriptions.vtt";
    video.stayle.display = "block";
    video.load();
}

//function to display the mountin climbers example video
function plank() {
    videoSrc.src = "media/mc.mp4";
    descriptionSource.src = "media/mountain-descriptions.vtt";
    video.stayle.display = "block";
    video.load();
}

//function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChildnodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}