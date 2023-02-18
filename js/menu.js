(function(){
    const openButtom = document.querySelector(".nav__menu");
    const menu = document.querySelector(".nav__list");
    const closeMenu = document.querySelector(".nav__close");
    const linkMenu = document.querySelectorAll(".nav__link");

    openButtom.addEventListener("click", ()=>{
        menu.classList.add("nav__list--show");
    });

    closeMenu.addEventListener("click", ()=>{
        menu.classList.remove("nav__list--show");
    });


    linkMenu.forEach((link) => {
         link.addEventListener("click", ()=>{
            menu.classList.remove("nav__list--show");
        }); 
    });

})();