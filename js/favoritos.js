fetch("../data/items.json")
  .then((res) => res.json())
  .then((items) => mostrarFavoritos(items));

let usuarioLogueado

if (usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado")) == undefined) {
  console.log("No hay usuario");
} else {
  function mostrarFavoritos(items) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const contenedor = document.getElementById("seccion-categoria"); // No uses un div intermedio
    contenedor.innerHTML = ""; // Limpiar antes de agregar

    const itemsFavoritos = items.filter((item) => favoritos.includes(item.Id));

    itemsFavoritos.forEach((item) => {
      const div = document.createElement("article");
      div.classList.add("articulo-categoria");

      div.innerHTML = `
<div class="header-articulo">
        <button class="boton-favorito favorito" data-id="${item.Id}">
            <ion-icon name="heart"></ion-icon>
        </button>
        <img src="${item.Portada}" alt="${item.Nombre}">
    </div>
    <h3 class="item-valor-nombre">${item.Nombre}</h3>
`;

      const boton = div.querySelector(".boton-favorito");
      const icono = boton.querySelector("ion-icon");

      boton.addEventListener("click", () => {
        // event.stopPropagation();

        toggleFavorito(item.Id);
        const esAhoraFavorito = esFavorito(item.Id);

        if (esAhoraFavorito) {
          boton.classList.add("favorito");
          icono.setAttribute("name", "heart");
        } else {
          boton.classList.remove("favorito");
          icono.setAttribute("name", "heart-outline");
          div.remove(); // quita de la vista
        }
      });

      contenedor.appendChild(div); // div tiene la clase "articulo-categoria"
    });
  }

  function esFavorito(id) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    return favoritos.includes(id);
  }

  function toggleFavorito(Id) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (favoritos.includes(Id)) {
      favoritos = favoritos.filter((favId) => favId !== Id);
    } else {
      favoritos.push(Id);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}
