// NAVBAR 

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    burger.addEventListener('click',()=>{
    // Mostrar NAVBAR

        nav.classList.toggle('nav-active');
        
    // Animar Links    
        navLinks.forEach((link, index) =>{
                if(link.style.animation){
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.5}s`
                }
        });
    // Animar Burger 
        
        burger.classList.toggle('toggle');
    });

}

// LLAMAR A LAS APPS

const app = () => {
    navSlide();
}

app();

// CARRITO DE COMPRAS 

