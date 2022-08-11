if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){

    let removeCartItemButtons = document.getElementsByClassName('btn-remove');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
         let button = removeCartItemButtons[i]
         button.addEventListener('click', removeCartItem)     
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButtons = document.getElementsByClassName('addToCart')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('buy')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}


function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1

    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let price = shopItem.getElementsByClassName('addToCart')[0].innerHTML.replace('- Buy Now','')
    let imageSrc = shopItem.getElementsByClassName('Baki-Merch')[0].src
    addItemToCart(price, imageSrc)
    updateCartTotal()
}

function addItemToCart(price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-price')
    for (let i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerHTML == price) {
            alert('This item is already added to the cart')
            return
        }
    }
    let cartRowContents = `
        <img class="item-icon" src="${imageSrc}" alt="Remera baki" >
        <span class="cart-price">${price}</span>
        <div>                                
            <input class="cart-quantity-input" type="number" value="1" >
            <button class="btn-remove" type="button">REMOVE</button>
        </div>
        `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerHTML.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100 
    document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total 
}
    











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
// CARRITO DE COMPRAS 


















































// LLAMAR A LAS APPS

const app = () => {
    navSlide();
}

app();



