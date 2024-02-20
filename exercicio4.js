function obterDiaDaSemana(numero) {
    const diasDaSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    if (numero >= 1 && numero <= 7) {
        console.log(`O dia da semana correspondente ao número ${numero} é ${diasDaSemana[numero - 1]}.`);
    } else {
        console.log("Número inválido. Insira um valor entre 1 e 7.");
    }
}

// Exemplo de uso:
const numeroDigitado = 6; // Substitua pelo número que desejar
obterDiaDaSemana(numeroDigitado);
