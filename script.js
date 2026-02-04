const parede = document.querySelector("parede");
const galeria = document.getElementsByClassName("galeria");
const imagens = document.querySelectorAll(".imagens");


imagens.forEach((imagem) => {
  imagem.addEventListener("click", (event) => {
    console.log("Elemento clicado:", event.target);
  });
});
