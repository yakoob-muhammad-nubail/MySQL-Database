// could format for thinner header
// all css setup and eventlisteners
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
var mainNavbarHeaderNavAccountText = document.getElementById("main_navbar_header_nav_account_text");

var width, height; // throw in preset values and object
var navContainerHeight = 100;
var mainNavbarHeaderNavTextWidth = 100;
var clickedMenuButtonState = false;
// var menuClick = false;

width = window.innerWidth;
mainNavbar.style.width = width + "px";

mainNavbarHeader.style.width = width + "px";
mainNavbarHeader.style.height = navContainerHeight + "px";

mainNavbarHeader.style.top = -10 + "px";
mainNavbarHeader.style.left = -10 + "px";

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
mainNavbarHeaderNavSearchLogoContainer.style.left = 0 + "px";
mainNavbarHeaderNavSearchLogoContainer.style.top = 0 + "px";

mainNavbarHeaderNavSearchLogo.style.left = -40 + "px";
mainNavbarHeaderNavSearchLogo.style.top = -34 + "px";

mainNavbarHeaderNavSearchText.style.width = mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavSearchText.style.left = 25 + "px";
mainNavbarHeaderNavSearchText.style.top = -112 + "px";

mainNavbarHeaderNavAboutText.style.width = mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavAboutText.style.left = window.innerWidth - 825 + "px";
mainNavbarHeaderNavAboutText.style.top = -35 + "px";

