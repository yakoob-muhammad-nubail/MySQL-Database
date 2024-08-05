// nav menu
// var mainNavbarHeaderMenu = document.getElementById("main_navbar_header_menu");
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
var mainNavbarHeaderNavAccountContainer = document.getElementById("main_navbar_header_nav_account_container");
var mainNavbarHeaderNavAccountLogin = document.getElementById("main_navbar_header_nav_account_login");
var mainNavbarHeaderNavAccountSignup = document.getElementById("main_navbar_header_nav_account_signup");
var mainNavbarHeaderNavAccountLogout = document.getElementById("main_navbar_header_nav_account_logout");

var width, height; // throw in preset values and object


const navMenu = {
    navContainerHeight: 90,
    mainNavbarHeaderNavTextWidth: 100,
    clickedMenuButtonState: false,
    clickedMoreItemsState: false,
    clickedAccountState: false
};

width = window.innerWidth;
mainNavbar.style.width = width + "px";

mainNavbarHeader.style.width = width + "px";
mainNavbarHeader.style.height = navMenu.navContainerHeight + "px";

mainNavbarHeader.style.top = 0 + "px";
mainNavbarHeader.style.left = 0 + "px";

width = 100;
mainNavbarHeaderMenuContainer.style.width = width + "px";
mainNavbarHeaderMenuContainer.style.height = navMenu.navContainerHeight + "px";

// mainNavbarHeaderMenu.style.left = -50 + "px";
// mainNavbarHeaderMenu.style.top = -50 + "px";

width = 100;
mainNavbarHeaderLogoContainer.style.width = width + "px";
mainNavbarHeaderLogoContainer.style.height = navMenu.navContainerHeight + "px";

mainNavbarHeaderLogoContainer.style.left = 0 + "px";
mainNavbarHeaderLogoContainer.style.top = -90 + "px";

width = -50;
mainNavbarHeaderLogo.style.left = width + "px";
mainNavbarHeaderLogo.style.top = -50 + "px";

mainNavbarHeaderTextContainer.style.left = 100 + "px";
mainNavbarHeaderTextContainer.style.top = -208 + "px";
mainNavbarHeaderTextContainer.style.width = 250 + "px";

mainNavbarHeaderNavContainer.style.width = 500 + "px";
mainNavbarHeaderNavContainer.style.height = 25 + "px";
mainNavbarHeaderNavContainer.style.left = 580 + "px";
mainNavbarHeaderNavContainer.style.top = -300 + "px";

mainNavbarHeaderNavSearchLogoContainer.style.width = 500 + "px";
mainNavbarHeaderNavSearchLogoContainer.style.height = 25 + "px";
mainNavbarHeaderNavSearchLogoContainer.style.left = 0 + "px";
mainNavbarHeaderNavSearchLogoContainer.style.top = 0 + "px";

mainNavbarHeaderNavSearchLogo.style.left = -40 + "px";
mainNavbarHeaderNavSearchLogo.style.top = -34 + "px";

mainNavbarHeaderNavSearchText.style.width = navMenu.mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavSearchText.style.left = 25 + "px";
mainNavbarHeaderNavSearchText.style.top = -112 + "px";

mainNavbarHeaderNavAboutText.style.width = navMenu.mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavAboutText.style.left = window.innerWidth - 825 + "px";
mainNavbarHeaderNavAboutText.style.top = -40 + "px";

mainNavbarHeaderNavAccountText.style.width = navMenu.mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavAccountText.style.left = window.innerWidth - 700 + "px";
mainNavbarHeaderNavAccountText.style.top = -78 + "px"; //38

mainNavbarHeaderNavAccountContainer.style.width = 75 + "px";
mainNavbarHeaderNavAccountContainer.style.height = 75 + "px";
mainNavbarHeaderNavAccountContainer.style.left = 835 + "px";
mainNavbarHeaderNavAccountContainer.style.top = -80 + "px";
mainNavbarHeaderNavAccountContainer.style.display = "none";

mainNavbarHeaderNavAccountLogin.style.width = 50 + "px";

mainNavbarHeaderNavAccountSignup.style.width = 65 + "px";
mainNavbarHeaderNavAccountSignup.style.top = -10 + "px";

