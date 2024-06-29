// alert("hello");

var mainNavbar = document.getElementById("main_navbar");
var mainNavbarHeader = document.getElementById("main_navbar_header");
var mainNavbarHeaderLogoContainer = document.getElementById("main_navbar_header_logo_container");
var mainNavbarHeaderLogo = document.getElementById("main_navbar_header_logo");
var mainNavbarHeaderTextContainer = document.getElementById("main_navbar_header_text_container");
var mainNavbarHeaderText = document.getElementById("main_navbar_header_text");
var width;

width = window.innerWidth - 15;
mainNavbar.style.width = width + "px";
width = window.innerWidth - 35;
mainNavbarHeader.style.width = width + "px"
mainNavbarHeader.style.height = 150 + "px"
width = 180;
mainNavbarHeaderLogoContainer.style.width = width + "px";
mainNavbarHeaderLogoContainer.style.height = 150 + "px";
width = -70;
mainNavbarHeaderLogo.style.left = width + "px";
mainNavbarHeaderLogo.style.top = -50 + "px";
mainNavbarHeaderTextContainer.style.left = 200 + "px";
mainNavbarHeaderTextContainer.style.top = -155 + "px";
mainNavbarHeaderTextContainer.style.width = 250 + "px";

mainNavbarHeaderLogo.addEventListener("mouseover", function hoverOverLogo() {
    //console.log("Mouse is over the element");
    mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
});
mainNavbarHeaderLogo.addEventListener("mouseout", function hoverOutLogo() {
    //console.log("Mouse is out of the element");
    mainNavbarHeaderLogo.src = "../static/images/logo250.png";
});

mainNavbarHeaderText.addEventListener("mouseover", function hoverOverLogo() {
    //console.log("Mouse is over the element");
    mainNavbarHeaderText.style.color = "blue";
});
mainNavbarHeaderText.addEventListener("mouseout", function hoverOutLogo() {
    //console.log("Mouse is out of the element");
    mainNavbarHeaderText.style.color = "black";
});

