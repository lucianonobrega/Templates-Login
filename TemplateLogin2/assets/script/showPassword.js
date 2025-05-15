const passwordIconLogin = document.getElementById("passwordIconLogin");
const inputPasswordLoginOlho = document.getElementById("inputPasswordLoginOlho");



const passwordIconCadastro = document.getElementById("passwordIconCadastro");
const inputPasswordCadastroOlho = document.getElementById("inputPasswordCadastroOlho");



passwordIconLogin.addEventListener("click", () => {
    if (inputPasswordLoginOlho.type === "password") {
        passwordIconLogin.src = "./assets/img/iconOlhoAbertoInverno.png";
        inputPasswordLoginOlho.type = "text";
    } else {
        passwordIconLogin.src = "./assets/img/iconOlhoFechadoInverno.png";
        inputPasswordLoginOlho.type = "password";
    }
});



passwordIconCadastro.addEventListener("click", () => {
    if (inputPasswordCadastroOlho.type === "password") {
        passwordIconCadastro.src = "./assets/img/iconOlhoAbertoVerao.png";
        inputPasswordCadastroOlho.type = "text";
    } else {
        passwordIconCadastro.src = "./assets/img/iconOlhoFechadoVerao.png";
        inputPasswordCadastroOlho.type = "password";
    }
});