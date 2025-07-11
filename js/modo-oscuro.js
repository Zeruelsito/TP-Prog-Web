let modoOscuro = localStorage.getItem('modo-oscuro'); 
//Al cargar la pagina, revisa si el usuario habia activado el modo oscuro antes.

const cambiarModo = document.querySelector("#cambiar-modo");
//Busco el boton que el usuario va a usar para alternar entre modo claro y oscuro.

const activarModoOscuro = () => { //Agrega la clase .modo-oscuro al body y guarda la preferencia en el localStorage
    document.body.classList.add('modo-oscuro');
    localStorage.setItem('modo-oscuro', 'active');
}

const desactivarModoOscuro = () => { // Quita la clase y borra la preferencia
    document.body.classList.remove('modo-oscuro');
    localStorage.setItem('modo-oscuro', null);
}

if (modoOscuro === "active") {// Si el usuario ya eligio el modo oscuro antes, lo activa automaticamente al cargar la pagina.
    activarModoOscuro();
}

cambiarModo.addEventListener("click", () => {           
    modoOscuro = localStorage.getItem('modo-oscuro');

    if (modoOscuro !== "active") {
        activarModoOscuro();
    } else {
        desactivarModoOscuro();
    }
});

/* Cuando el usuario hace clic en el botón, el script:
    -Verifica el estado actual.
    -Si no está activo, lo activa.
    -Si ya está activo, lo desactiva.
*/