// items es un array que contiene todos los 60 items, con sus correspondientes campos
import items from "../data/items.json" with { type: 'json' };

// Obtener número aleatorio entre 1 y 60
function numeroAleatorio() {
    return Math.floor(Math.random() * 60) + 1;
}

function obtenerCincoPortadasAleatorias() {
    let indices = []; // Aca voy a guardar todos los numeros que van a salir con la funcion de NumeroAleatorio

    while (indices.length < 5) {
        let indice = numeroAleatorio() - 1; // Para que vaya de 0 a 59 porque los arrays empiezan en 0.
        if (!indices.includes(indice)) {
            indices.push(indice); // Verifico que el indice no se repita, y si no se repite lo agrego al array de indices
        }
    }
    // De esta manera obtengo los 5 items usando esos indices
    let portadas = indices.map(i => items[i]);
    return portadas
}

const carrusel = document.getElementById('carouselExampleIndicators');
const carouselInner = carrusel.querySelector('.carousel-inner'); // Asi selecciono solo la parte donde van los slides y no otro .carrousel-inner
const carruselIndicators = carrusel.querySelector('.carousel-indicators');

//Limpio el HTMl para que no se acumulen slides
carouselInner.innerHTML = '';
carruselIndicators.innerHTML = '';

const portadas = obtenerCincoPortadasAleatorias();

portadas.forEach((item, i) => {
    // Creo el slide
    const slide = document.createElement('div');
    slide.className = 'carousel-item' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <div class="text-center">
        <img src="${item.Foto_Carousel}" class="d-block w-100" alt="${item.Nombre}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${item.Nombre}</h5>
      </div>
    `;
    carouselInner.appendChild(slide);

    // Creo los botones para cambiar de slide
    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-bs-target', '#carouselExampleIndicators');
    indicator.setAttribute('data-bs-slide-to', i);
    indicator.setAttribute('aria-label', `Slide ${i + 1}`);

    if (i === 0) {
        indicator.className = 'active';
        indicator.setAttribute('aria-current', 'true');
    }
    carruselIndicators.appendChild(indicator);
})
