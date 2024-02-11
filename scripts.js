"use strict";
const mobile_navbar_icon = document.getElementById("mobile_navbar_icon");
const navbar = document.getElementById("navbar");
const toggle_mobile_menu = () => {
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    }
    else {
        navbar.style.display = "block";
    }
};
mobile_navbar_icon.addEventListener("click", toggle_mobile_menu);

const auto_hide_mobile_menu = () => {
    if (mobile_navbar_icon.style.display === "none") {
        return;
    }
    if (navbar.style.display === "none") {
        return;
    }
    navbar.style.display = "none";
};
navbar.addEventListener("mouseleave", auto_hide_mobile_menu);