function obterNumeroDiasNoMes(nomeMes) {
    const meses = {
        janeiro: 31,
        fevereiro: 28,
        março: 31,
        abril: 30,
        maio: 31,
        junho: 30,
        julho: 31,
        agosto: 31,
        setembro: 30,
        outubro: 31,
        novembro: 30,
        dezembro: 31
    };

    const mesLowerCase = nomeMes.toLowerCase();

    if (meses.hasOwnProperty(mesLowerCase)) {
        return meses[mesLowerCase];
    } else {
        return "Mês inválido. Verifique a grafia e tente novamente.";
    }
}

// Exemplo de uso:
const mesDigitado = "fevereiro"; // Substitua pelo mês desejado
const numeroDias = obterNumeroDiasNoMes(mesDigitado);
console.log(`O mês de ${mesDigitado} tem ${numeroDias} dias.`);
