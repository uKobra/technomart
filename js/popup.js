/* WRITE US */

var linkWriteUs = document.querySelector(".write-us-btn");
var popupWriteUs = document.querySelector(".popup-write-us");

if (linkWriteUs && popupWriteUs) {
    var closeWriteUs = popupWriteUs.querySelector(".popup-close");
    var form = popupWriteUs.querySelector("form");
    var username = popupWriteUs.querySelector("[name=username]");
    var email = popupWriteUs.querySelector("[name=email]");
    var message = popupWriteUs.querySelector("[name=message]");
    var storageName = localStorage.getItem("username");
    var storageEmail = localStorage.getItem("email");

    linkWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.add("popup-show");
        if (storageName) {
            username.value = storageName;
            if (storageEmail) {
                email.value = storageEmail;
                message.focus();
            } 
            else {
                email.focus();
            }
        }
        else {
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
            if (storageName && storageEmail) {
            localStorage.setItem("username", username.value);
            localStorage.setItem("email", email.value);
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
}

/* MAP */

var linkMap = document.querySelector(".map-link");
var popupMap = document.querySelector(".popup-map");

if (linkMap && popupMap) {
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
}

/* ITEM IN CART */

var linkBuy = document.querySelectorAll(".buy");
var popupBuy = document.querySelector(".item-in-cart");

if (linkBuy && popupBuy) {
    var messageContinue = popupBuy.querySelector(".popup-cont");
    var closeBuy = popupBuy.querySelector(".popup-close");


    for (i = 0; i < linkBuy.length; i++) {
    linkBuy[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popupBuy.classList.add("popup-show");
    });
    }

    messageContinue.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupBuy.classList.remove("popup-show");
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
    }