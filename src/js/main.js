import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calculator from "./modules/calculator";
import forms from "./modules/forms";
import slider from "./modules/slider";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 300000);
  const remainingTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3);

  tabs(".tabheader__item", ".tabcontent", ".tabcontainer", "tabheader__item--active");
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", `"${remainingTime.getFullYear()}-${remainingTime.getMonth() + 1}-${remainingTime.getDate()}"`);
  cards();
  calculator();
  forms("form", modalTimerId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    prevArrow: ".offer__slider-prev",
    nextArrow: ".offer__slider-next",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
});
