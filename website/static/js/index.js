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

var stringEntry = "";
var stringTitle = "";
var currentString = "";
var stringType = "ENTRY";
var caseState = "LOWER";
var shiftCase = false;
var switchCase = false;
var numberCase = false;
var counter1 = 0;
var line1 = 1; // if the line count exceeds two then throw in scroll wheel
var counter2 = 0;
var line2 = 1;

const navMenu = {
    navContainerHeight: 90,
    mainNavbarHeaderNavTextWidth: 100,
    clickedMenuButtonState: false,
    clickedMoreItemsState: false
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
mainNavbarHeaderMenu.style.top = -50 + "px";

width = 100;
mainNavbarHeaderLogoContainer.style.width = width + "px";
mainNavbarHeaderLogoContainer.style.height = navMenu.navContainerHeight + "px";

mainNavbarHeaderLogoContainer.style.left = 100 + "px";
mainNavbarHeaderLogoContainer.style.top = -90 + "px";

width = -50;
mainNavbarHeaderLogo.style.left = width + "px";
mainNavbarHeaderLogo.style.top = -50 + "px";

mainNavbarHeaderTextContainer.style.left = 200 + "px";
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
    heightSidemenu: window.innerHeight - navMenu.navContainerHeight,
    topSidemenu: -70,
    leftSidemenu: -48,
    widthTextSideMenu: 100,
    leftTextSideMenu: 100,
    topTextSideMenu: -198
    // boxShadowSideMenu: "10px 0 5px -2px #888"
};

