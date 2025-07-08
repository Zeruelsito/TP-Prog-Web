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
                    <div class="icono-fav">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                        </svg>
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </div>
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