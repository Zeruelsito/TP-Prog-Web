import items from "../data/items.json" with { type: 'json' };

const buscador = document.querySelector("#buscador");
let resultados = document.querySelector("#seccion-categoria");
let paginaCompleta = resultados.innerHTML;
let categoria;
const elementoNav = document.getElementsByClassName("tab-categoria");


Array.from(elementoNav).forEach((item) => {
    item.addEventListener("click", () => {
        categoria = item.innerText;
    })
});

buscador.addEventListener("keyup", () => {
    let valorInput = buscador.value;
    let valoresFiltrados;

    // if (valorInput.length >= 3) {
    //     valoresFiltrados = items.filter(item =>
    //         (item.Autor.toLowerCase().includes(valorInput.toLowerCase()) ||
    //             item.Nombre.toLowerCase().includes(valorInput.toLowerCase())) && categoria === item.Categoria
    //     );
    //     console.log(`Filtrando por: ${valorInput} en la categoría: ${categoria}`)
    // }

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