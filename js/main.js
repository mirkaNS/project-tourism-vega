// youtube video

function watchStorie() {
    var video = document.querySelector(".region-poup-youtube");
    if (video.style.display == "flex") {
        video.style.display = "none";
    } else {
        video.style.display = "flex";
    }
}

function closeVideo() {
    var video = document.querySelector(".region-poup-youtube");

    if (video.style.display == "flex") {
        video.style.display = "none"
    } else {
        video.style.display = "flex";
    }
}

// searchFiled

function searchFiled(x) {
    var searchBar = document.querySelector(x);
    var searchIcon = document.querySelector(".search-open");

    if (searchBar.style.display == "block") {
        searchBar.style.display = "none";
        searchIcon.style.visibility = "visible";
    } else {
        searchBar.style.display = "block";
        searchIcon.style.visibility = "hidden";
    }
}

function closeFiled(x) {
    var searchBar = document.querySelector(x);
    var searchIcon = document.querySelector(".search-open");

    if (searchBar.style.display == "block") {
        searchBar.style.display = "none";
        searchIcon.style.visibility = "visible";
    } else {
        searchBar.style.display = "block";
        searchIcon.style.visibility = "hidden";
    }
}

// dropdoen language menu

function dropdownMenu(x) {
    var menu = document.querySelector(x);

    if (menu.style.display == "block") {
        menu.style.display = "none";
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

//hamburger Menu

function hamburgerMenu() {
    var navigation1 = document.querySelector(".header--menu--navigation-first");
    var navigation2 = document.querySelector(".header--menu--navigation-second");
    var block = document.querySelector(".article")

    if (navigation1.style.display &&
        navigation2.style.display == "block") {
        navigation1.style.display = "none";
        navigation2.style.display = "none";
        block.style.display = "block";
    } else {
        navigation1.style.display = "block";
        navigation2.style.display = "block";
        block.style.display = "none";
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

// dropdown city info

function openCity(event) {
    var opened = document.querySelector('.opened');

    event.target.closest("li").classList.toggle('opened');
    if (opened) {
        if (opened !== event.target)
            opened.classList.remove('opened');
    }

}

// carosel

function prev() {
    var caroselHolder = document.querySelector(".carousel-content");
    var image = document.querySelector(".carousel-holder--img");

    caroselHolder.removeChild(image);
    caroselHolder.appendChild(image);
}
function next() {
    var caroselHolder = document.querySelector(".carousel-content");
    var image = caroselHolder.lastChild;

    caroselHolder.removeChild(image);
    caroselHolder.insertBefore(image, caroselHolder.firstChild);
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/carousel.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function createCarousel() {
  loadJSON(function(response) {
    // Parse JSON string into object
    var images = JSON.parse(response);
    var carouselHolder = document.querySelector(".carousel-content");
    for (var i = 0; i < images.length; i++) {
      var node = document.createElement("div");
      node.classList.add("carousel-holder--img");
      var img = document.createElement("img");
      img.src = images[i].path;
      node.appendChild(img);
      var span = document.createElement("span");
      span.innerHTML = images[i].description;
      node.appendChild(span);
      carouselHolder.appendChild(node);
    }
    var width = 0;
    var images = document.querySelectorAll(".carousel-holder--img");
    for (var i = 0; i < images.length; i++) {
      width += images[i].clientWidth + 50;
    }
    document.querySelector(".carousel-content").style.width = width + "px";
  });
}