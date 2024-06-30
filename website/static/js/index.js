// alert("hello");

var mainNavbarHeaderMenu = document.getElementById("main_navbar_header_menu");
var mainNavbarHeaderMenuContainer = document.getElementById("main_navbar_header_menu_container");
var mainNavbar = document.getElementById("main_navbar");
var mainNavbarHeader = document.getElementById("main_navbar_header");
var mainNavbarHeaderLogoContainer = document.getElementById("main_navbar_header_logo_container");
var mainNavbarHeaderLogo = document.getElementById("main_navbar_header_logo");
var mainNavbarHeaderTextContainer = document.getElementById("main_navbar_header_text_container");
var mainNavbarHeaderText = document.getElementById("main_navbar_header_text");
var mainNavbarHeaderNavContainer = document.getElementById("main_navbar_header_nav_container");
var mainNavbarHeaderNavSearchLogoContainer = document.getElementById("main_navbar_header_nav_search_logo_container");
var mainNavbarHeaderNavSearchLogo = document.getElementById("main_navbar_header_nav_search_logo");
var mainNavbarHeaderNavSearchText = document.getElementById("main_navbar_header_nav_search_text");
var mainNavbarHeaderNavAboutText = document.getElementById("main_navbar_header_nav_about_text");
var mainNavbarHeaderNavAccountText = document.getElementById("main_navbar_header_nav_account_text");


var width;
var navContainerHeight = 100;
var mainNavbarHeaderNavTextWidth = 100;

//navmenu
//page before scroll
width = window.innerWidth - 15;
mainNavbar.style.width = width + "px";

width = window.innerWidth - 35;
mainNavbarHeader.style.width = width + "px";
mainNavbarHeader.style.height = navContainerHeight + "px";

mainNavbarHeader.style.top = -10 + "px";

width = 100;
mainNavbarHeaderMenuContainer.style.width = width + "px";
mainNavbarHeaderMenuContainer.style.height = navContainerHeight + "px";

mainNavbarHeaderMenu.style.left = -50 + "px";
mainNavbarHeaderMenu.style.top = -50 + "px";

width = 100;
mainNavbarHeaderLogoContainer.style.width = width + "px";
mainNavbarHeaderLogoContainer.style.height = navContainerHeight + "px";

mainNavbarHeaderLogoContainer.style.left = 100 + "px";
mainNavbarHeaderLogoContainer.style.top = -100 + "px";

width = -50;
mainNavbarHeaderLogo.style.left = width + "px";
mainNavbarHeaderLogo.style.top = -50 + "px";

mainNavbarHeaderTextContainer.style.left = 200 + "px";
mainNavbarHeaderTextContainer.style.top = -225 + "px";
mainNavbarHeaderTextContainer.style.width = 250 + "px";

mainNavbarHeaderNavContainer.style.width = 500 + "px";
mainNavbarHeaderNavContainer.style.height = 25 + "px";
mainNavbarHeaderNavContainer.style.left = 550 + "px";
mainNavbarHeaderNavContainer.style.top = -315 + "px";

mainNavbarHeaderNavSearchLogoContainer.style.width = 500 + "px";
mainNavbarHeaderNavSearchLogoContainer.style.height = 25 + "px";
mainNavbarHeaderNavSearchLogoContainer.style.left = 0 + "px"; //650
mainNavbarHeaderNavSearchLogoContainer.style.top = 0 + "px";

mainNavbarHeaderNavSearchLogo.style.left = -40 + "px";
mainNavbarHeaderNavSearchLogo.style.top = -34 + "px";

mainNavbarHeaderNavSearchText.style.width = mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavSearchText.style.left = 25 + "px";
mainNavbarHeaderNavSearchText.style.top = -112 + "px";

mainNavbarHeaderNavAboutText.style.width = mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavAboutText.style.left = window.innerWidth - 825 + "px";
mainNavbarHeaderNavAboutText.style.top = -40 + "px";

mainNavbarHeaderNavAccountText.style.width = mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavAccountText.style.left = window.innerWidth - 700 + "px";
mainNavbarHeaderNavAccountText.style.top = -78.5 + "px"; //35

mainNavbarHeaderLogo.addEventListener("mouseover", function hoverOverLogo() {
    //console.log("Mouse is over the element");
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    mainNavbarHeaderText.style.color = "blue";
});
mainNavbarHeaderLogo.addEventListener("mouseout", function hoverOutLogo() {
    //console.log("Mouse is out of the element");
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    mainNavbarHeaderText.style.color = "black";
});

mainNavbarHeaderText.addEventListener("mouseover", function hoverOverLogo() {
    //console.log("Mouse is over the element");
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    mainNavbarHeaderText.style.color = "blue";
});
mainNavbarHeaderText.addEventListener("mouseout", function hoverOutLogo() {
    //console.log("Mouse is out of the element");
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    mainNavbarHeaderText.style.color = "black";
});

mainNavbarHeaderMenu.addEventListener("mouseover", function hoverOverLogo() {
    //console.log("Mouse is over the element");
    mainNavbarHeaderMenu.src = "../static/images/menuImage_highlight.png";
});
mainNavbarHeaderMenu.addEventListener("mouseout", function hoverOutLogo() {
    //console.log("Mouse is out of the element");
    mainNavbarHeaderMenu.src = "../static/images/menuImage.png";
});

function hoverOutSearch(event) {
    // Check if the event target is not the specific element or its children
    if (!mainNavbarHeaderNavSearchLogoContainer.contains(event.target)) {
        mainNavbarHeaderNavSearchLogo.src = "../static/images/searchLogo.png";
        mainNavbarHeaderNavSearchLogoContainer.style.backgroundColor = "white";
        mainNavbarHeaderNavSearchText.style.color = "grey";
        
        // Remove the mouseup event listener after it is triggered
        document.removeEventListener("mouseup", hoverOutSearch);
    }
}

mainNavbarHeaderNavSearchLogoContainer.addEventListener("mousedown", function hoverOverLogo() {
    //console.log("Mouse is over the element");
    mainNavbarHeaderNavSearchLogo.src = "../static/images/searchLogo_highlight.png"
    mainNavbarHeaderNavSearchLogoContainer.style.backgroundColor = "grey";
    mainNavbarHeaderNavSearchText.style.color = "white";

    document.addEventListener("mouseup", hoverOutSearch);
});
// mainNavbarHeaderNavSearchLogoContainer.addEventListener("mousedown", function hoverOutLogo() { 
//     //console.log("Mouse is out of the element");
//     mainNavbarHeaderNavSearchLogo.src = "../static/images/searchLogo.png"
//     mainNavbarHeaderNavSearchLogoContainer.style.backgroundColor = "white";
//     mainNavbarHeaderNavSearchText.style.color = "grey";
// });

mainNavbarHeaderNavAboutText.addEventListener("mouseover", function hoverOverLogo() {
    //console.log("Mouse is over the element");
    mainNavbarHeaderNavAboutText.style.color = "blue";
});
mainNavbarHeaderNavAboutText.addEventListener("mouseout", function hoverOutLogo() {
    //console.log("Mouse is out of the element");
    mainNavbarHeaderNavAboutText.style.color = "black";
});

mainNavbarHeaderNavAccountText.addEventListener("mouseover", function hoverOverLogo() {
    //console.log("Mouse is over the element");
    mainNavbarHeaderNavAccountText.style.color = "blue";
});
mainNavbarHeaderNavAccountText.addEventListener("mouseout", function hoverOutLogo() {
    //console.log("Mouse is out of the element");
    mainNavbarHeaderNavAccountText.style.color = "black";
});

