let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let boton = document.getElementById("recuperarContraseña");

boton.addEventListener("click", function () {
    let mailIngresado = document.getElementById("mailUsuario").value;
    let usuarioEncontrado = usuarios.find(usuario => usuario.mail === mailIngresado);
    if (usuarioEncontrado) {
        alert("La contraseña de ese mail es: " + usuarioEncontrado.contraseña);
    } else {
        alert("No se encontró un usuario con ese mail.");
    }
});




