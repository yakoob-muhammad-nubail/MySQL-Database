// nav menu
var loggedOutWindow = document.getElementById("logged_out_window");
var loggedOutWindowHeader = document.getElementById("logged_out_window_header");
var loggedOutWindowLoginOption = document.getElementById("logged_out_window_login_option");
var loggedOutWindowSignupOption = document.getElementById("logged_out_window_signup_option");

loggedOutWindow.style.width = 295 + "px";
loggedOutWindow.style.height = 210 + "px";
loggedOutWindow.style.left = window.innerWidth / 2 - 147.5 + "px";
loggedOutWindow.style.top = window.innerHeight / 2 - 105 + "px";

loggedOutWindowHeader.style.width = 120 + "px";
loggedOutWindowHeader.style.height = 25 + "px";
loggedOutWindowHeader.style.left = 70 + "px";
loggedOutWindowHeader.style.top = 0 + "px";

loggedOutWindowLoginOption.style.width = 61 + "px";
loggedOutWindowLoginOption.style.height = 25 + "px";
loggedOutWindowLoginOption.style.left = 0 + "px";
loggedOutWindowLoginOption.style.top = 50 + "px";

loggedOutWindowSignupOption.style.width = 75 + "px";
loggedOutWindowSignupOption.style.height = 25 + "px";
loggedOutWindowSignupOption.style.left = 185 + "px";
loggedOutWindowSignupOption.style.top = 7 + "px";

loggedOutWindowLoginOption.addEventListener("mouseover", function hoverOverLogo() {
    loggedOutWindowLoginOption.style.color = "blue";
});
loggedOutWindowLoginOption.addEventListener("mouseout", function hoverOutLogo() {
    loggedOutWindowLoginOption.style.color = "black";
});

loggedOutWindowSignupOption.addEventListener("mouseover", function hoverOverLogo() {
    loggedOutWindowSignupOption.style.color = "blue";
});
loggedOutWindowSignupOption.addEventListener("mouseout", function hoverOutLogo() {
    loggedOutWindowSignupOption.style.color = "black";
});