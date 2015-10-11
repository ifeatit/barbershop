var linkLogin       = document.querySelector(".login");
var popupLogin      = document.querySelector(".modal-content-login");
var loginClose      = popupLogin.querySelector(".modal-content-close");
var loginForm       = popupLogin.querySelector("form");
var linkMap         = document.querySelectorAll(".map");
var iframeMap       = document.querySelector(".modal-content-map iframe");
var srcMap          = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5991032728616!2d30.323083299999993!3d59.9387942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KDQvtGB0YHQuNGPLCAxOTExODY!5e0!3m2!1sru!2s!4v1444082479661";
var popupMap        = document.querySelector(".modal-content-map");
var mapClose        = popupMap.querySelector(".modal-content-close");
var inputLogin      = popupLogin.querySelector("[name='login']");
var inputPassword   = popupLogin.querySelector("[name='password']");
var overlay         = document.querySelector(".overlay");
var storage         = localStorage.getItem("login");

var gallery         = document.querySelector(".gallery");
var galleryTogles   = document.querySelector(".gallery-togles");

gallery.classList.add("gallery-live");
galleryTogles.classList.add("gallery-togles-visible");

function addEvent(elem, type, handler){
  if (elem.addEventListener) {
    elem.addEventListener(type, handler, false)
  } else { 
    elem.attachEvent("on"+type, handler)
  }
};
addEvent(linkLogin, "click", function(event) {
  event.preventDefault();
  popupLogin.classList.add("modal-content-show");
  overlay.classList.add("overlay--show");
  if (storage) {
    inputLogin.value = storage;
    inputPassword.focus();
  } else {
    inputLogin.focus();
  }
});

addEvent(loginClose, "click", function(event) {
  event.preventDefault();
  popupLogin.classList.remove("modal-content-show");
  overlay.classList.remove("overlay--show");
  if (popupLogin.classList.contains("modal-error")) {
    popupLogin.classList.remove("modal-error");
  } 
});

function isInputEmpty() {
  if (!(inputLogin.value && inputPassword.value)) {
    if (popupLogin.classList.contains("modal-error")) {
      popupLogin.classList.remove("modal-error");
      setTimeout('popupLogin.classList.add("modal-error");',0);
    } else {
      popupLogin.classList.add("modal-error");
    }
  } else {
    localStorage.setItem("login", inputLogin.value);
  }
};

addEvent(window, "keydown", function(event) {
  if (event.keyCode == 27) {
    if (popupLogin.classList.contains("modal-content-show")) {
      popupLogin.classList.remove("modal-content-show");
      overlay.classList.remove("overlay--show");
    }
  }
});

for (var i=0; i<linkMap.length; i++){
  addEvent(linkMap[i], "click", function(event) {
    event.preventDefault();
    iframeMap.setAttribute("src", srcMap);
    popupMap.classList.add("modal-content-show");
    overlay.classList.add("overlay--show");
  })
};

addEvent(mapClose, "click", function(event) {
  event.preventDefault();
  popupMap.classList.remove("modal-content-show");
  overlay.classList.remove("overlay--show");
});

addEvent(overlay, "click", function(event) {
  event.preventDefault();
  if (popupLogin.classList.contains("modal-content-show")) {
    popupLogin.classList.remove("modal-content-show");
  } else if (popupMap.classList.contains("modal-content-show")) {
      popupMap.classList.remove("modal-content-show");
  }
  overlay.classList.remove("overlay--show");
});

addEvent(window, "keydown", function(event) {
  if (event.keyCode == 27) {
    if (popupMap.classList.contains("modal-content-show")) {
      popupMap.classList.remove("modal-content-show");
      overlay.classList.remove("overlay--show");
    }
  }
});

