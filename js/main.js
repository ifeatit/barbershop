var linkLogin       = document.querySelector(".login");
var popupLogin      = document.querySelector(".modal-content-login");
var loginClose      = popupLogin.querySelector(".modal-content-close");
var loginForm       = popupLogin.querySelector("form");
var linkMap         = document.querySelector(".map");
var popupMap        = document.querySelector(".modal-content-map");
var mapClose        = popupMap.querySelector(".modal-content-close");
var inputLogin      = popupLogin.querySelector("[name='login']");
var inputPassword   = popupLogin.querySelector("[name='password']");
var overlay         = document.querySelector(".overlay");
var storage         = localStorage.getItem("login");

linkLogin.addEventListener("click", function(event) {
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

loginClose.addEventListener("click", function(event) {
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
      //popupLogin.classList.toggle("modal-error");
    }
  } else {
    localStorage.setItem("login", inputLogin.value);
  }
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popupLogin.classList.contains("modal-content-show")) {
      popupLogin.classList.remove("modal-content-show");
      overlay.classList.remove("overlay--show");
    }
  }
});

linkMap.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.add("modal-content-show");
  overlay.classList.add("overlay--show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.remove("modal-content-show");
  overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popupMap.classList.contains("modal-content-show")) {
      popupMap.classList.remove("modal-content-show");
      overlay.classList.remove("overlay--show");
    }
  }
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  if (popupLogin.classList.contains("modal-content-show")) {
    popupLogin.classList.remove("modal-content-show");
  } else if (popupMap.classList.contains("modal-content-show")) {
      popupMap.classList.remove("modal-content-show");
  }
  overlay.classList.remove("overlay--show");
});
