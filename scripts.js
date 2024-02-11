"use strict";
const mobile_navbar_icon = document.getElementById("mobile_navbar_icon");
const navbar = document.getElementById("navbar");

mobile_navbar_icon.addEventListener("click", () => {
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    }
    else {
        navbar.style.display = "block";
    }
});


navbar.addEventListener("mouseleave", () => {
    if (mobile_navbar_icon.style.display === "none") {
        return;
    }
    if (navbar.style.display === "none") {
        return;
    }
    navbar.style.display = "none";
});
