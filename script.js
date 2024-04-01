// JavaScript para agregar y quitar la clase 'scrolled' al menú de navegación al hacer scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header.header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop - 50, // Ajusta aquí si tienes un encabezado fijo que ocupa parte de la pantalla
            behavior: 'smooth'
        });
    }
});