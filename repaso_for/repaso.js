function mostrar(opcion) {
    // Estructura switch para ejecutar funciones según el valor recibido 
    switch (opcion) {
        case 1:
            ejercicio1();
            break;
        case 2:
            imprimirCentenas();
            break;
        case 3:
            imprimirCentenasRegresivo();
            break;
        case 4:
            mostrarMensaje1();
            break;
        case 5:
            mostrarMensaje2();
            break;
        case 6:
            mostrarMensaje3();
            break;
        case 7:
            mostrarMensaje4();
            break;
        case 8:
            ImprimirTabla3();
            break;
        case 9:
            imprimirPares();
            break;
        default:
            console.log("Opción no válida");
            break;
    }
}

// 1. Imprimir números del 1 al 5 
function ejercicio1() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// 2. Centenas ascendentes: 100 hasta 1000 
function imprimirCentenas() {
    for (let i = 100; i <= 1000; i += 100) {
        console.log(i);
    }
}

// 3. Centenas descendentes: 1000 hasta 800 
function imprimirCentenasRegresivo() {
    for (let i = 1000; i >= 800; i -= 100) {
        console.log(i);
    }
}

// 4. Mensaje 1: Inicia en 5, usa <, imprime 3 veces 
function mostrarMensaje1() {
    for (let i = 5; i < 8; i++) {
        console.log("Mensaje 1");
    }
}

// 5. Mensaje 2: Inicia en 10, usa >=, imprime 3 veces 
function mostrarMensaje2() {
    for (let i = 10; i >= 8; i--) {
        console.log("Mensaje 2");
    }
}

// 6. Mensaje 3: Inicia en 0, usa <, imprime 3 veces 
function mostrarMensaje3() {
    for (let i = 0; i < 3; i++) {
        console.log("Mensaje 3");
    }
}

// 7. Mensaje 4: Inicia en 8, usa >, imprime 3 veces 
function mostrarMensaje4() {
    for (let i = 8; i > 5; i--) {
        console.log("Mensaje 4");
    }
}

// 8. Tabla del 3: Formato 3x1=3 
function ImprimirTabla3() {
    for (let i = 1; i <= 10; i++) {
        console.log("3x" + i + "=" + (3 * i));
    }
}

// Extra: Imprimir pares hasta 20
function imprimirPares() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}