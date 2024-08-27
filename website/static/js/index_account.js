// nav menu
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
var mainNavbarHeaderNavAccountSettingsText = document.getElementById("main_navbar_header_nav_account_settings_text");
var mainNavbarHeaderNavAccountSettingsContainer = document.getElementById("main_navbar_header_nav_account_settings_container");
var mainNavbarHeaderNavAccountText = document.getElementById("main_navbar_header_nav_account_text");
var mainNavbarHeaderNavAccountLogin = document.getElementById("main_navbar_header_nav_account_login");
var mainNavbarHeaderNavAccountSignup = document.getElementById("main_navbar_header_nav_account_signup");
var mainNavbarHeaderNavAccountLogout = document.getElementById("main_navbar_header_nav_account_logout");

var width, height; // throw in preset values and object

const navMenu = {
    navContainerHeight: 100,
    mainNavbarHeaderNavTextWidth: 100,
    clickedMenuButtonState: false,
    clickedMoreItemsState: false,
    settingsItemsState: false
};

// var menuClick = false;

width = window.innerWidth;
mainNavbar.style.width = width + "px";

mainNavbarHeader.style.width = width + "px";
mainNavbarHeader.style.height = navMenu.navContainerHeight + "px";
mainNavbarHeader.style.top = 0 + "px";
mainNavbarHeader.style.left = 0 + "px";

width = 100;
mainNavbarHeaderMenuContainer.style.width = width + "px";
mainNavbarHeaderMenuContainer.style.height = navMenu.navContainerHeight + "px";

mainNavbarHeaderMenu.style.left = -50 + "px";
mainNavbarHeaderMenu.style.top = -40 + "px";

mainNavbarHeaderLogoContainer.style.width = 5 + "px";
mainNavbarHeaderLogoContainer.style.height = 100 + "px";

mainNavbarHeaderLogoContainer.style.left = 105 + "px";
mainNavbarHeaderLogoContainer.style.top = -230 + "px";

mainNavbarHeaderLogo.style.left = -75 + "px";
mainNavbarHeaderLogo.style.top = 85 + "px";

mainNavbarHeaderTextContainer.style.left = 160 + "px";
mainNavbarHeaderTextContainer.style.top = -275 + "px";
mainNavbarHeaderTextContainer.style.width = 250 + "px";

mainNavbarHeaderNavContainer.style.width = 500 + "px";
mainNavbarHeaderNavContainer.style.height = 25 + "px";
mainNavbarHeaderNavContainer.style.left = 580 + "px";
mainNavbarHeaderNavContainer.style.top = -300 + "px";

mainNavbarHeaderNavSearchLogoContainer.style.width = 500 + "px";
mainNavbarHeaderNavSearchLogoContainer.style.height = 25 + "px";
mainNavbarHeaderNavSearchLogoContainer.style.left = 0 + "px";
mainNavbarHeaderNavSearchLogoContainer.style.top = -15 + "px";

mainNavbarHeaderNavSearchLogo.style.left = -40 + "px";
mainNavbarHeaderNavSearchLogo.style.top = -34 + "px";

mainNavbarHeaderNavSearchText.style.width = navMenu.mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavSearchText.style.left = 25 + "px";
mainNavbarHeaderNavSearchText.style.top = -112 + "px";

mainNavbarHeaderNavAboutText.style.width = navMenu.mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavAboutText.style.left = window.innerWidth - 825 + "px";
mainNavbarHeaderNavAboutText.style.top = -36 + "px";

mainNavbarHeaderNavAccountSettingsText.style.width = 70 + "px";
mainNavbarHeaderNavAccountSettingsText.style.left = window.innerWidth - 750 + "px"; // 700
mainNavbarHeaderNavAccountSettingsText.style.top = -75 + "px"; //38

mainNavbarHeaderNavAccountSettingsContainer.style.width = 75 + "px";
mainNavbarHeaderNavAccountSettingsContainer.style.height = 100 + "px";
mainNavbarHeaderNavAccountSettingsContainer.style.left = 785 + "px";
mainNavbarHeaderNavAccountSettingsContainer.style.top = -80 + "px";
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

