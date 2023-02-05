(function(){
    const openButtom = document.querySelector(".nav__menu");
    const menu = document.querySelector(".nav__list");
    const closeMenu = document.querySelector(".nav__close");
    const linkMenu = document.querySelector(".nav__link");
    linkMenu1 = document.querySelector(".sobremi"),
    linkMenu2 = document.querySelector(".proyectos"),
    linkMenu3 = document.querySelector(".contacto");

    openButtom.addEventListener("click", ()=>{
        menu.classList.add("nav__list--show");
    });

    closeMenu.addEventListener("click", ()=>{
        menu.classList.remove("nav__list--show");
    });

    linkMenu.addEventListener("click", ()=>{menu.classList.remove("nav__list--show");});
    linkMenu1.addEventListener("click", ()=>{menu.classList.remove("nav__list--show");});
    linkMenu2.addEventListener("click", ()=>{menu.classList.remove("nav__list--show");});
    linkMenu.addEventListener("click", function(){menu.classList.remove("nav__list--show");});
})();