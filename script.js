const parede = document.querySelector(".parede");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".galeria-imagem");
const fechar = document.querySelector(".fechar");

parede.addEventListener("click", (e) => {
  const img = e.target.closest(".galeria-img");
  console.log("clicado:", img);

  if (!img) return;

  modalImg.src = img.src;
  modal.classList.add("ativo");
});

