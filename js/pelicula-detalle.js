import items from '../data/items.json' with { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {
    const urlPagina = new URLSearchParams(window.location.search);
    const idPelicula = urlPagina.get('id');

    const peliculaBuscada = items.find((pelicula) => {
        return pelicula.Id === idPelicula
    });

    if (peliculaBuscada) {
        const peliculaTitulo = document.querySelector('.detalle-titulo');
        peliculaTitulo.innerText = peliculaBuscada.Nombre;

        const peliculaPortada = document.querySelector('.detalle-portada-imagen');
        peliculaPortada.src = peliculaBuscada.Portada

        const peliculaDirector = document.querySelector('.detalle-director');
        peliculaDirector.innerText = "Dirigido por: " + peliculaBuscada.Autor;

        const peliculaDescripcion = document.querySelector('.detalle-descripcion');
        peliculaDescripcion.innerText = peliculaBuscada.Descripcion;

        const peliculaGenero = document.querySelector('.detalle-genero')
        peliculaGenero.innerText = "Categoria: " + peliculaBuscada.Categoria;

        //ESTRELLAS RATING
        const peliculaRating = document.querySelector('.detalle-calificacion');

        peliculaRating.innerHTML = '<h4>CALIFICACIÓN</h4>';

        const rating = Math.round(peliculaBuscada.Rating);

        for (let i = 1; i <= 5; i++) {
            const estrella = document.createElement('span');
            estrella.classList.add('estrella');

            if (i <= rating) {
                estrella.innerHTML = '&#9733;';
            } else {
                estrella.innerHTML = '&#9734;';
            }

            peliculaRating.appendChild(estrella);
        }

        //REPARTO
        const peliculaReparto = document.querySelector('.detalle-reparto');
        const textoDelReparto = peliculaBuscada['personalizado_2.Elenco'];

        peliculaReparto.innerHTML = '';

        const listaActores = textoDelReparto.split('\n');

        listaActores.forEach(nombreActor => {
            const nombreLimpio = nombreActor.replace('•', '').trim();

            if (nombreLimpio) {
                const itemLista = document.createElement('li');
                itemLista.textContent = nombreLimpio;
                peliculaReparto.appendChild(itemLista);
            }
        });

        // PREMIOS
        const peliculaPremios = document.querySelector('.detalle-premios');
        const textoPremios = peliculaBuscada['personalizado_4.Premios'];

        peliculaPremios.innerHTML = '';

        const listaPremios = textoPremios.split('\n');

        listaPremios.forEach(nombrePremio => {
            const nombreLimpio = nombrePremio.replace('•', '').trim();

            if (nombreLimpio) {
                const itemListaPremio = document.createElement('li');
                itemListaPremio.innerText = nombreLimpio;
                peliculaPremios.appendChild(itemListaPremio);

            }
        });

        const peliculaDuracion = document.querySelector('.detalle-duracion');
        peliculaDuracion.innerText = peliculaBuscada['personalizado_3.Duracion']

        const peliculaClasificacionEdad = document.querySelector('.detalle-edad');
        peliculaClasificacionEdad.innerText = peliculaBuscada['personalizado_5.Clasificacion (Por Edad)']

    } else {
        console.error("No se encontró la película con el ID:", idPelicula);
    }
});

