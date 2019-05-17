var linkWriteUs = document.querySelector(".write-us-btn");
var popupWriteUs = document.querySelector(".popup-write-us");
var closeWriteUs = popupWriteUs.querySelector(".popup-close");
var form = popupWriteUs.querySelector("form");
var username = popupWriteUs.querySelector("[name=username]");
var email = popupWriteUs.querySelector("[name=email]");
var message = popupWriteUs.querySelector("[name=message]");
var isStorageSupport = true;
var Storage = "";

try {
    storage = localStorage.getItem("username");
} catch (err) {
    isStorageSupport = false;
}

linkWriteUs.addEventListener("click", function (evt) {
evt.preventDefault();
popupWriteUs.classList.add("popup-show");
    if (storage) {
        username.value = storage;
        email.focus();
    } else {
    username.focus();
    }
});

closeWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.remove("popup-show");
    popupWriteUs.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !message.value) {
        evt.preventDefault();
        popupWriteUs.classList.remove("popup-error");
        popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
        popupWriteUs.classList.add("popup-error");
    } else {
            if (isStorageSupport) {
            localStorage.setItem("username", username.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupWriteUs.classList.contains("popup-show")) {
            popupWriteUs.classList.remove("popup-show");
            popupWriteUs.classList.remove("popup-error");
        }
    }
});

var linkMap = document.querySelector(".map-link");
var popupMap = document.querySelector(".popup-map");
var closeMap = popupMap.querySelector(".popup-close");

linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("popup-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault;
    if (evt.keyCode === 27) {
        if (popupMap.classList.contains("popup-show")) {
            popupMap.classList.remove("popup-show");
        }
    }
});

var linkBuy = document.querySelector(".buy");
var popupBuy = document.querySelector(".item-in-cart");
var closeBuy = popupBuy.querySelector(".popup-close");

linkBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuy.classList.add("popup-show");
});

closeBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuy.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault;
    if (evt.keyCode === 27) {
        if (popupBuy.classList.contains("popup-show")) {
            popupBuy.classList.remove("popup-show");
        }
    }
});