const seccionPeliculas = document.getElementById('seccion-categoria');

seccionPeliculas.addEventListener('click', function (event) {
    const peliculaArticulo = event.target.closest('.articulo-categoria');

    if (peliculaArticulo && peliculaArticulo.id) {
        event.preventDefault();
        const peliculaId = peliculaArticulo.id;
        window.location.href = `html/pelicula-detalle.html?id=${peliculaId}`;
    }
}
);