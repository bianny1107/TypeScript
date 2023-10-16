import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function parimpar(numero: number): string {
    if (numero % 2 === 0) {
    return `${numero} es un número par.`;
    } else {
    return `${numero} es un número impar.`;
    }
}

rl.question("Ingrese un número: ", (valor: string) => {
    const valoringresado: number = parseInt(valor);

    if (!isNaN(valoringresado)) {
    const resultado = parimpar(valoringresado);
    console.log(resultado);
    } else {
    console.log("Por favor, ingrese un número válido.");
    }

    rl.close();
});
