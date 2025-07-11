import items from "../data/items.json" with { type: 'json' }; //Importa los datos de las peliculas.

const buscador = document.querySelector("#buscador");
let resultados = document.querySelector("#seccion-categoria");
let paginaCompleta = resultados.innerHTML;
let categoria;
const elementoNav = document.getElementsByClassName("tab-categoria");


Array.from(elementoNav).forEach((item) => { // Guardo la categoria seleccionada
    item.addEventListener("click", () => { // Cuando el usuario hace click en una categoria, se guarda el nombre de la categoria seleccionada
        categoria = item.innerText;
    })
});

buscador.addEventListener("keyup", () => { //Cada vez que el usuario escribe algo, se ejecuta la función de búsqueda.
    let valorInput = buscador.value;
    let valoresFiltrados;

    if (valorInput.trim() === "") {
        resultados.innerHTML = paginaCompleta;  
    } else {
        if (valorInput.length >= 3) {
            valoresFiltrados = items.filter(item =>
                (item.Autor.toLowerCase().includes(valorInput.toLowerCase()) ||
                    item.Nombre.toLowerCase().includes(valorInput.toLowerCase())) && categoria === item.Categoria
            );
            let html = "";
            valoresFiltrados.forEach((item) => {
                html +=
                    `
                <article id="${item.Id}" class="articulo-categoria item${item.Id}">
                    <header class="header-articulo">
                        <a href="html/pelicula-detalle.html?id=${item.Id}">
                            <img class="item-valor-portada" src="${item.Portada}" alt="Imagen de Portada">
                        </a>
                    </header>
                </article>`;
            });
            if (valoresFiltrados.length > 0) {
                resultados.innerHTML = html;
            } else {
                resultados.innerHTML = "<p>No se encontró nada.</p>";
            }
        }
        else {
            resultados.innerHTML = "<p>No se encontró nada.</p>";
        }
    }
})

/* Si el buscador está vacío, se muestra el contenido original (paginaCompleta).
Si el usuario escribe 3 o más caracteres, filtra las películas que:
Coincidan en el nombre o autor (ignorando mayúsculas/minúsculas).
Sean de la categoría seleccionada.
Si encuentra resultados, los muestra como tarjetas de película.
Si no encuentra nada, muestra el mensaje: "No se encontró nada."
*/