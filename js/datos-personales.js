let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

document.getElementById("botonMail").addEventListener("click", () => {
  const usuarioActual = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const index = usuarios.findIndex((user) => user.mail === usuarioActual.mail);

  if (index !== -1) {
    usuarios[index].mail = document.getElementById("emailPrincipal").value;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuarios[index]));
    console.log("Usuario actualizado correctamente.");
  } else {
    console.log("Usuario no encontrado en localStorage.");
  }
});


document.getElementById("botonContraseña").addEventListener("click", () => {
  const usuarioActual = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const index = usuarios.findIndex((user) => user.mail === usuarioActual.mail);

  if (index !== -1) {
    usuarios[index].contraseña = document.getElementById("password").value;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuarios[index]));
    console.log("Usuario actualizado correctamente.");
  } else {
    console.log("Usuario no encontrado en localStorage.");
  }
});



document.getElementById("btnGuardarDatosPersonales").addEventListener("click", () => {
  const usuarioActual = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const index = usuarios.findIndex((user) => user.mail === usuarioActual.mail);

  if (index !== -1) {
    const datos = {
    nombre: document.getElementById('nombre').value,
    apellidos: document.getElementById('apellidos').value,
    tipo: document.getElementById('tipo').value,
    nro_doc: document.getElementById('nro_doc').value,
    nacimiento: document.getElementById('nacimiento').value,
    telefono: document.getElementById('telefono').value,
    email: document.getElementById('emailSecundario').value
  };

   usuarios[index].datosPersonales = datos;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuarios[index]));
    console.log("Usuario actualizado correctamente.");
  } else {
    console.log("Usuario no encontrado en localStorage.");
  }
});


