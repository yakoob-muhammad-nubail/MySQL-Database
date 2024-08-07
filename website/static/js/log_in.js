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
    console.log("hit");
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

//form
var loginForm = document.getElementById("login_form");
var loginFormEmailTitle = document.getElementById("login_form_email_title");
var loginFormEmailInput = document.getElementById("login_form_email_input");
var loginFormPasswordTitle = document.getElementById("login_form_password_title");
var loginFormPasswordResetTitle = document.getElementById("login_form_password_reset_title");
var loginFormPasswordInput = document.getElementById("login_form_password_input");
var loginFormSubmitButton = document.getElementById("login_form_submit_button");

loginForm.style.width = 290 + "px";
loginForm.style.height = 250 + "px";
loginForm.style.left = window.innerWidth / 2 - 125 + "px";
loginForm.style.top = window.innerHeight / 2 - 125 + "px";

loginFormEmailTitle.style.width = 250 + "px";
loginFormEmailTitle.style.height = 250 + "px";
loginFormEmailTitle.style.left = -5 + "px";
loginFormEmailTitle.style.top = 0 + "px";

loginFormEmailInput.style.width = 250 + "px";
loginFormEmailInput.style.height = 25 + "px";
loginFormEmailInput.style.left = 0 + "px";
loginFormEmailInput.style.top = 2 + "px";

loginFormPasswordTitle.style.width = 250 + "px";
loginFormPasswordTitle.style.height = 250 + "px";
loginFormPasswordTitle.style.left = -5 + "px";
loginFormPasswordTitle.style.top = 20 + "px";

loginFormPasswordResetTitle.style.width = 250 + "px";
loginFormPasswordResetTitle.style.height = 250 + "px";
loginFormPasswordResetTitle.style.left = 12 + "px";
loginFormPasswordResetTitle.style.top = 18 + "px";

loginFormPasswordInput.style.width = 250 + "px";
loginFormPasswordInput.style.height = 25 + "px";
loginFormPasswordInput.style.left = 0 + "px";
loginFormPasswordInput.style.top = 22 + "px";

loginFormSubmitButton.style.width = 250 + "px";
loginFormSubmitButton.style.height = 35 + "px";
loginFormSubmitButton.style.left = 0 + "px";
loginFormSubmitButton.style.top = 60 + "px";


