const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
if (usuarioLogueado != null) {
  document.getElementById("sesionIniciada").style.display = "block";
  document.getElementById("sesionIniciadaCerrar").style.display = "block";
  document.getElementById("sesion").style.display = "none";
} else {
  document.getElementById("sesionIniciada").style.display = "none";
  document.getElementById("sesionIniciadaCerrar").style.display = "none";
  document.getElementById("sesion").style.display = "block";
  localStorage.removeItem("favoritos")
  console.log("no existe este usuario1111111111")
}
