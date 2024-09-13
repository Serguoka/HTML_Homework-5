"use strict";

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const modalOpen = document.querySelector(".banner__button");

modalOpen.addEventListener("click", () => {
  modal.style.display = "block";
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});
