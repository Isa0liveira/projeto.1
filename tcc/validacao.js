function validacao() {
    const validaremail = emailvalido();
    document.getElementById("botao-login").disabled = !validaremail;

    const validarsenha = senhavalida();
    document.getElementById("botao-login").disabled = !validaremail || !validarsenha;

}

function emailvalido() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validacaoemail(email);
}

function senhavalida() {
    const senha = document.getElementById("senha").value;
    if (!senha) {
        return false;
    }
    return true;
}

function validacaoemail(email) {
    return /\S+@\S+\.\S+/.test(email);
}