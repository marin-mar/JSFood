import { getResource } from "../services/services";

function cards() {
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.classes = classes;
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.class = "menu__item";
        element.classList.add(this.class);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  // первый вариант получения данных (локальный с json-server):
  // getResource("http://localhost:3000/menu").then((data) => {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
  //   });
  // });

  // второй вариант получения данных (локальный с json-server):
  // axios.get("http://localhost:3000/menu").then((response) => {
  //   response.data.forEach(({ img, altimg, title, descr, price }) => {
  //     new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
  //   });
  // });

  // третий вариант получения данных (с репозитория в github):
  fetch("https://marin-mar.github.io/JSFood/data.json")
    .then((response) => response.json())
    .then((data) => {
      data["menu"].forEach(({ img, altimg, title, descr, price }) => {
        new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
      });
    });
}

export default cards;