mainNavbarHeaderNavAccountLogout.style.width = 60 + "px";
mainNavbarHeaderNavAccountLogout.style.top = -20 + "px";

function openCloseAccountMenu() {
    console.log("hit");

    if (navMenu.clickedAccountState == false) {
        navMenu.clickedAccountState = true;

        mainNavbarHeaderNavAccountContainer.style.display = "block";
    }
    else {
        navMenu.clickedAccountState = false;

        mainNavbarHeaderNavAccountContainer.style.display = "none";
    }
}

mainNavbarHeaderLogo.addEventListener("mouseover", function hoverOverLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    mainNavbarHeaderText.style.color = "blue";
});
mainNavbarHeaderLogo.addEventListener("mouseout", function hoverOutLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    mainNavbarHeaderText.style.color = "black";
});

mainNavbarHeaderText.addEventListener("mouseover", function hoverOverLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250_highlight.png";
    mainNavbarHeaderText.style.color = "blue";
});
mainNavbarHeaderText.addEventListener("mouseout", function hoverOutLogo() {
    // mainNavbarHeaderLogo.src = "../static/images/logo250.png";
    mainNavbarHeaderText.style.color = "black";
});

// mainNavbarHeaderMenu.addEventListener("mouseover", function hoverOverLogo() {
//     mainNavbarHeaderMenu.src = "../static/images/menuImage_highlight.png";
// });
// mainNavbarHeaderMenu.addEventListener("mouseout", function hoverOutLogo() {
//     mainNavbarHeaderMenu.src = "../static/images/menuImage.png";
// });

mainNavbarHeaderNavAboutText.addEventListener("mouseover", function hoverOverLogo() {
    mainNavbarHeaderNavAboutText.style.color = "blue";
});
mainNavbarHeaderNavAboutText.addEventListener("mouseout", function hoverOutLogo() {
    mainNavbarHeaderNavAboutText.style.color = "black";
});

mainNavbarHeaderNavAccountText.addEventListener("mouseover", function hoverOverLogo() {
    mainNavbarHeaderNavAccountText.style.color = "blue";
});
mainNavbarHeaderNavAccountText.addEventListener("mouseout", function hoverOutLogo() {
    mainNavbarHeaderNavAccountText.style.color = "black";
});

mainNavbarHeaderNavAccountLogin.addEventListener("mouseover", function hoverOverLogo() {
    mainNavbarHeaderNavAccountLogin.style.color = "blue";
});
mainNavbarHeaderNavAccountLogin.addEventListener("mouseout", function hoverOutLogo() {
    mainNavbarHeaderNavAccountLogin.style.color = "black";
});

mainNavbarHeaderNavAccountSignup.addEventListener("mouseover", function hoverOverLogo() {
    mainNavbarHeaderNavAccountSignup.style.color = "blue";
});
mainNavbarHeaderNavAccountSignup.addEventListener("mouseout", function hoverOutLogo() {
    mainNavbarHeaderNavAccountSignup.style.color = "black";
});

mainNavbarHeaderNavAccountLogout.addEventListener("mouseover", function hoverOverLogo() {
    mainNavbarHeaderNavAccountLogout.style.color = "blue";
});
mainNavbarHeaderNavAccountLogout.addEventListener("mouseout", function hoverOutLogo() {
    mainNavbarHeaderNavAccountLogout.style.color = "black";
});

mainNavbarHeaderNavAccountText.addEventListener("mousedown", openCloseAccountMenu);

//log out window
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
loggedOutWindowHeader.style.left = 0 + "px";
loggedOutWindowHeader.style.top = 0 + "px";

loggedOutWindowLoginOption.style.width = 61 + "px";
loggedOutWindowLoginOption.style.height = 25 + "px";
loggedOutWindowLoginOption.style.left = 0 + "px";
loggedOutWindowLoginOption.style.top = 50 + "px";

loggedOutWindowSignupOption.style.width = 75 + "px";
loggedOutWindowSignupOption.style.height = 25 + "px";
loggedOutWindowSignupOption.style.left = 180 + "px";
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