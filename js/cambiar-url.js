const seccionPeliculas = document.getElementById('seccion-categoria');
// Buscar el elemento con el id(SECCION-CATEGORIA) que es en donde estan listadas todas las peliculas.

seccionPeliculas.addEventListener('click', function (event) { // Cada vez que el usuario hace click en cualquier parte de la imagen se ejecuta lo siguiente

    if(event.target.closest('.boton-favorito')){
        return // Si a le hacemos click al boton de favorito, la funcion termina aca, haciendo que el boton cumpla con su funcionamiento con normalidad
    }else {const peliculaArticulo = event.target.closest('.articulo-categoria');
            // De lo contrario busca el elemento mas cercano con la clase (ARTICULO-CATEGORIA)
        if (peliculaArticulo && peliculaArticulo.id) { // Y si encontro una pelicula y tiene un id haceme lo siguiente 
            event.preventDefault(); // Evitame el comportamiento del click por defecto
            const peliculaId = peliculaArticulo.id; // Toma el id de la pelicula clickeada
            window.location.href = `html/pelicula-detalle.html?id=${peliculaId}`; // Y mandame al usuario a la pagina con los detalle de la pelicula pasando el id por la URlL
        }}
}
);  