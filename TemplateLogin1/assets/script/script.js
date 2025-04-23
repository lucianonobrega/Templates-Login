const passwordIcon = document.getElementById("passwordIcon");
const inputPassword = document.getElementById("inputPassword");

passwordIcon.addEventListener("click", () => {
    if(passwordIcon.src.includes("olhofechado")){
        passwordIcon.src = "assets/img/olhoaberto.png";
        inputPassword.type = "text";
    }
    else{
        passwordIcon.src = "assets/img/olhofechado.png";
        inputPassword.type = "password";
    };
})