
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
