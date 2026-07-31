document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById('menuBtn');
    const links = document.querySelector('.nav__links');

    if (boton && links) {
        boton.addEventListener('click', () => {
            links.classList.toggle('is-open');
        });
    }

    console.log('Landing de emprendedores lista para la Entrega 1');

});
