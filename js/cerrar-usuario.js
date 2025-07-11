document.getElementById("cerrarSesion").addEventListener("click", () => {
  sessionStorage.removeItem("usuarioLogueado");
    setTimeout(() => {
        location.reload(); // Recarga 
    }, 1000);

});
