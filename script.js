const botoesDetalhes = document.querySelectorAll("[data-modal]");
const botoesFechar = document.querySelectorAll("[data-fechar-modal]");
const modais = document.querySelectorAll(".projeto-modal");

botoesDetalhes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const idModal = botao.dataset.modal;
    const modal = document.getElementById(idModal);

    if (modal) {
      modal.showModal();
    }
  });
});

botoesFechar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const modal = botao.closest(".projeto-modal");

    if (modal) {
      modal.close();
    }
  });
});

modais.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});
