function botonClickeado(numeroBoton) {
    let botonesSelecciones = document.getElementsByClassName("tab-categoria")
    let botonModificar = botonesSelecciones[numeroBoton].id

    for (let i = 0; i < botonesSelecciones.length; i++) {
        if (botonesSelecciones[i].id === botonModificar) {
            document.getElementById(botonesSelecciones[i].id).style.cssText = 'background-color: black; color: white; border-radius:20px;';
        } else {
            document.getElementById(botonesSelecciones[i].id).style.cssText = 'background-color: white; color: dark;';
        }
    }
}