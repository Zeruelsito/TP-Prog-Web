// import items from "../../data/items.json" with { type: 'json' };
import items from "../data/items.json" with { type: 'json' };
// import configuracion from "../../config/configuracion.json" with { type: 'json' };
import configuracion from "../config/configuracion.json" with { type: 'json' };


const tabCategoria1 = document.getElementById("tab-categoria-1");
const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
let linksCategorias = document.querySelectorAll("a.tab-categoria");

linksCategorias.forEach((linkCategoria) => {
   linkCategoria.addEventListener("click", () => {
      items.forEach((item) => {
         const { Categoria, Id, Nombre, Autor, Portada, Descripcion, Rating } = item;

         if (linkCategoria.innerText != Categoria) return;
         const articuloContenedor = document.querySelector("article." + Id.split("-")[1])

         articuloContenedor.getElementsByClassName("item-valor-nombre")[0].innerText = Nombre;
         articuloContenedor.getElementsByClassName("item-valor-autor")[0].innerText = Autor;
         articuloContenedor.getElementsByClassName("item-valor-portada")[0].src = Portada;
         articuloContenedor.getElementsByClassName("item-valor-portada")[0].alt = Nombre;
         articuloContenedor.getElementsByClassName("item-valor-descripcion")[0].innerText = Descripcion;
         articuloContenedor.getElementsByClassName("item-valor-rating")[0].innerText = Rating;


         let botonFavorito = articuloContenedor.querySelector(".boton-favorito");

         if (!botonFavorito) {
            botonFavorito = document.createElement("button");
            botonFavorito.className = "boton-favorito";
            botonFavorito.dataset.id = Id;

            const icono = document.createElement("ion-icon");
            icono.classList.add("icono-favorito");
            botonFavorito.appendChild(icono);

            const contenedorFav = articuloContenedor.querySelector(".icono-fav");
            if (contenedorFav) {
               contenedorFav.innerHTML = "";
               contenedorFav.appendChild(botonFavorito);
            }
         }

         // Siempre actualiza el data-id
         botonFavorito.dataset.id = Id;

         // Siempre actualiza el icono y la clase
         const icono = botonFavorito.querySelector("ion-icon");
         const favorito = esFavorito(Id);
         icono.setAttribute("name", favorito ? "heart" : "heart-outline");
         botonFavorito.classList.toggle("favorito", favorito);

         // Elimina cualquier evento anterior y agrega el nuevo
         botonFavorito.onclick = () => {

            if (usuarioLogueado !== null) {
               toggleFavorito(Id);
               const esAhoraFavorito = esFavorito(Id);
               icono.setAttribute("name", esAhoraFavorito ? "heart" : "heart-outline");
            botonFavorito.classList.toggle("favorito", esAhoraFavorito);
}
            
         };


         const personalizados = Object.keys(item).filter(key => key.startsWith("personalizado_"));

         personalizados.forEach((personalizado, index) => {
            articuloContenedor.getElementsByClassName(`item-campo-personalizado_${index + 1}`)[0].innerText = personalizado.split(".")[1];
            articuloContenedor.getElementsByClassName(`item-valor-personalizado_${index + 1}`)[0].innerText = item[personalizado];
         });

         articuloContenedor.id = Id;
      });
   });
});

function esFavorito(id) {
   const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
   return favoritos.includes(id);
}

function toggleFavorito(id) {
   let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
   if (favoritos.includes(id)) {
      favoritos = favoritos.filter(fav => fav !== id);
   } else {
      favoritos.push(id);
   }
   localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

if (configuracion["modo-test-prod"] === "prod") {
   tabCategoria1.click();
};