mainNavbarHeaderNavAccountText.style.width = mainNavbarHeaderNavTextWidth + "px";
mainNavbarHeaderNavAccountText.style.left = window.innerWidth - 700 + "px";
mainNavbarHeaderNavAccountText.style.top = -73 + "px"; //38

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
    mainNavbarHeaderMenu.src = "../static/images/menuImage_highlight.png";
});
mainNavbarHeaderMenu.addEventListener("mouseout", function hoverOutLogo() {
    mainNavbarHeaderMenu.src = "../static/images/menuImage.png";
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

// window.addEventListener("click", function printMousePos(event) {
//     document.body.textContent = "clientX " + event.clientX + " - clientY: " + event.clientY;
// });

//window.addEventListener("resize", function () { this.alert("hello") });

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
    heightSidemenu: window.innerHeight - navContainerHeight,
    topSidemenu: -70,
    leftSidemenu: -60,
    widthTextSideMenu: 100,
    leftTextSideMenu: 75,
    topTextSideMenu: -198
    // boxShadowSideMenu: "10px 0 5px -2px #888"
};

const sideMenuClosed = {
    widthSideMenu: 50
};

sidemenu.style.width = sideMenuClosed.widthSideMenu + "px";
sidemenu.style.height = sideMenuOpen.heightSidemenu + "px";
sidemenu.style.top = 90 + "px";
// sidemenu.style.boxShadow = "none";

sidemenuNotesContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuNotesContainer.style.height = 50 + "px";
sidemenuNotesLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuNotesLogo.style.top = sideMenuOpen.topSidemenu + "px";
sidemenuNotesLogo.style.left = sideMenuOpen.leftSidemenu + "px";
//sidemenu_notes_logo.style.height = 100 + "px";

sidemenuRemindersContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuRemindersContainer.style.height = 50 + "px";
sidemenuRemindersLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuRemindersLogo.style.top = sideMenuOpen.topSidemenu + "px";
sidemenuRemindersLogo.style.left = sideMenuOpen.leftSidemenu + "px";

sidemenuEditLabelsContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuEditLabelsContainer.style.height = 50 + "px";
sidemenuEditLabelsLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuEditLabelsLogo.style.top = sideMenuOpen.topSidemenu + "px";
sidemenuEditLabelsLogo.style.left = sideMenuOpen.leftSidemenu + "px";

sidemenuArchivesContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuArchivesContainer.style.height = 50 + "px";
sidemenuArchivesLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuArchivesLogo.style.top = sideMenuOpen.topSidemenu + "px";
sidemenuArchivesLogo.style.left = sideMenuOpen.leftSidemenu + "px";

sidemenuTrashContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuTrashContainer.style.height = 50 + "px";
sidemenuTrashLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuTrashLogo.style.top = sideMenuOpen.topSidemenu + "px";
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
    if (clickedMenuButtonState == false) {
        //sidemenu.removeEventListener("mouseover", hoverOverSideMenu);
        clickedMenuButtonState = true;
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
        clickedMenuButtonState = false;
        sidemenuNotesText.style.display = "none";
        sidemenuRemindersText.style.display = "none";
        sidemenuEditLabelsText.style.display = "none";
        sidemenuArchivesText.style.display = "none";
        sidemenuTrashText.style.display = "none";

        // sidemenu.style.boxShadow = "none";
        sidemenu.style.width = sideMenuClosed.widthSideMenu + "px";
    }
    //console.log(clickedMenuButtonState);
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

//
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

// notepad
var notepad = document.getElementById("notepad");
var unclickedEntryBox = document.getElementById("unclicked_entry_box");
var unclickedEntryBoxNote = document.getElementById("unclicked_entry_box_note");
var unclickedEntryBoxNoteText = document.getElementById("unclicked_entry_box_note_text");
var unclickedEntryBoxNoteNewList = document.getElementById("unclicked_entry_box_note_new_list");
var unclickedEntryBoxNoteNewNoteDrawing = document.getElementById("unclicked_entry_box_note_new_note_drawing");
var unclickedEntryBoxNoteNewNoteImage = document.getElementById("unclicked_entry_box_note_new_note_image");

const notepadClose = {
    notepadLeft: window.innerWidth / 2 - 250,
    notepadTop: 110,
    notepadWidth: 500,
    notepadHeight: 50,
    entryBoxWidth: 480,
    entryBoxHeight: 40,
    entryBoxLeft: 10,
    entryBoxTop: -11,
    entryBoxNoteWidth: 460,
    entryBoxNoteHeight: 30,
    entryBoxNoteLeft: 10,
    entryBoxNoteTop: 5,
    entryBoxNoteTextWidth: 340,
    entryBoxNoteTextHeight: 16,
    entryBoxNoteTextLeft: -10,
    entryBoxNoteTextTop: 8,
    newListLeft: 250,
    newListTop: -115,
    newNoteDrawingLeft: 90,
    newNoteDrawingTop: -115,
    newListNoteImageLeft: 340,
    newListNoteImageTop: -320
}
notepad.style.left = notepadClose.notepadLeft + "px";
notepad.style.top = notepadClose.notepadTop + "px";
notepad.style.width = notepadClose.notepadWidth + "px";
notepad.style.height = notepadClose.notepadHeight + "px";

unclickedEntryBox.style.left = notepadClose.entryBoxLeft + "px";
unclickedEntryBox.style.top = notepadClose.entryBoxTop + "px";
unclickedEntryBox.style.width = notepadClose.entryBoxWidth + "px";
unclickedEntryBox.style.height = notepadClose.entryBoxHeight + "px";

unclickedEntryBoxNote.style.left = notepadClose.entryBoxNoteLeft + "px";
unclickedEntryBoxNote.style.top = notepadClose.entryBoxNoteTop + "px";
unclickedEntryBoxNote.style.width = notepadClose.entryBoxNoteWidth + "px";
unclickedEntryBoxNote.style.height = notepadClose.entryBoxNoteHeight + "px";

unclickedEntryBoxNoteText.style.left = notepadClose.entryBoxNoteTextLeft + "px";
unclickedEntryBoxNoteText.style.top = notepadClose.entryBoxNoteTextTop + "px";
unclickedEntryBoxNoteText.style.width = notepadClose.entryBoxNoteTextWidth + "px";
unclickedEntryBoxNoteText.style.height = notepadClose.entryBoxNoteTextHeight + "px";

unclickedEntryBoxNoteNewList.style.left = notepadClose.newListLeft + "px";
unclickedEntryBoxNoteNewList.style.top = notepadClose.newListTop + "px";

unclickedEntryBoxNoteNewNoteDrawing.style.left = notepadClose.newNoteDrawingLeft + "px";
unclickedEntryBoxNoteNewNoteDrawing.style.top = notepadClose.newNoteDrawingTop + "px";

unclickedEntryBoxNoteNewNoteImage.style.left = notepadClose.newListNoteImageLeft + "px";
unclickedEntryBoxNoteNewNoteImage.style.top = notepadClose.newListNoteImageTop + "px";

