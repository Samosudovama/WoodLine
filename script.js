//Теперь script.js импортирует готовый объект pageContents из content.js и работает с ним.

import { pageContents } from "./content.js";

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const pageTitle = document.getElementById("page-title");
const pageContent = document.getElementById("page-content");
const navLinks = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
   burger.classList.toggle("toggle");
   navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
   link.addEventListener("click", (e) => {
      e.preventDefault();

      // 1. Сначала сразу помечаем ссылку как активную
      navLinks.forEach((l) => l.classList.remove("active")); // Убираем со всех
      link.classList.add("active"); // Добавляем текущей

      const key = link.getAttribute("data-key");
      const data = pageContents[key];

      if (data) {
         pageTitle.innerHTML = data.title;
         pageContent.innerHTML = data.text;

         burger.classList.remove("toggle");
         navMenu.classList.remove("active");
      }
   });
});