const sideMenuClosed = {
    widthSideMenu: 50,
    leftSideMenu: 25
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
sidemenuRemindersContainer.style.left = sideMenuClosed.leftSideMenu + "px";
sidemenuRemindersLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuRemindersLogo.style.top = sideMenuOpen.topSidemenu + "px";
sidemenuRemindersLogo.style.left = sideMenuOpen.leftSidemenu + "px";

sidemenuEditLabelsContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuEditLabelsContainer.style.height = 50 + "px";
sidemenuEditLabelsContainer.style.left = sideMenuClosed.leftSideMenu + "px";
sidemenuEditLabelsLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuEditLabelsLogo.style.top = sideMenuOpen.topSidemenu + "px";
sidemenuEditLabelsLogo.style.left = sideMenuOpen.leftSidemenu + "px";

sidemenuArchivesContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuArchivesContainer.style.height = 50 + "px";
sidemenuArchivesContainer.style.left = sideMenuClosed.leftSideMenu + "px";
sidemenuArchivesLogo.style.width = sideMenuOpen.widthLogoSidemenu + "px";
sidemenuArchivesLogo.style.top = sideMenuOpen.topSidemenu + "px";
sidemenuArchivesLogo.style.left = sideMenuOpen.leftSidemenu + "px";

sidemenuTrashContainer.style.width = sideMenuOpen.widthSideMenu + "px";
sidemenuTrashContainer.style.height = 50 + "px";
sidemenuTrashContainer.style.left = sideMenuClosed.leftSideMenu + "px";
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

// notepad closed
var notepad = document.getElementById("notepad");
var unclickedEntryBox = document.getElementById("unclicked_entry_box");
var unclickedEntryBoxNote = document.getElementById("unclicked_entry_box_note");
var unclickedEntryBoxNoteText = document.getElementById("unclicked_entry_box_note_text");
var unclickedEntryBoxNoteNewList = document.getElementById("unclicked_entry_box_note_new_list");
var unclickedEntryBoxNoteNewNoteDrawing = document.getElementById("unclicked_entry_box_note_new_note_drawing");
var unclickedEntryBoxNoteNewNoteImage = document.getElementById("unclicked_entry_box_note_new_note_image");

const notepadClose = {
    notepadLeft: window.innerWidth / 2 - 250,
    notepadTop: 90,
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

//notepad open
// var string = "";
// var temp = "";
// var method = -1;
// var entryTextSelected = false;
// var titleTextSelected = false;
// var caseState = "LOWER";
// var switchCase = false;
// var shiftCase = false;
// var numberCase = false;

// var e = 0;
// var charCode = 0;

var clickedEntryBox = document.getElementById("clicked_entry_box");
var clickedEntryBoxTitleText = document.getElementById("clicked_entry_box_title_text");
var clickedEntryBoxPin = document.getElementById("clicked_entry_box_pin");
var clickedEntryBoxEntryText = document.getElementById("clicked_entry_box_entry_text");
var clickedEntryBoxBellShare = document.getElementById("clicked_entry_box_bell_share");
var clickedEntryBoxShare = document.getElementById("clicked_entry_box_share");
var clickedEntryBoxBackground = document.getElementById("clicked_entry_box_background");
var clickedEntryBoxImage = document.getElementById("clicked_entry_box_image");
var clickedEntryBoxArchive = document.getElementById("clicked_entry_box_archive");
var clickedEntryBoxMore = document.getElementById("clicked_entry_box_more");
var clickedEntryBoxMoreItems = document.getElementById("clicked_entry_box_more_items");
var clickedEntryBoxMoreAddLabel = document.getElementById("clicked_entry_box_more_add_label");
var clickedEntryBoxMoreAddDrawing = document.getElementById("clicked_entry_box_more_add_drawing");
var clickedEntryBoxMoreShowCheckboxes = document.getElementById("clicked_entry_box_more_show_checkboxes");
var clickedEntryBoxUndo = document.getElementById("clicked_entry_box_undo");
var clickedEntryBoxRedo = document.getElementById("clicked_entry_box_redo");
var clickedEntryBoxClose = document.getElementById("clicked_entry_box_close");

const notepadOpen = {
    notepadWidth: notepadClose.notepadWidth,
    notepadHeight: 125,
    titleTextLeft: 10,
    titleTextWidth: 430,
    titleTextHeight: 16,
    pinLeft: 375,
    pinTop: -125,
    entryTextLeft: 10,
    entryTextTop: -215,
    entryTextWidth: 470,
    entryTextHeight: 16,
    bellLeft: -80,
    bellTop: -295,
    shareLeft: -240,
    shareTop: -295,
    backgroundLeft: -5,
    backgroundTop: -515,
    imageLeft: -180,
    imageTop: -532,
    archiveLeft: 100,
    archiveTop: -735,
    moreLeft: -60,
    moreTop: -735,
    moreItemsLeft: 220,
    moreItemsTop: -840,
    moreItemsWidth: 150,
    moreItemsHeight: 110,
    //moreItemsOpacity: 1,
    addLabelLeft: 10,
    addLabelTop: 0,
    addLabelPaddingTop: 10,
    addDrawingLeft: 10,
    addDrawingTop: 0,
    showCheckboxesLeft: 10,
    showCheckboxesTop: 0,
    undoLeft: 180,
    undoTop: -1065,
    redoLeft: 20,
    redoTop: -1065,
    closeLeft: 445,
    closeTop: -1190,
    closeWidth: 45,
    closeHeight: 16,
};

// clickedEntryBoxMoreItems.style.display = "none";

// notepad.style.width = notepadOpen.notepadWidth + "px";
// notepad.style.height = notepadOpen.notepadHeight + "px";

clickedEntryBox.style.width = notepadOpen.notepadWidth + "px";
clickedEntryBox.style.height = notepadOpen.notepadHeight + "px";

clickedEntryBoxTitleText.style.left = notepadOpen.titleTextLeft + "px";
clickedEntryBoxTitleText.style.width = notepadOpen.titleTextWidth + "px";
clickedEntryBoxTitleText.style.height = notepadOpen.titleTextHeight + "px";

clickedEntryBoxPin.style.left = notepadOpen.pinLeft + "px";
clickedEntryBoxPin.style.top = notepadOpen.pinTop + "px";

clickedEntryBoxEntryText.style.left = notepadOpen.entryTextLeft + "px";
clickedEntryBoxEntryText.style.top = notepadOpen.entryTextTop + "px";
clickedEntryBoxEntryText.style.width = notepadOpen.entryTextWidth + "px";
clickedEntryBoxEntryText.style.height = notepadOpen.entryTextHeight + "px";

clickedEntryBoxBellShare.style.left = notepadOpen.bellLeft + "px";
clickedEntryBoxBellShare.style.top = notepadOpen.bellTop + "px";
// clickedEntryBoxBellShare.style.width = notepadOpen.entryTextWidth + "px";
// clickedEntryBoxBellShare.style.height = notepadOpen.entryTextHeight + "px";

clickedEntryBoxShare.style.left = notepadOpen.shareLeft + "px";
clickedEntryBoxShare.style.top = notepadOpen.shareTop + "px";
// clickedEntryBoxShare.style.width = notepadOpen.entryTextWidth + "px";
// clickedEntryBoxShare.style.height = notepadOpen.entryTextHeight + "px";

clickedEntryBoxBackground.style.left = notepadOpen.backgroundLeft + "px";
clickedEntryBoxBackground.style.top = notepadOpen.backgroundTop + "px";
// clickedEntryBoxShare.style.width = notepadOpen.entryTextWidth + "px";
// clickedEntryBoxShare.style.height = notepadOpen.entryTextHeight + "px";

clickedEntryBoxImage.style.left = notepadOpen.imageLeft + "px";
clickedEntryBoxImage.style.top = notepadOpen.imageTop + "px";
// clickedEntryBoxBackground.style.width = notepadOpen.entryTextWidth + "px";
// clickedEntryBoxBackground.style.height = notepadOpen.entryTextHeight + "px";

clickedEntryBoxArchive.style.left = notepadOpen.archiveLeft + "px";
clickedEntryBoxArchive.style.top = notepadOpen.archiveTop + "px";
// clickedEntryBoxBackground.style.width = notepadOpen.entryTextWidth + "px";
// clickedEntryBoxBackground.style.height = notepadOpen.entryTextHeight + "px";

clickedEntryBoxMore.style.left = notepadOpen.moreLeft + "px";
clickedEntryBoxMore.style.top = notepadOpen.moreTop + "px";
// clickedEntryBoxBackground.style.width = notepadOpen.entryTextWidth + "px";
// clickedEntryBoxBackground.style.height = notepadOpen.entryTextHeight + "px";

clickedEntryBoxMoreItems.style.left = notepadOpen.moreItemsLeft + "px";
clickedEntryBoxMoreItems.style.top = notepadOpen.moreItemsTop + "px";
clickedEntryBoxMoreItems.style.width = notepadOpen.moreItemsWidth + "px";
clickedEntryBoxMoreItems.style.height = notepadOpen.moreItemsHeight + "px";
//clickedEntryBoxMoreItems.style.opacity = notepadOpen.moreItemsOpacity;

clickedEntryBoxMoreAddLabel.style.left = notepadOpen.addLabelLeft + "px";
clickedEntryBoxMoreAddLabel.style.top = notepadOpen.addLabelTop + "px";
clickedEntryBoxMoreAddLabel.style.paddingTop = notepadOpen.addLabelPaddingTop + "px";

clickedEntryBoxMoreAddDrawing.style.left = notepadOpen.addDrawingLeft + "px";
clickedEntryBoxMoreAddDrawing.style.top = notepadOpen.addDrawingTop + "px";

clickedEntryBoxMoreShowCheckboxes.style.left = notepadOpen.showCheckboxesLeft + "px";
clickedEntryBoxMoreShowCheckboxes.style.top = notepadOpen.showCheckboxesTop + "px";

clickedEntryBoxUndo.style.left = notepadOpen.undoLeft + "px";
clickedEntryBoxUndo.style.top = notepadOpen.undoTop + "px";

clickedEntryBoxRedo.style.left = notepadOpen.redoLeft + "px";
clickedEntryBoxRedo.style.top = notepadOpen.redoTop + "px";

clickedEntryBoxClose.style.left = notepadOpen.closeLeft + "px";
clickedEntryBoxClose.style.top = notepadOpen.closeTop + "px";
clickedEntryBoxClose.style.width = notepadOpen.closeWidth + "px";
clickedEntryBoxClose.style.height = notepadOpen.closeHeight + "px";

const notepadOpenMoreClicked = {
    undoTop: notepadOpen.undoTop + 126,
    redoTop: notepadOpen.redoTop + 126,
    closeTop: notepadOpen.closeTop + 126
};

function openMoreItemsMenu() {
    if (navMenu.clickedMoreItemsState == false) {
        navMenu.clickedMoreItemsState = true;

        clickedEntryBoxMoreItems.style.display = "none";

        clickedEntryBoxUndo.style.top = notepadOpenMoreClicked.undoTop + "px";
        clickedEntryBoxRedo.style.top = notepadOpenMoreClicked.redoTop + "px";
        clickedEntryBoxClose.style.top = notepadOpenMoreClicked.closeTop + "px";
    }
    else {
        navMenu.clickedMoreItemsState = false;

        clickedEntryBoxMoreItems.style.display = "block";

        clickedEntryBoxUndo.style.top = notepadOpen.undoTop + "px";
        clickedEntryBoxRedo.style.top = notepadOpen.redoTop + "px";
        clickedEntryBoxClose.style.top = notepadOpen.closeTop + "px";
    }
}

const keyCodeMap = {
    // Lowercase letters
    97: "a", 98: "b", 99: "c", 100: "d", 101: "e",
    102: "f", 103: "g", 104: "h", 105: "i", 106: "j",
    107: "k", 108: "l", 109: "m", 110: "n", 111: "o",
    112: "p", 113: "q", 114: "r", 115: "s", 116: "t",
    117: "u", 118: "v", 119: "w", 120: "x", 121: "y", 122: "z",

    // Uppercase letters
    65: "A", 66: "B", 67: "C", 68: "D", 69: "E",
    70: "F", 71: "G", 72: "H", 73: "I", 74: "J",
    75: "K", 76: "L", 77: "M", 78: "N", 79: "O",
    80: "P", 81: "Q", 82: "R", 83: "S", 84: "T",
    85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z",

    // Digits
    48: "0", 49: "1", 50: "2", 51: "3", 52: "4",
    53: "5", 54: "6", 55: "7", 56: "8", 57: "9"
};

function handleKey(e) {
    let charCode = e.keyCode || e.which;
    let key = "";

    if (stringType) {
        if (stringType == "ENTRY") {
            // console.log(counter1);
            // console.log(line1);

            // console.log(charCode);
            // console.log(key);

            if (sortKeyEntry(charCode)) {
                key = getKey(charCode);
                currentString += key;

                if (shiftCase) {
                    shiftCase = false;
                    caseState = "LOWER";
                }
            } else {
                handleSpecialKeys(charCode);
            }

        } else if (stringType == "TITLE") {
            // console.log(counter2);
            // console.log(line2);

            // console.log(charCode);
            // console.log(key);

            if (sortKeyTitle(charCode)) {
                key = getKey(charCode);
                currentString += key;

                if (shiftCase) {
                    shiftCase = false;
                    caseState = "LOWER";
                }
            } else {
                handleSpecialKeys(charCode);
            }
        } else {
            // console.log("incorrect value for stringType : " + stringType);
        }
    } else {
        // console.log("stringType is null or empty : " + stringType);
    }

    updateString();
}

function sortKeyEntry(charCode) {
    if (counter1 < 52) {
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {

            numberCase = false;

            caseState === "UPPER" ? counter1 += 1.2 : counter1++;
            // console.log(counter1);

            return true;
        } else if (charCode >= 48 && charCode <= 57) {
            numberCase = true;
            caseState = "NUMBER";

            counter1++;
            // console.log(counter1);

            return true;
        } else if ([8, 9, 13, 16, 20, 32, 46].includes(charCode)) {
            numberCase = false;
            caseState = "SPECIAL_CHAR";
            return false;
        }
    }
    return false;
}

function sortKeyTitle(charCode) {
    if (counter2 < 38) {
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {

            numberCase = false;

            caseState === "UPPER" ? counter2 += 1.2 : counter2++;
            // console.log(counter2);

            return true;
        } else if (charCode >= 48 && charCode <= 57) {
            numberCase = true;
            caseState = "NUMBER";

            counter2++;
            // console.log(counter2);

            return true;
        } else if ([8, 9, 13, 16, 20, 32, 46].includes(charCode)) {
            numberCase = false;
            caseState = "SPECIAL_CHAR";
            return false;
        }
    }
    return false;
}

function getKey(charCode) {
    if (caseState === "LOWER") {
        return keyCodeMap[charCode + 32] || keyCodeMap[charCode];
    } else {
        return keyCodeMap[charCode];
    }
}

function handleSpecialKeys(charCode) {
    switch (charCode) {
        case 8:
            if (currentString) {
                currentString = currentString.slice(0, -1);

                if (stringType) {
                    if (stringType == "ENTRY") {
                        counter1 -= 1;
                        // console.log(counter1);
                    } else if (stringType == "TITLE") {
                        counter2 -= 1;
                        // console.log(counter2);
                    } else {
                        // console.log("incorrect value for stringType : " + stringType);
                    }
                } else {
                    // console.log("stringType is null or empty : " + stringType);
                }

            }
            break;
        case 9:
            currentString += "\t";

            if (stringType) {
                if (stringType == "ENTRY") {
                    counter1 += 3;
                    console.log(counter1);
                } else if (stringType == "TITLE") {
                    counter2 += 3;
                    console.log(counter2);
                } else {
                    // console.log("incorrect value for stringType : " + stringType);
                }
            } else {
                // console.log("stringType is null or empty : " + stringType);
            }

            break;
        case 13:

            if (stringType) {
                if (stringType == "ENTRY") {
                    if (line1 < 2) {
                        currentString += "\n";
                        counter1 = 0;
                        line1++;
                        // console.log(counter1);
                        // console.log(line1);
                    }
                } else if (stringType == "TITLE") {
                    if (line2 < 2) {
                        currentString += "\n";
                        counter2 = 0;
                        line2++;
                        // console.log(counter2);
                        // console.log(line2);
                    }
                } else {
                    // console.log("incorrect value for stringType : " + stringType);
                }
            } else {
                // console.log("stringType is null or empty : " + stringType);
            }

            break;
        case 16:
            shiftCase = !shiftCase;
            break;
        case 20:
            switchCase = !switchCase;
            caseState = switchCase ? "UPPER" : "LOWER";
            break;
        case 32:
            currentString += " ";
            break;
        case 46:
            // Handle delete (if needed)
            // need location of cursor
            break;
        default:
            break;
    }
}

function updateString() {
    if (stringType == "ENTRY") {
        stringEntry = currentString;
        clickedEntryBoxEntryText.innerHTML = stringEntry;
    } else if (stringType == "TITLE") {
        stringTitle = currentString;
        clickedEntryBoxTitleText.innerHTML = stringTitle;
    } else {
        // console.log("incorrect stringType : " + stringType);
    }
}

function updateNotepad() {
    // Implementation here
}

function handleMouseDownEventForEntryBox() {
    clickedEntryBox.style.display = "none";
    unclickedEntryBox.style.display = "block";
    clickedEntryBoxEntryText.innerHTML = "Take a note...";

    // Check if either stringEntry or stringTitle is not empty
    if ((stringEntry.trim() !== "") && (stringEntry || stringTitle) || (stringTitle.trim() !== "") && (stringEntry || stringTitle)) {
        updateNotepad();
        addNewNote(stringTitle, stringEntry);
    }

    stringEntry = "";
    stringTitle = "";
    counter1 = 0;
    line1 = 1;
    counter2 = 0;
    line2 = 1;

    clickedEntryBoxEntryText.innerHTML = "Take a note...";
    clickedEntryBoxTitleText.innerHTML = "Title";

    notepad.style.left = notepadClose.notepadLeft + "px";
    notepad.style.top = notepadClose.notepadTop + "px";
    notepad.style.width = notepadClose.notepadWidth + "px";
    notepad.style.height = notepadClose.notepadHeight + "px";

    noteSlipsContainer.style.top = 70 + "px";
}

function handleMouseDownEventForUnclickedBox() {
    clickedEntryBox.style.display = "block";
    unclickedEntryBox.style.display = "none";
    clickedEntryBoxMoreItems.style.display = "none";
    clickedEntryBoxUndo.style.top = notepadOpenMoreClicked.undoTop + "px";
    clickedEntryBoxRedo.style.top = notepadOpenMoreClicked.redoTop + "px";
    clickedEntryBoxClose.style.top = notepadOpenMoreClicked.closeTop + "px";
    notepad.style.width = notepadOpen.notepadWidth + "px";
    notepad.style.height = notepadOpen.notepadHeight + "px";

    noteSlipsContainer.style.top = 150 + "px";
}

function handleEntryBoxClick() {
    // console.log("Entry box clicked, enabling keydown event.");
    currentString = stringEntry;
    stringType = "ENTRY";
    window.removeEventListener("keydown", readAndTypeTextTitle);
    window.addEventListener("keydown", readAndTypeTextEntry);
}

function handleTitleBoxClick() {
    // console.log("Title box clicked, enabling keydown event.");
    currentString = stringTitle;
    stringType = "TITLE";
    window.removeEventListener("keydown", readAndTypeTextEntry);
    window.addEventListener("keydown", readAndTypeTextTitle);
}

function readAndTypeTextEntry(e) {
    handleKey(e);
}

function readAndTypeTextTitle(e) {
    handleKey(e);
}

clickedEntryBoxMore.addEventListener("mousedown", openMoreItemsMenu);

clickedEntryBoxClose.addEventListener("mousedown", handleMouseDownEventForEntryBox);

unclickedEntryBoxNoteText.addEventListener("mousedown", handleMouseDownEventForUnclickedBox);

clickedEntryBoxEntryText.addEventListener("mousedown", handleEntryBoxClick);

clickedEntryBoxTitleText.addEventListener("mousedown", handleTitleBoxClick);

//note slips
var noteSlipsContainer = document.getElementById("note_slips_container");

const noteSlips = {
    noteSlipsContainerLeft: -300,
    noteSlipsContainerTop: 70,
    noteSlipsContainerWidth: window.innerWidth,
    noteSlipsContainerHeight: window.innerHeight - notepadClose.notepadHeight - notepadClose.notepadTop,
    counter: 0,
    moreOptionsNote: false,
    discrepencyx: 0,
    discrepencyy: 0,
    discrepencyxtext: 0,
    iscrepencyytext: 0,
    notes: []
};

noteSlipsContainer.style.left = noteSlips.noteSlipsContainerLeft + "px";
noteSlipsContainer.style.top = noteSlips.noteSlipsContainerTop + "px";
noteSlipsContainer.style.width = noteSlips.noteSlipsContainerWidth + "px";
noteSlipsContainer.style.height = noteSlips.noteSlipsContainerHeight + "px";

function addNewNote(title, entry) {
    if (noteSlips.counter >= 6) {
        console.log("Cannot add more notes. Limit reached.");
        return;
    }

    const createDiv = document.createElement("div");

    noteSlips.counter++;

    // Create title element
    if (title) {
        const titleElement = document.createElement("pre");
        const titleText = document.createTextNode(title);

        titleElement.appendChild(titleText);
        titleElement.style.fontFamily = "Arial, Helvetica, sans-serif";
        titleElement.style.margin = "10px";
        titleElement.style.boxSizing = "border-box";
        titleElement.style.display = "block";
        titleElement.style.whiteSpace = "pre-wrap";
        titleElement.style.overflowWrap = "break-word";

        createDiv.appendChild(titleElement);
    }

    // Create entry element
    if (entry) {
        const entryElement = document.createElement("pre");
        const entryText = document.createTextNode(entry);

        entryElement.appendChild(entryText);
        entryElement.style.fontFamily = "Arial, Helvetica, sans-serif";
        entryElement.style.margin = "10px";
        entryElement.style.boxSizing = "border-box";
        entryElement.style.display = "block";
        entryElement.style.whiteSpace = "pre-wrap";
        entryElement.style.overflowWrap = "break-word";

        createDiv.appendChild(entryElement);
    }

    switch (noteSlips.counter) {
        case 1:
            noteSlips.discrepencyx = 0;
            noteSlips.discrepencyy = 0;
            break;
        case 2:
            noteSlips.discrepencyx = 420;
            noteSlips.discrepencyy = 0;
            break;
        case 3:
            noteSlips.discrepencyx = 840;
            noteSlips.discrepencyy = 0;
            break;
        case 4:
            noteSlips.discrepencyx = 0;
            noteSlips.discrepencyy = 220;
            break;
        case 5:
            noteSlips.discrepencyx = 420;
            noteSlips.discrepencyy = 220;
            break;
        case 6:
            noteSlips.discrepencyx = 840;
            noteSlips.discrepencyy = 220;
            break;
        default:
            console.log("no discrepency added")
            break;
    }

    console.log(noteSlips.counter);

    const reminderButtonContainer = document.createElement("div");
    const reminderButton = document.createElement("img");
    reminderButton.src = "../static/images/bell_plus.png";
    reminderButton.style.transform = "scale(0.1)";
    reminderButton.style.position = "absolute";
    reminderButtonContainer.style.position = "absolute";
    reminderButtonContainer.style.left = "-75px";
    reminderButtonContainer.style.top = "70px";
    reminderButtonContainer.appendChild(reminderButton);
    createDiv.appendChild(reminderButtonContainer);

    const shareButtonContainer = document.createElement("div");
    const shareButton = document.createElement("img");
    shareButton.src = "../static/images/person_plus.png";
    shareButton.style.transform = "scale(0.1)";
    shareButton.style.position = "absolute";
    shareButtonContainer.style.position = "absolute";
    shareButtonContainer.style.left = "-40px";
    shareButtonContainer.style.top = "70px";
    shareButtonContainer.appendChild(shareButton);
    createDiv.appendChild(shareButtonContainer);

    const backgroundButtonContainer = document.createElement("div");
    const backgroundButton = document.createElement("img");
    backgroundButton.src = "../static/images/paint_pallet.png";
    backgroundButton.style.transform = "scale(0.1)";
    backgroundButton.style.position = "absolute";
    backgroundButtonContainer.style.position = "absolute";
    backgroundButtonContainer.style.left = "-15px";
    backgroundButtonContainer.style.top = "55px";
    backgroundButtonContainer.appendChild(backgroundButton);
    createDiv.appendChild(backgroundButtonContainer);

    const imageButtonContainer = document.createElement("div");
    const imageButton = document.createElement("img");
    imageButton.src = "../static/images/easle.png";
    imageButton.style.transform = "scale(0.1)";
    imageButton.style.position = "absolute";
    imageButtonContainer.style.position = "absolute";
    imageButtonContainer.style.left = "40px";
    imageButtonContainer.style.top = "72px";
    imageButtonContainer.appendChild(imageButton);
    createDiv.appendChild(imageButtonContainer);

    const archiveButtonContainer = document.createElement("div");
    const archiveButton = document.createElement("img");
    archiveButton.src = "../static/images/archive.png";
    archiveButton.style.transform = "scale(0.1)";
    archiveButton.style.position = "absolute";
    archiveButtonContainer.style.position = "absolute";
    archiveButtonContainer.style.left = "80px";
    archiveButtonContainer.style.top = "72px";
    archiveButtonContainer.appendChild(archiveButton);
    createDiv.appendChild(archiveButtonContainer);

    const moreButtonContainer = document.createElement("div");
    const moreButton = document.createElement("img");
    moreButton.src = "../static/images/more.png";
    moreButton.style.transform = "scale(0.1)";
    moreButton.style.position = "absolute";
    moreButtonContainer.style.position = "absolute";
    moreButtonContainer.style.left = "115px";
    moreButtonContainer.style.top = "73px";
    moreButtonContainer.appendChild(moreButton);
    createDiv.appendChild(moreButtonContainer);

    const moreTextContainer = document.createElement("div");
    const deleteText = document.createElement("p");
    const deleteTextNode = document.createTextNode("Delete note");
    deleteText.appendChild(deleteTextNode);
    moreTextContainer.appendChild(deleteText);

    deleteText.style.left = "10px";
    deleteText.style.top = "0px";
    deleteText.style.position = "absolute";

    const labelText = document.createElement("p");
    const labelTextNode = document.createTextNode("Add label");
    labelText.appendChild(labelTextNode);
    moreTextContainer.appendChild(labelText);

    labelText.style.left = "10px";
    labelText.style.top = "25px";
    labelText.style.position = "absolute";

    const drawingText = document.createElement("p");
    const drawingTextNode = document.createTextNode("Add drawing");
    drawingText.appendChild(drawingTextNode);
    moreTextContainer.appendChild(drawingText);

    drawingText.style.left = "10px";
    drawingText.style.top = "50px";
    drawingText.style.position = "absolute";

    const copyText = document.createElement("p");
    const copyTextNode = document.createTextNode("Make a copy");
    copyText.appendChild(copyTextNode);
    moreTextContainer.appendChild(copyText);

    copyText.style.left = "10px";
    copyText.style.top = "75px";
    copyText.style.position = "absolute";

    const checkboxesText = document.createElement("p");
    const checkboxesTextNode = document.createTextNode("Show checkboxes");
    checkboxesText.appendChild(checkboxesTextNode);
    moreTextContainer.appendChild(checkboxesText);

    checkboxesText.style.left = "10px";
    checkboxesText.style.top = "100px";
    checkboxesText.style.position = "absolute";

    const copyDocsText = document.createElement("p");
    const copyDocsTextNode = document.createTextNode("Copy to ____ Docs");
    copyDocsText.appendChild(copyDocsTextNode);
    moreTextContainer.appendChild(copyDocsText);

    copyDocsText.style.left = "10px";
    copyDocsText.style.top = "125px";
    copyDocsText.style.position = "absolute";

    const historyText = document.createElement("p");
    const historyTextNode = document.createTextNode("Version history");
    historyText.appendChild(historyTextNode);
    moreTextContainer.appendChild(historyText);

    historyText.style.left = "10px";
    historyText.style.top = "150px";
    historyText.style.position = "absolute";

    moreTextContainer.style.zIndex = "7";
    moreTextContainer.style.position = "absolute";
    moreTextContainer.style.display = "block";
    moreTextContainer.style.width = "155px";
    moreTextContainer.style.height = "195px";
    moreTextContainer.style.left = 395 + noteSlips.discrepencyx + "px";
    moreTextContainer.style.top = 355 + noteSlips.discrepencyy + "px";
    moreTextContainer.className = "more_text_container" + noteSlips.counter;
    moreTextContainer.id = "more_text_container" + noteSlips.counter;
    moreTextContainer.style.borderRadius = "15px";
    moreTextContainer.style.boxShadow = "0 0 5px #000000";
    moreTextContainer.style.backgroundColor = "white";
    moreTextContainer.appendChild(deleteText);
    moreTextContainer.appendChild(labelText);
    moreTextContainer.appendChild(drawingText);
    moreTextContainer.appendChild(copyText);
    moreTextContainer.appendChild(checkboxesText);
    moreTextContainer.appendChild(copyDocsText);
    moreTextContainer.appendChild(historyText);
    document.body.appendChild(moreTextContainer);
    moreTextContainer.style.visibility = "hidden";

    // More button event listener
    moreButton.addEventListener("click", () => {
        moreTextContainer.style.visibility =
            moreTextContainer.style.visibility === "visible" ? "hidden" : "visible";
    });

    deleteText.addEventListener("click", () => {
        document.body.removeChild(moreTextContainer);
        noteSlipsContainer.removeChild(createDiv);
        noteSlips.counter--;
        updateNoteSlipStates(createDiv.id, noteSlips.counter, noteSlips.notes.length);
    });

    // Position and style the createDiv
    createDiv.style.zIndex = "2";
    createDiv.style.position = "absolute";
    createDiv.style.display = "block";
    createDiv.style.width = "400px";
    createDiv.style.height = "200px";
    createDiv.style.left = noteSlips.discrepencyx + "px";
    createDiv.style.top = noteSlips.discrepencyy + "px";
    createDiv.className = "note_slip_" + noteSlips.counter;
    createDiv.id = "note_slip_" + noteSlips.counter;
    createDiv.style.borderRadius = "15px";
    createDiv.style.boxShadow = "0 0 5px #000000";
    createDiv.style.backgroundColor = "white";

    noteSlips.notes.push("note_slip_" + noteSlips.counter);
    //console.log(noteSlips.notes);

    createDiv.appendChild(reminderButtonContainer);
    createDiv.appendChild(shareButtonContainer);
    createDiv.appendChild(backgroundButtonContainer);
    createDiv.appendChild(imageButtonContainer);
    createDiv.appendChild(archiveButtonContainer);
    createDiv.appendChild(moreButtonContainer);
    noteSlipsContainer.appendChild(createDiv);
}

function updateNoteSlipStates(id, counter, length) {
    console.log("");
    console.log(id);
    console.log(counter);
    console.log(length);
    var string = "";

    switch (id) {
        case "note_slip_1":
            noteSlips.notes.splice(0, 1);
            console.log(noteSlips.notes);

            for (let i = 0; i < length - 1; i++) {

                string = "note_slip_" + (i + 1);
                console.log("string : ", string);

                document.getElementById("note_slip_" + (i + 2)).className = string;
                document.getElementById("note_slip_" + (i + 2)).id = string;

                string = "more_text_container" + (i + 1);
                console.log("string : ", string);

                document.getElementById("more_text_container" + (i + 2)).className = string;
                document.getElementById("more_text_container" + (i + 2)).id = string;
            }

            for (let i = 0; i < length - 1; i++) {

                switch (i) {
                    case 0:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 1:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 2:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 3:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 4:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 5:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 220;
                        break;
                    default:
                        console.log("no discrepency added")
                        break;
                }

                document.getElementById("note_slip_" + (i + 1)).style.left = noteSlips.discrepencyx + "px";
                document.getElementById("note_slip_" + (i + 1)).style.top = noteSlips.discrepencyy + "px";
                document.getElementById("more_text_container" + (i + 1)).style.left = 395 + noteSlips.discrepencyx + "px";
                document.getElementById("more_text_container" + (i + 1)).style.top = 355 + noteSlips.discrepencyy + "px";
            }

            break;
        case "note_slip_2":
            noteSlips.notes.splice(1, 1);
            console.log(noteSlips.notes);
            console.log("second note deleted");

            for (let i = 0; i < length; i++) {

                if (i > 1) {
                    string = "note_slip_" + (i);
                    console.log("string : ", string);

                    document.getElementById("note_slip_" + (i + 1)).className = string;
                    document.getElementById("note_slip_" + (i + 1)).id = string;

                    string = "more_text_container" + (i);
                    console.log("string : ", string);

                    document.getElementById("more_text_container" + (i + 1)).className = string;
                    document.getElementById("more_text_container" + (i + 1)).id = string;
                }
            }

            for (let i = 0; i < length - 1; i++) {
                console.log(i);

                switch (i) {
                    case 0:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 1:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 2:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 3:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 4:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 5:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 220;
                        break;
                    default:
                        console.log("no discrepency added")
                        break;
                }

                document.getElementById("note_slip_" + (i + 1)).style.left = noteSlips.discrepencyx + "px";
                document.getElementById("note_slip_" + (i + 1)).style.top = noteSlips.discrepencyy + "px";
                document.getElementById("more_text_container" + (i + 1)).style.left = 395 + noteSlips.discrepencyx + "px";
                document.getElementById("more_text_container" + (i + 1)).style.top = 355 + noteSlips.discrepencyy + "px";
            }

            break;
        case "note_slip_3":
            noteSlips.notes.splice(2, 1);
            console.log(noteSlips.notes);
            console.log("third note deleted");

            for (let i = 0; i < length; i++) {

                if (i > 2) {
                    string = "note_slip_" + (i);
                    console.log("string : ", string);

                    document.getElementById("note_slip_" + (i + 1)).className = string;
                    document.getElementById("note_slip_" + (i + 1)).id = string;

                    string = "more_text_container" + (i);
                    console.log("string : ", string);

                    document.getElementById("more_text_container" + (i + 1)).className = string;
                    document.getElementById("more_text_container" + (i + 1)).id = string;
                }
            }

            for (let i = 0; i < length - 1; i++) {

                switch (i) {
                    case 0:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 1:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 2:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 3:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 4:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 5:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 220;
                        break;
                    default:
                        console.log("no discrepency added")
                        break;
                }

                document.getElementById("note_slip_" + (i + 1)).style.left = noteSlips.discrepencyx + "px";
                document.getElementById("note_slip_" + (i + 1)).style.top = noteSlips.discrepencyy + "px";
                document.getElementById("more_text_container" + (i + 1)).style.left = 395 + noteSlips.discrepencyx + "px";
                document.getElementById("more_text_container" + (i + 1)).style.top = 355 + noteSlips.discrepencyy + "px";
            }

            break;
        case "note_slip_4":
            noteSlips.notes.splice(3, 1);
            console.log(noteSlips.notes);

            for (let i = 0; i < length; i++) {

                if (i > 3) {
                    string = "note_slip_" + (i);
                    console.log("string : ", string);

                    document.getElementById("note_slip_" + (i + 1)).className = string;
                    document.getElementById("note_slip_" + (i + 1)).id = string;

                    string = "more_text_container" + (i);
                    console.log("string : ", string);

                    document.getElementById("more_text_container" + (i + 1)).className = string;
                    document.getElementById("more_text_container" + (i + 1)).id = string;
                }
            }

            for (let i = 0; i < length - 1; i++) {

                switch (i) {
                    case 0:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 1:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 2:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 3:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 4:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 5:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 220;
                        break;
                    default:
                        console.log("no discrepency added")
                        break;
                }

                document.getElementById("note_slip_" + (i + 1)).style.left = noteSlips.discrepencyx + "px";
                document.getElementById("note_slip_" + (i + 1)).style.top = noteSlips.discrepencyy + "px";
                document.getElementById("more_text_container" + (i + 1)).style.left = 395 + noteSlips.discrepencyx + "px";
                document.getElementById("more_text_container" + (i + 1)).style.top = 355 + noteSlips.discrepencyy + "px";
            }

            break;
        case "note_slip_5":
            noteSlips.notes.splice(4, 1);
            console.log(noteSlips.notes);

            for (let i = 0; i < length; i++) {

                if (i > 4) {
                    string = "note_slip_" + (i);
                    console.log("string : ", string);

                    document.getElementById("note_slip_" + (i + 1)).className = string;
                    document.getElementById("note_slip_" + (i + 1)).id = string;

                    string = "more_text_container" + (i);
                    console.log("string : ", string);

                    document.getElementById("more_text_container" + (i + 1)).className = string;
                    document.getElementById("more_text_container" + (i + 1)).id = string;
                }
            }

            for (let i = 0; i < length - 1; i++) {

                switch (i) {
                    case 0:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 1:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 2:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 3:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 4:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 5:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 220;
                        break;
                    default:
                        console.log("no discrepency added")
                        break;
                }

                document.getElementById("note_slip_" + (i + 1)).style.left = noteSlips.discrepencyx + "px";
                document.getElementById("note_slip_" + (i + 1)).style.top = noteSlips.discrepencyy + "px";
                document.getElementById("more_text_container" + (i + 1)).style.left = 395 + noteSlips.discrepencyx + "px";
                document.getElementById("more_text_container" + (i + 1)).style.top = 355 + noteSlips.discrepencyy + "px";
            }

            break;
        case "note_slip_6":
            noteSlips.notes.splice(5, 1);
            console.log(noteSlips.notes);

            for (let i = 0; i < length; i++) {

                if (i > 5) {
                    string = "note_slip_" + (i);
                    console.log("string : ", string);

                    document.getElementById("note_slip_" + (i + 1)).className = string;
                    document.getElementById("note_slip_" + (i + 1)).id = string;

                    string = "more_text_container" + (i);
                    console.log("string : ", string);

                    document.getElementById("more_text_container" + (i + 1)).className = string;
                    document.getElementById("more_text_container" + (i + 1)).id = string;
                }
            }

            for (let i = 0; i < length - 1; i++) {

                switch (i) {
                    case 0:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 1:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 2:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 0;
                        break;
                    case 3:
                        noteSlips.discrepencyx = 0;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 4:
                        noteSlips.discrepencyx = 420;
                        noteSlips.discrepencyy = 220;
                        break;
                    case 5:
                        noteSlips.discrepencyx = 840;
                        noteSlips.discrepencyy = 220;
                        break;
                    default:
                        console.log("no discrepency added")
                        break;
                }

                document.getElementById("note_slip_" + (i + 1)).style.left = noteSlips.discrepencyx + "px";
                document.getElementById("note_slip_" + (i + 1)).style.top = noteSlips.discrepencyy + "px";
                document.getElementById("more_text_container" + (i + 1)).style.left = 395 + noteSlips.discrepencyx + "px";
                document.getElementById("more_text_container" + (i + 1)).style.top = 355 + noteSlips.discrepencyy + "px";
            }

            break;
    }
}






