var appLogo = document.getElementById("app_logo");
var logoImageContainer = document.getElementById("logo_image_container");
var logoImage = document.getElementById("logo_image");
var logoTextContainer = document.getElementById("logo_text_container");
var logoText = document.getElementById("logo_text");
var optionsContainer = document.getElementById("options_container");
var accountText = document.getElementById("account_text");
var aboutText = document.getElementById("about_text");
var loginText = document.getElementById("login_text");
var signupText = document.getElementById("signup_text");
var logoutText = document.getElementById("logout_text");



appLogo.style.left = window.innerWidth / 2 - window.innerWidth / 4 + "px";
appLogo.style.top = window.innerHeight / 2 - 275 + "px";

optionsContainer.style.left = window.innerWidth / 2 - window.innerWidth / 4 + "px";
optionsContainer.style.top = window.innerHeight / 2 - 250 + "px";

accountText.style.left = window.innerWidth / 2 - 45.5 + "px";

aboutText.style.left = window.innerWidth / 2 - 127.5 + "px";

loginText.style.left = window.innerWidth / 2 - 195 + "px";

signupText.style.left = window.innerWidth / 2 - 312.5 + "px";

logoutText.style.left = window.innerWidth / 2 - 442.5 + "px";

logoImageContainer.addEventListener("mouseover", function hoverOverLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    logoText.style.color = "blue";
});

logoImageContainer.addEventListener("mouseout", function hoverOutLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    logoText.style.color = "black";
});

logoText.addEventListener("mouseover", function hoverOverLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    logoText.style.color = "blue";
});

logoText.addEventListener("mouseout", function hoverOutLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    logoText.style.color = "black";
});

accountText.addEventListener("mouseover", function hoverOverLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    accountText.style.color = "blue";
});

accountText.addEventListener("mouseout", function hoverOutLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    accountText.style.color = "black";
});

aboutText.addEventListener("mouseover", function hoverOverLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    aboutText.style.color = "blue";
});

aboutText.addEventListener("mouseout", function hoverOutLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    aboutText.style.color = "black";
});

loginText.addEventListener("mouseover", function hoverOverLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    loginText.style.color = "blue";
});

loginText.addEventListener("mouseout", function hoverOutLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    loginText.style.color = "black";
});

signupText.addEventListener("mouseover", function hoverOverLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    signupText.style.color = "blue";
});

signupText.addEventListener("mouseout", function hoverOutLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    signupText.style.color = "black";
});

logoutText.addEventListener("mouseover", function hoverOverLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    logoutText.style.color = "blue";
});

logoutText.addEventListener("mouseout", function hoverOutLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    logoutText.style.color = "black";
});