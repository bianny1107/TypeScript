class Tarea {
    constructor(public titulo: string, public completa: boolean) {}
    }

    const listaTareas: Tarea[] = [
    new Tarea("Hacer la compra", false),
    new Tarea("Estudiar TypeScript", true),
    new Tarea("Ejercicio de programación", false)
    ];

    console.log("Lista de Tareas:");
    listaTareas.forEach((tarea, index) => {
    const estado = tarea.completa ? "Completa" : "Pendiente";
    console.log(`${index + 1}. ${tarea.titulo} - ${estado}`);
    });
