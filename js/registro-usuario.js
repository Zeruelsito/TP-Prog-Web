const textoError = document.getElementById("errorRegistro");
const textoCreacion = document.getElementById("registroCorrecto");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const botonRegistro = document.getElementById("botonRegistro");


document
  .getElementById("formularioRegistro")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const mailRegistro = document.getElementById("mailUsuario").value;
    const contraseñaRegistro = document.getElementById("contraseñaUsuario").value;

    console.log("Email ingresado:", mailRegistro);
    console.log("Contraseña ingresada:", contraseñaRegistro);

    if (
      mailRegistro.includes("@") &&
      mailRegistro.endsWith(".com") &&
      contraseñaRegistro.length >= 8
    ) {
      textoCreacion.style.display = "block";
      textoError.style.display = "none";

      usuarios.push({
        mail: mailRegistro,
        contraseña: contraseñaRegistro,
        datosPersonales: []
      });

      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      console.log("Usuario guardado en localStorage:", localStorage.getItem("usuarios"));
    } else {
      textoError.style.display = "block";
      textoCreacion.style.display = "none";
      console.log("Datos inválidos, no se guardó nada.");
    }
     document.getElementById("formularioRegistro").reset();
  });
