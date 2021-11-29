function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add("show");
  document.body.classList.add("locked");
  modal.classList.remove("hide");

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.classList.remove("locked");
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalTriggers = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modalSelector, modalTimerId);
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal || e.target.getAttribute("data-close") === "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export { openModal, closeModal };
