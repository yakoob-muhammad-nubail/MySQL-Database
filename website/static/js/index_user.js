// nav menu
// var mainNavbarHeaderMenu = document.getElementById("main_navbar_header_menu");
var mainNavbar = document.getElementById("main_navbar");
var mainNavbarHeader = document.getElementById("main_navbar_header");
var mainNavbarHeaderLogoContainer = document.getElementById("main_navbar_header_logo_container");
var mainNavbarHeaderLogo = document.getElementById("main_navbar_header_logo");
var mainNavbarHeaderTextContainer = document.getElementById("main_navbar_header_text_container");
var mainNavbarHeaderText = document.getElementById("main_navbar_header_text");
var mainNavbarHeaderNavContainer = document.getElementById("main_navbar_header_nav_container");
var mainNavbarHeaderNavAboutText = document.getElementById("main_navbar_header_nav_about_text");
var mainNavbarHeaderNavAccountSettingsText = document.getElementById("main_navbar_header_nav_account_settings_text");
var mainNavbarHeaderNavAccountSettingsContainer = document.getElementById("main_navbar_header_nav_account_settings_container");
var mainNavbarHeaderNavAccountText = document.getElementById("main_navbar_header_nav_account_text");
var mainNavbarHeaderNavAccountLogin = document.getElementById("main_navbar_header_nav_account_login");
var mainNavbarHeaderNavAccountSignup = document.getElementById("main_navbar_header_nav_account_signup");
var mainNavbarHeaderNavAccountLogout = document.getElementById("main_navbar_header_nav_account_logout");

var width, height; // throw in preset values and object

const navMenu = {
    navContainerHeight: 90,
    mainNavbarHeaderNavTextWidth: 100,
    clickedMenuButtonState: false,
    clickedMoreItemsState: false,
    clickedSettingsState: false
};

width = window.innerWidth;
mainNavbar.style.width = width + "px";

mainNavbarHeader.style.width = width + "px";
mainNavbarHeader.style.height = navMenu.navContainerHeight + "px";

mainNavbarHeader.style.top = 0 + "px";
mainNavbarHeader.style.left = 0 + "px";

width = window.innerWidth;
mainNavbar.style.width = width + "px";

mainNavbarHeader.style.width = width + "px";
mainNavbarHeader.style.height = navMenu.navContainerHeight + "px";
mainNavbarHeader.style.top = 0 + "px";
mainNavbarHeader.style.left = 0 + "px";

mainNavbarHeaderLogoContainer.style.width = 5 + "px";
mainNavbarHeaderLogoContainer.style.height = 100 + "px";
mainNavbarHeaderLogoContainer.style.left = 10 + "px";
mainNavbarHeaderLogoContainer.style.top = -140 + "px";

mainNavbarHeaderLogo.style.left = -75 + "px";
mainNavbarHeaderLogo.style.top = 85 + "px";

mainNavbarHeaderTextContainer.style.left = 65 + "px";
mainNavbarHeaderTextContainer.style.top = -185 + "px";
mainNavbarHeaderTextContainer.style.width = 250 + "px";
mainNavbarHeaderTextContainer.style.color = "black";

mainNavbarHeaderNavContainer.style.width = 142 + "px";
mainNavbarHeaderNavContainer.style.height = 25 + "px";
mainNavbarHeaderNavContainer.style.left = window.innerWidth - 170 + "px"; //315
mainNavbarHeaderNavContainer.style.top = -225 + "px";

mainNavbarHeaderNavAboutText.style.left = 0 + "px"; //window.innerWidth - 825 
mainNavbarHeaderNavAboutText.style.top = 2.5 + "px";

mainNavbarHeaderNavAccountSettingsText.style.width = 66 + "px";
mainNavbarHeaderNavAccountSettingsText.style.left = 75 + "px"; // window.innerWidth - 750 
mainNavbarHeaderNavAccountSettingsText.style.top = -36 + "px"; //38

mainNavbarHeaderNavAccountSettingsContainer.style.width = 66 + "px";
mainNavbarHeaderNavAccountSettingsContainer.style.height = 100 + "px";
mainNavbarHeaderNavAccountSettingsContainer.style.left = 75 + "px";
mainNavbarHeaderNavAccountSettingsContainer.style.top = -50 + "px";
mainNavbarHeaderNavAccountSettingsContainer.style.display = "none";

mainNavbarHeaderNavAccountText.style.width = navMenu.mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavAccountText.style.left = 0 + "px";
mainNavbarHeaderNavAccountText.style.top = 0 + "px";

mainNavbarHeaderNavAccountLogin.style.width = 50 + "px";
mainNavbarHeaderNavAccountLogin.style.left = 10 + "px";
mainNavbarHeaderNavAccountLogin.style.top = 0 + "px";

mainNavbarHeaderNavAccountSignup.style.width = 65 + "px";
mainNavbarHeaderNavAccountSignup.style.top = 0 + "px";
mainNavbarHeaderNavAccountSignup.style.left = 2 + "px";
mainNavbarHeaderNavAccountSignup.style.top = 0 + "px";

mainNavbarHeaderNavAccountLogout.style.width = 60 + "px";
mainNavbarHeaderNavAccountLogout.style.top = 0 + "px";
mainNavbarHeaderNavAccountLogout.style.left = 5 + "px";
mainNavbarHeaderNavAccountLogout.style.top = 0 + "px";

function openCloseAccountMenu() {
    console.log("hit");

    if (navMenu.clickedSettingsState == false) {
        navMenu.clickedSettingsState = true;

        mainNavbarHeaderNavAccountSettingsContainer.style.display = "block";
    }
    else {
        navMenu.clickedSettingsState = false;

        mainNavbarHeaderNavAccountSettingsContainer.style.display = "none";
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

mainNavbarHeaderNavAccountSettingsText.addEventListener("mouseover", function hoverOverLogo() {
    mainNavbarHeaderNavAccountSettingsText.style.color = "blue";
});
mainNavbarHeaderNavAccountSettingsText.addEventListener("mouseout", function hoverOutLogo() {
    mainNavbarHeaderNavAccountSettingsText.style.color = "black";
});

mainNavbarHeaderNavAccountSettingsText.addEventListener("mousedown", openCloseAccountMenu);

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle page loading via AJAX
    function handleLinkClick(event, url) {
        event.preventDefault(); // Prevent the default link behavior


        if (window.location.pathname === url) {
            // If the URL is the same, do nothing
            return;
        }

        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById('parent_container').innerHTML = html;
                // Update the URL without reloading the page
                window.history.pushState(null, '', url);
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Event handler for notes link
    if (window.location.pathname === "/about") {
        mainNavbarHeaderNavAboutText.addEventListener('click', (event) => handleLinkClick(event, '/notes/logged_in'));
    }

    // Event handler for reminders link
    if (window.location.pathname === "/account") {
        mainNavbarHeaderNavAccountText.addEventListener('click', (event) => handleLinkClick(event, '/reminders'));
    }

    // Event handler for edit labels link
    if (window.location.pathname === "/login") {
        mainNavbarHeaderNavAccountLogin.addEventListener('click', (event) => handleLinkClick(event, '/labels'));
    }

    // Event handler for archives link
    if (window.location.pathname === "/sign_up") {
        mainNavbarHeaderNavAccountSignup.addEventListener('click', (event) => handleLinkClick(event, '/archives'));
    }

    // Event handler for trash link
    if (window.location.pathname === "/logout") {
        mainNavbarHeaderNavAccountLogout.addEventListener('click', (event) => handleLinkClick(event, '/trash'));
    }
});