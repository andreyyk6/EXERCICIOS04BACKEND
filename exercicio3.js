function validarSenha(senha) {
    // Verificar o tamanho da senha
    if (senha.length < 8) {
        return false;
    }

    // Verificar se há pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) {
        return false;
    }

    // Verificar se há pelo menos uma letra minúscula
    if (!/[a-z]/.test(senha)) {
        return false;
    }

    // Verificar se há pelo menos um número
    if (!/\d/.test(senha)) {
        return false;
    }

    // Se todas as condições forem atendidas, a senha é válida
    return true;
}

// Exemplo de uso:
const senhaArmazenada = "MinhaSenha123";
const senhaEhValida = validarSenha(senhaArmazenada);

if (senhaEhValida) {
    console.log("A senha é válida!");
} else {
    console.log("A senha não atende aos critérios de validade.");
}
