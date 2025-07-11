let usuarios = JSON.parse(localStorage.getItem("usuarios"));
const botonRegistro = document.getElementById("botonRegistro");

const textoError = document.getElementById("errorInicio");
const textoInicio = document.getElementById("inicioCorrecto");

if (!usuarios) {
  textoError.style.display = "block";
  textoInicio.style.display = "none";
  console.log("No hay usuarios registrados en localStorage.");
} else {
  document
    .getElementById("inicioSesion")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const mailRegistro = document.getElementById("mailUsuario").value;
      const contraseñaRegistro =
        document.getElementById("contraseñaUsuario").value;

      console.log("Email ingresado:", mailRegistro);
      console.log("Contraseña ingresada:", contraseñaRegistro);

      // Buscar si existe un usuario con ese mail y contraseña
      const usuarioEncontrado = usuarios.find(
        (usuario) =>
          usuario.mail === mailRegistro &&
          usuario.contraseña === contraseñaRegistro
      );

      if (usuarioEncontrado) {
        textoError.style.display = "none";
        textoInicio.style.display = "block";
        sessionStorage.setItem(
          "usuarioLogueado",
          JSON.stringify(usuarioEncontrado)
        );
        setTimeout(() => {
          window.location.href = "/index.html";
        }, 2000);
      } else {
        textoError.style.display = "block";
        textoInicio.style.display = "none";
        console.log("Datos inválidos, no se encontró el usuario.");
      }
      document.getElementById("inicioSesion").reset();
    });
}
