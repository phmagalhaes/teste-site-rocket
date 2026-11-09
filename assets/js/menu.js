const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".header__nav");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");

    menuButton.classList.toggle("is-open", isOpen);

    menuButton.setAttribute("aria-expanded", isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton.classList.remove("is-open");

      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================================
   AVISO - EM DESENVOLVIMENTO
========================================================= */

const developmentModal = document.querySelector("#developmentModal");
const developmentModalClose = document.querySelector("#developmentModalClose");
const developmentModalButton = document.querySelector(
  "#developmentModalButton",
);

const developmentElements = document.querySelectorAll(".em-desenvolvimento");

function openDevelopmentModal(event) {
  event.preventDefault();

  developmentModal.classList.add("is-open");

  document.body.style.overflow = "hidden";
}

function closeDevelopmentModal() {
  developmentModal.classList.remove("is-open");

  document.body.style.overflow = "";
}

developmentElements.forEach((element) => {
  element.addEventListener("click", openDevelopmentModal);
});

developmentModalClose.addEventListener("click", closeDevelopmentModal);

developmentModalButton.addEventListener("click", closeDevelopmentModal);

/* Fechar clicando fora da caixa */

developmentModal.addEventListener("click", (event) => {
  if (event.target === developmentModal) {
    closeDevelopmentModal();
  }
});

/* Fechar com ESC */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDevelopmentModal();
  }
});
