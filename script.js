const botao = document.getElementById("btnCadastrar");
const captchaContainer = document.getElementById("captcha-container");
const captchaCheck = document.getElementById("captcha-check");
const form = document.querySelector("form");

let captchaAtivado = false;

botao.addEventListener("click", () => {
    
    if (!captchaAtivado) {
        captchaContainer.style.display = "block";
        captchaAtivado = true;
        return;
    }

    if (!captchaCheck.checked) {
        alert("Confirme que você não é um robô!");
        return;
    }

    form.submit();
});