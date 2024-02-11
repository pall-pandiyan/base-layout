"use strict";

const body_wrapper = document.getElementById("body-wrapper");

function updateOverflowSize(element) {
    console.log("updateOverflowSize() called");
    element.style.width = `${element.scrollWidth}px`;
    element.style.height = `${element.scrollHeight}px`;
}

// window.addEventListener("resize", ()=> {updateOverflowSize(body_wrapper)});
// updateOverflowSize(body_wrapper);
// updateOverflowSize(body_wrapper);
