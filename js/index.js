const sections = document.querySelectorAll("section");
const config = {
    rootMargin: "0px",
    threshold: [0.6, 0.9],
};

window.addEventListener("scroll", function(){
    let header = document.querySelector(".flex__header");
    header.classList.toggle("abajo", window.scrollY>1);
});

let observer = new IntersectionObserver(function(entries){ 
    entries.forEach(entry => {
        if(entry.isIntersecting)intersectionHandler(entry);
    });
}, config);

sections.forEach((section) => { observer.observe(section); });

function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector(".nav__list  .active");
    const shouldBeActive = document.querySelector("." + id );
    if (currentlyActive) currentlyActive.classList.remove("active");
    if (shouldBeActive) shouldBeActive.classList.add("active");
}

ScrollReveal().reveal(".grid__izquierda", { duration: 1300, origin: 'left', distance: '400px' });
ScrollReveal().reveal(".grid__derecha", { duration: 1300, origin: 'right', distance: '400px'});
ScrollReveal().reveal(".proyectos__titulo", { duration: 1000, origin: 'bottom', distance: '400px' });
ScrollReveal().reveal(".flex__proyectos", {  duration: 2000, origin: 'bottom', distance: '400px' });
ScrollReveal().reveal(".contacto__texto", { duration: 2000 });
ScrollReveal().reveal(".icono__1", {  duration: 2000, origin: 'bottom', distance: '200px' });
ScrollReveal().reveal(".icono__2", {  duration: 2500, origin: 'bottom', distance: '200px' });
ScrollReveal().reveal(".icono__3", {  duration: 3000, origin: 'bottom', distance: '200px' });

const colorPreferencia = window.matchMedia('(prefers-color-schemed: dark)').matches ? 'dark' : 'light';
const botonModo = document.querySelector('.modo__lectura');
const setTema = (tema) => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('tema', tema);
    const sol = document.querySelector('.sol');
    const luna = document.querySelector('.luna');
    if(tema == "light"){
        luna.classList.add('activo');
        sol.classList.remove('activo');
    }
    else if(tema == "dark"){
        sol.classList.add('activo');
        luna.classList.remove('activo');
    }

}

botonModo.addEventListener('click', ()=>{
    let botonTema = localStorage.getItem('tema') === 'dark' ? 'light' : 'dark';
    setTema(botonTema);
});

setTema(localStorage.getItem('tema') || colorPreferencia);
