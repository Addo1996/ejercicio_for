function generarTablas(){
    let contenedor = document.getElementById("contenedorTabla");
    let contenido = "";
    let numero = Number(document.getElementById("txtNumero").value);

    for(let i = 1; i <= 10; i++){
        contenido = contenido + "<div class='fila'>" + numero + " x " + i + " = " + (numero * i) + "</div>";
    }

    contenedor.innerHTML = contenido;
}