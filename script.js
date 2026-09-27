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

// =========================================================
// FORMULÁRIO DE CONTATO
// =========================================================

const formContato = document.querySelector("#form-contato");
const statusContato = document.querySelector("#status-contato");

if (formContato && statusContato) {
  formContato.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    const emailDestino = "davi.renan.b3@gmail.com";

    const assunto = encodeURIComponent(`Contato do portfólio - ${nome}`);

    const corpo = encodeURIComponent(
      `Nome: ${nome}\n` + `E-mail: ${email}\n\n` + `Mensagem:\n${mensagem}`,
    );

    const urlGmail =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${emailDestino}` +
      `&su=${assunto}` +
      `&body=${corpo}`;

    const janelaEmail = window.open(urlGmail, "_blank");

    if (janelaEmail) {
      statusContato.textContent = "Abrindo uma nova mensagem no Gmail...";

      formContato.reset();
    } else {
      statusContato.textContent =
        "O navegador bloqueou a abertura do Gmail. Permita pop-ups para este site e tente novamente.";
    }
  });
}
