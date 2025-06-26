let modoOscuro = localStorage.getItem('modo-oscuro');

const cambiarModo = document.querySelector("#cambiar-modo");

const activarModoOscuro = () => {
    document.body.classList.add('modo-oscuro');
    localStorage.setItem('modo-oscuro', 'active');
}

const desactivarModoOscuro = () => {
    document.body.classList.remove('modo-oscuro');
    localStorage.setItem('modo-oscuro', null);
}

if (modoOscuro === "active") {
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