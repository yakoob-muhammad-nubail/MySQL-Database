var logoContainer = document.getElementById("logo_container");
var logoImage = document.getElementById("logo_image");
var logoText = document.getElementById("logo_text");
var accountText = document.getElementById("account_text");
var aboutText = document.getElementById("about_text");
var loginText = document.getElementById("login_text");
var signupText = document.getElementById("signup_text");
var logoutText = document.getElementById("logout_text");

logoContainer.style.left = window.innerWidth / 2 - 350 + "px";
logoContainer.style.top = window.innerHeight / 2 - 275 + "px";

logoText.style.left = window.innerWidth / 2 - 150 + "px";
logoText.style.top = window.innerHeight / 2 - 225 + "px";

accountText.style.width = 95 + "px";
accountText.style.height = 25 + "px";
accountText.style.left = window.innerWidth / 2 - 47.5 + "px";
accountText.style.top = 170 + "px";

aboutText.style.width = 65 + "px";
aboutText.style.height = 25 + "px";
aboutText.style.left = window.innerWidth / 2 - 32.5 + "px";
aboutText.style.top = 160 + "px";

loginText.style.width = 60 + "px";
loginText.style.height = 25 + "px";
loginText.style.left = window.innerWidth / 2 - 30 + "px";
loginText.style.top = 150 + "px";

signupText.style.width = 175 + "px";
signupText.style.height = 25 + "px";
signupText.style.left = window.innerWidth / 2 - 87.5 + "px";
signupText.style.top = 140 + "px";

logoutText.style.width = 80 + "px";
logoutText.style.height = 25 + "px";
logoutText.style.left = window.innerWidth / 2 - 40 + "px";
logoutText.style.top = 130 + "px";

logoImage.addEventListener("mouseover", function hoverOverLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    logoText.style.color = "blue";
});

logoImage.addEventListener("mouseout", function hoverOutLogo() {
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
    console.log("hit");
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