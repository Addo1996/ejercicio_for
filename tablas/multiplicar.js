function generarTablas(){
    let contenedor = document.getElementById("contenedorTabla");
    let contenido = "";

    for(let i = 1; i <= 10; i++){
        contenido = contenido + "<div class='fila'>3 x " + i + " = " + (3 * i) + "</div>";
    }

    contenedor.innerHTML = contenido;
}