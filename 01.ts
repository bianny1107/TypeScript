import promptSync from 'prompt-sync';

const prompt = promptSync();

function suma(): void {
    const v1: number = parseInt(prompt("Ingrese el primer valor: "));
    const v2: number = parseInt(prompt("Ingrese el segundo valor: "));

    if (isNaN(v1) || isNaN(v2)) {
        console.log("Por favor, ingrese números enteros válidos.");
    }   else {
        const resultado: number = v1 + v2;
        console.log(`La suma de ${v1} y ${v2} es igual a ${resultado}`);
    }
}

suma();
