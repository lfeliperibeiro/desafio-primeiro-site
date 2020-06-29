const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");

for (let card of cards) {
  card.addEventListener("click", () => {
    const pageId = card.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://rocketseat.com.br/${pageId}`;
  });
}

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

document.querySelector(".maximize-modal").addEventListener("click", () => {
  modal.classList.toggle("max");
});
