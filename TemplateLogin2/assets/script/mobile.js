const btnSignIn = document.getElementById("btnSignIn");
const btnSignUp = document.getElementById("btnSignUp");

btnSignUp.addEventListener("click", () => {
    body.style.backgroundImage = "url('./assets/img/backgroundVerao.png')";
    containerPai.classList.add("containerPaiTemaVerao");
    containerLogin.style.display = "none";
    containerLogin.classList.remove("fade-in");
    containerLogin.classList.add("fade-out");
    containerCadastro.style.display = "flex";
    containerCadastro.classList.remove("fade-out");
    containerCadastro.classList.add("fade-in");
})

btnSignIn.addEventListener("click", () => {
    body.style.backgroundImage = "url('./assets/img/backgroundInverno.png')";
    containerPai.classList.remove("containerPaiTemaVerao");
    containerLogin.style.display = "flex";
    containerLogin.classList.remove("fade-out");
    containerLogin.classList.add("fade-in");
    containerCadastro.style.display = "none";
    containerCadastro.classList.remove("fade-in");
    containerCadastro.classList.add("fade-out");
})