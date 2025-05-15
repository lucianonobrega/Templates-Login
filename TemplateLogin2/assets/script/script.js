const body = document.querySelector("body");
const containerPai = document.getElementById("containerPai");
const btnPainelDeslizanteInverno = document.getElementById("btnPainelDeslizanteInverno");
const btnPainelDeslizanteVerao = document.getElementById("btnPainelDeslizanteVerao");
const painelDeslizante = document.getElementById("painelDeslizante");
const containerPainelDeslizanteLogin = document.getElementById("containerPainelDeslizanteLogin");
const containerPainelDeslizanteCreateAccount = document.getElementById("containerPainelDeslizanteCreateAccount");
const containerCadastro = document.getElementById("containerCadastro");
const containerLogin = document.getElementById("containerLogin");



btnPainelDeslizanteInverno.addEventListener("click", () => {
    body.style.backgroundImage = "url('./assets/img/backgroundVerao.png')";
    containerPai.classList.add("containerPaiTemaVerao");
    painelDeslizante.classList.remove("animacaoPainelDeslizanteDireita");
    painelDeslizante.classList.add("animacaoPainelDeslizanteEsquerda");
    painelDeslizante.classList.add("painelDeslizanteTemaVerao");
    containerCadastro.classList.add("mostrarConteudo");
    containerLogin.classList.remove("mostrarConteudo");
    containerPainelDeslizanteCreateAccount.classList.remove("fade-in");
    containerPainelDeslizanteCreateAccount.classList.add("fade-out");
    containerPainelDeslizanteCreateAccount.style.display = "none";
    containerPainelDeslizanteLogin.classList.remove("fade-out");
    containerPainelDeslizanteLogin.classList.add("fade-in");
    containerPainelDeslizanteLogin.style.display = "flex";
})

btnPainelDeslizanteVerao.addEventListener("click", () => {
    body.style.backgroundImage = "url('./assets/img/backgroundInverno.png')";
    containerPai.classList.remove("containerPaiTemaVerao");
    painelDeslizante.classList.remove("animacaoPainelDeslizanteEsquerda");
    painelDeslizante.classList.add("animacaoPainelDeslizanteDireita");
    painelDeslizante.classList.remove("painelDeslizanteTemaVerao");
    containerLogin.classList.add("mostrarConteudo");
    containerCadastro.classList.remove("mostrarConteudo");
    containerPainelDeslizanteCreateAccount.classList.remove("fade-out");
    containerPainelDeslizanteCreateAccount.classList.add("fade-in");
    containerPainelDeslizanteCreateAccount.style.display = "flex";
    containerPainelDeslizanteLogin.classList.remove("fade-in");
    containerPainelDeslizanteLogin.classList.add("fade-out");
    containerPainelDeslizanteLogin.style.display = "none";
})