function openCloseAccountSettingsMenu() {
    if (navMenu.settingsItemsState == false) {
        navMenu.settingsItemsState = true;

        mainNavbarHeaderNavAccountSettingsContainer.style.display = "block";
    } else {
        navMenu.settingsItemsState = false;

        mainNavbarHeaderNavAccountSettingsContainer.style.display = "none"
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

mainNavbarHeaderMenu.addEventListener("mouseover", function hoverOverLogo() {
    mainNavbarHeaderMenu.src = menuImageHighlightSrc;
});
mainNavbarHeaderMenu.addEventListener("mouseout", function hoverOutLogo() {
    mainNavbarHeaderMenu.src = menuImageSrc;
});

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

mainNavbarHeaderNavAccountSettingsText.addEventListener("mouseover", function hoverOverLogo() {
    mainNavbarHeaderNavAccountSettingsText.style.color = "blue";
});
mainNavbarHeaderNavAccountSettingsText.addEventListener("mouseout", function hoverOutLogo() {
    mainNavbarHeaderNavAccountSettingsText.style.color = "black";
});

mainNavbarHeaderNavAccountSettingsText.addEventListener("mousedown", openCloseAccountSettingsMenu);

// side menu
var sidemenu = document.getElementById("sidemenu");
var sidemenuNotesContainer = document.getElementById("sidemenu_notes_container");
var sidemenuNotesLogo = document.getElementById("sidemenu_notes_logo");
var sidemenuRemindersContainer = document.getElementById("sidemenu_reminders_container");
var sidemenuRemindersLogo = document.getElementById("sidemenu_reminders_logo");
var sidemenuEditLabelsContainer = document.getElementById("sidemenu_edit_labels_container");
var sidemenuEditLabelsLogo = document.getElementById("sidemenu_edit_logo");
var sidemenuArchivesContainer = document.getElementById("sidemenu_archive_container");
var sidemenuArchivesLogo = document.getElementById("sidemenu_archives_logo");
var sidemenuTrashContainer = document.getElementById("sidemenu_trash_container");
var sidemenuTrashLogo = document.getElementById("sidemenu_trash_logo");

var sidemenuNotesText = document.getElementById("sidemenu_notes_text");
var sidemenuRemindersText = document.getElementById("sidemenu_reminders_text");
var sidemenuEditLabelsText = document.getElementById("sidemenu_edit_labels_text");
var sidemenuArchivesText = document.getElementById("sidemenu_archives_text");
var sidemenuTrashText = document.getElementById("sidemenu_trash_text");

const sideMenuOpen = {
    widthSideMenu: 180,
    widthLogoSidemenu: 200, // image is loaded in first then css is applied (scaling down)
    heightSidemenu: window.innerHeight - navMenu.navContainerHeight,
    topSideMenu: 90,
    topSideMenuItem: -70,
    leftSidemenu: -48,
    widthTextSideMenu: 100,
    leftTextSideMenu: 100,
    topTextSideMenu: -180
    // boxShadowSideMenu: "10px 0 5px -2px #888"
};

const sideMenuClosed = {
    widthSideMenu: 50,
    leftSideMenu: 25
};

sidemenu.style.width = sideMenuClosed.widthSideMenu + "px";
sidemenu.style.height = sideMenuOpen.heightSidemenu + "px";
sidemenu.style.top = sideMenuOpen.topSideMenu + "px";
// sidemenu.style.boxShadow = "none";

sidemenuNotesContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuNotesContainer.style.height = 50 + "px";
sidemenuNotesLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuNotesLogo.style.top = sideMenuOpen.topSideMenuItem + "px";
sidemenuNotesLogo.style.left = sideMenuOpen.leftSidemenu + "px";
//sidemenu_notes_logo.style.height = 100 + "px";

sidemenuRemindersContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuRemindersContainer.style.height = 50 + "px";
sidemenuRemindersContainer.style.left = sideMenuClosed.leftSideMenu + "px";
sidemenuRemindersLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuRemindersLogo.style.top = sideMenuOpen.topSideMenuItem + "px";
sidemenuRemindersLogo.style.left = sideMenuOpen.leftSidemenu + "px";

sidemenuEditLabelsContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuEditLabelsContainer.style.height = 50 + "px";
sidemenuEditLabelsContainer.style.left = sideMenuClosed.leftSideMenu + "px";
sidemenuEditLabelsLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuEditLabelsLogo.style.top = sideMenuOpen.topSideMenuItem + "px";
sidemenuEditLabelsLogo.style.left = sideMenuOpen.leftSidemenu + "px";

sidemenuArchivesContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuArchivesContainer.style.height = 50 + "px";
sidemenuArchivesContainer.style.left = sideMenuClosed.leftSideMenu + "px";
sidemenuArchivesLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuArchivesLogo.style.top = sideMenuOpen.topSideMenuItem + "px";
sidemenuArchivesLogo.style.left = sideMenuOpen.leftSidemenu + "px";

sidemenuTrashContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuTrashContainer.style.height = 50 + "px";
sidemenuTrashContainer.style.left = sideMenuClosed.leftSideMenu + "px";
sidemenuTrashLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuTrashLogo.style.top = sideMenuOpen.topSideMenuItem + "px";
sidemenuTrashLogo.style.left = sideMenuOpen.leftSidemenu + "px";

sidemenuNotesText.style.width = sideMenuOpen.widthTextSideMenu + "px";
sidemenuNotesText.style.left = sideMenuOpen.leftTextSideMenu + "px";
sidemenuNotesText.style.top = sideMenuOpen.topTextSideMenu + "px";

sidemenuRemindersText.style.width = sideMenuOpen.widthTextSideMenu + "px";
sidemenuRemindersText.style.left = sideMenuOpen.leftTextSideMenu + "px";
sidemenuRemindersText.style.top = sideMenuOpen.topTextSideMenu + "px";

sidemenuEditLabelsText.style.width = sideMenuOpen.widthTextSideMenu + "px";
sidemenuEditLabelsText.style.left = sideMenuOpen.leftTextSideMenu + "px";
sidemenuEditLabelsText.style.top = sideMenuOpen.topTextSideMenu + "px";

sidemenuArchivesText.style.width = sideMenuOpen.widthTextSideMenu + "px";
sidemenuArchivesText.style.left = sideMenuOpen.leftTextSideMenu + "px";
sidemenuArchivesText.style.top = sideMenuOpen.topTextSideMenu + "px";

sidemenuTrashText.style.width = sideMenuOpen.widthTextSideMenu + "px";
sidemenuTrashText.style.left = sideMenuOpen.leftTextSideMenu + "px";
sidemenuTrashText.style.top = sideMenuOpen.topTextSideMenu + "px";

sidemenuNotesText.style.display = "none";
sidemenuRemindersText.style.display = "none";
sidemenuEditLabelsText.style.display = "none";
sidemenuArchivesText.style.display = "none";
sidemenuTrashText.style.display = "none";

function openCloseSideMenu() {
    if (navMenu.clickedMenuButtonState == false) {
        //sidemenu.removeEventListener("mouseover", hoverOverSideMenu);
        navMenu.clickedMenuButtonState = true;

        sidemenuNotesText.style.display = "block";
        sidemenuRemindersText.style.display = "block";
        sidemenuEditLabelsText.style.display = "block";
        sidemenuArchivesText.style.display = "block";
        sidemenuTrashText.style.display = "block";

        // sidemenu.style.boxShadow = sideMenuOpen.boxShadowSideMenu;
        sidemenu.style.width = sideMenuOpen.widthSideMenu + "px";
    }
    else {
        //sidemenu.addEventListener("mouseover", hoverOverSideMenu);
        navMenu.clickedMenuButtonState = false;

        sidemenuNotesText.style.display = "none";
        sidemenuRemindersText.style.display = "none";
        sidemenuEditLabelsText.style.display = "none";
        sidemenuArchivesText.style.display = "none";
        sidemenuTrashText.style.display = "none";

        // sidemenu.style.boxShadow = "none";
        sidemenu.style.width = sideMenuClosed.widthSideMenu + "px";
    }
    //console.log(navMenu.clickedMenuButtonState);
}

sidemenuNotesText.addEventListener("mouseover", function hoverOverSideMenu() {
    sidemenuNotesText.style.color = "blue";
});

sidemenuNotesText.addEventListener("mouseout", function hoverOverSideMenu() {
    sidemenuNotesText.style.color = "black";
});

sidemenuNotesLogo.addEventListener("mouseover", function hoverOverSideMenu() {
    sidemenuNotesText.style.color = "blue";
});

sidemenuNotesLogo.addEventListener("mouseout", function hoverOverSideMenu() {
    sidemenuNotesText.style.color = "black";
});

sidemenuRemindersText.addEventListener("mouseover", function hoverOverSideMenu() {
    sidemenuRemindersText.style.color = "blue";
});

sidemenuRemindersText.addEventListener("mouseout", function hoverOverSideMenu() {
    sidemenuRemindersText.style.color = "black";
});

sidemenuRemindersLogo.addEventListener("mouseover", function hoverOverSideMenu() {
    sidemenuRemindersText.style.color = "blue";
});

sidemenuRemindersLogo.addEventListener("mouseout", function hoverOverSideMenu() {
    sidemenuRemindersText.style.color = "black";
});
//
sidemenuEditLabelsText.addEventListener("mouseover", function hoverOverSideMenu() {
    sidemenuEditLabelsText.style.color = "blue";
});

sidemenuEditLabelsText.addEventListener("mouseout", function hoverOverSideMenu() {
    sidemenuEditLabelsText.style.color = "black";
});

sidemenuEditLabelsLogo.addEventListener("mouseover", function hoverOverSideMenu() {
    sidemenuEditLabelsText.style.color = "blue";
});

sidemenuEditLabelsLogo.addEventListener("mouseout", function hoverOverSideMenu() {
    sidemenuEditLabelsText.style.color = "black";
});
//
sidemenuArchivesText.addEventListener("mouseover", function hoverOverSideMenu() {
    sidemenuArchivesText.style.color = "blue";
});

sidemenuArchivesText.addEventListener("mouseout", function hoverOverSideMenu() {
    sidemenuArchivesText.style.color = "black";
});

sidemenuArchivesLogo.addEventListener("mouseover", function hoverOverSideMenu() {
    sidemenuArchivesText.style.color = "blue";
});

sidemenuArchivesLogo.addEventListener("mouseout", function hoverOverSideMenu() {
    sidemenuArchivesText.style.color = "black";
});
//
sidemenuTrashText.addEventListener("mouseover", function hoverOverSideMenu() {
    sidemenuTrashText.style.color = "blue";
});

sidemenuTrashText.addEventListener("mouseout", function hoverOverSideMenu() {
    sidemenuTrashText.style.color = "black";
});

sidemenuTrashLogo.addEventListener("mouseover", function hoverOverSideMenu() {
    sidemenuTrashText.style.color = "blue";
});

sidemenuTrashLogo.addEventListener("mouseout", function hoverOverSideMenu() {
    sidemenuTrashText.style.color = "black";
});

mainNavbarHeaderMenuContainer.addEventListener("mousedown", openCloseSideMenu);

sidemenuNotesLogo.addEventListener("mousedown", openCloseSideMenu);

sidemenuRemindersLogo.addEventListener("mousedown", openCloseSideMenu);

sidemenuEditLabelsLogo.addEventListener("mousedown", openCloseSideMenu);

sidemenuArchivesLogo.addEventListener("mousedown", openCloseSideMenu);

sidemenuTrashLogo.addEventListener("mousedown", openCloseSideMenu);

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
    if (window.location.pathname === "/notes/logged_in") {
        sidemenuNotesText.addEventListener('click', (event) => handleLinkClick(event, '/notes/logged_in'));
    }

    // Event handler for reminders link
    if (window.location.pathname === "/reminders") {
        sidemenuRemindersText.addEventListener('click', (event) => handleLinkClick(event, '/reminders'));
    }

    // Event handler for edit labels link
    if (window.location.pathname === "/labels") {
        sidemenuEditLabelsText.addEventListener('click', (event) => handleLinkClick(event, '/labels'));
    }

    // Event handler for archives link
    if (window.location.pathname === "/archives") {
        sidemenuArchivesText.addEventListener('click', (event) => handleLinkClick(event, '/archives'));
    }

    // Event handler for trash link
    if (window.location.pathname === "/trash") {
        sidemenuTrashText.addEventListener('click', (event) => handleLinkClick(event, '/trash'));
    }
});
//console.log(window.location.pathname);