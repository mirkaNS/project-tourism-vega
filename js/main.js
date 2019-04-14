function searchFiled(x) {
    var searchBar = document.querySelector(x);
    var nav = document.querySelector(".block--menu--navigation-first");
    var screenWidth = window.innerWidth;

    if (searchBar.style.display == "block" &&
        screenWidth >= 784) {
        searchBar.style.display = "none";
        nav.style.display = "inline-block";
    } else {
        searchBar.style.display = "block";
        nav.style.display = "none";
    }
}

function closeFiled(x) {
    var searchBar = document.querySelector(x);
    var nav = document.querySelector(".block--menu--navigation-first");

    if (searchBar.style.display == "block" &&
        nav.style.display == "none") {
        searchBar.style.display = "none";
        nav.style.display = "inline-block";
    } else {
        searchBar.style.display = "block";
        nav.style.display = "none";
    }
}

function dropdownMenu(x) {
    var menu = document.querySelector(x);

    if (menu.style.display == "block") {

    } else {
        menu.style.display = "block";
    }
}

function changeEn(x) {
    document.querySelector(x).innerHTML = "EN";
    var menu = document.querySelector(".submeni--nav");

    menu.style.display = "none";
}

function changeGe(x) {
    document.querySelector(x).innerHTML = "GE";
    var menu = document.querySelector(".submeni--nav");

    menu.style.display = "none";
}

function hamburgerMenu() {
    var navigation1 = document.querySelector(".block--menu--navigation-first");
    var navigation2 = document.querySelector(".block--menu--navigation-second");
    var chengeText = document.querySelector(".menu--nav-item-orange");

    if (navigation1.style.display &&
        navigation2.style.display == "block") {
        navigation1.style.display = "none";
        navigation2.style.display = "none";
    } else {
        navigation1.style.display = "block";
        navigation2.style.display = "block";
        chengeText.innerHTML = "English";
    }
}

function iconChange() {
    var icon = document.querySelector(".hamburger-menu-icon");
    if (icon.src.match("icon-x-menu")) {
        icon.src = "./image/menu.png";
    } else {
        icon.src = "./image/icon-x-menu.png";
    }
}

// function changeArrow() {
//     var icon = document.querySelector("submeni--nav-arrow-up");
//     var iconTablet = document.querySelector("submeni--nav-arrow-up-tablet");
//     var screenWidth = window.innerWidth;

//     if (screenWidth <= 768) {
//         icon.style.visibility = "hidden";
//         iconTablet.style.visibility = "visible";
//     } else {
//         icon.style.visibility = "visible";
//         iconTablet.style.visibility = "hidden";
//     }
// }