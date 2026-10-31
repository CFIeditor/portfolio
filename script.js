
// ==========================================
// CFI EDITOR — NAVEGAÇÃO
// ==========================================

const home = document.getElementById("home");
const projetos = document.getElementById("projetos");

const btnProjetos = document.getElementById("btn-projetos");
const btnVoltar = document.getElementById("btn-voltar");

let transicionando = false;


// ==========================================
// ABRIR PROJETOS
// ==========================================

btnProjetos.addEventListener("click", () => {

  if (transicionando) return;

  transicionando = true;

  home.classList.add("saindo");

  setTimeout(() => {

    home.style.display = "none";

    projetos.style.display = "block";

    void projetos.offsetWidth;

    requestAnimationFrame(() => {
      projetos.classList.add("ativo");
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      transicionando = false;
    }, 550);

  }, 450);

});


// ==========================================
// VOLTAR PARA A TELA INICIAL
// ==========================================

btnVoltar.addEventListener("click", () => {

  if (transicionando) return;

  transicionando = true;

  projetos.classList.remove("ativo");

  setTimeout(() => {

    projetos.style.display = "none";

    home.style.display = "flex";

    void home.offsetWidth;

    requestAnimationFrame(() => {
      home.classList.remove("saindo");
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      transicionando = false;
    }, 550);

  }, 500);

});
const introScreen = document.getElementById("introScreen");
const introButton = document.getElementById("introButton");
const bgMusic = document.getElementById("bgMusic");

introButton.addEventListener("click", () => {

  // Começa a música
  bgMusic.volume = 0.5;

  bgMusic.play().catch((error) => {
    console.log("Não foi possível iniciar a música:", error);
  });

  // Fecha a tela de entrada
  introScreen.classList.add("hidden");

});