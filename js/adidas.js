let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

cartIcon.onclick = () => {
    cart.classList.add('active')
}

closeCart.onclick = () => {
    cart.classList.remove('active')
}

// Appending inventory to document 
let inventory = [
    {
        picURL:'img/adidas_img/product1.jpg',
        title: 'Aeroready Shirt',
        price:25
    },
    {
        picURL:'img/adidas_img/product2.jpg',
        title: 'Wireless Earbuds',
        price:60.23
    },
    {
        picURL:'img/adidas_img/product3.jpg',
        title: 'Hooded Parka',
        price:50
    },
    {
        picURL:'img/adidas_img/product4.jpg',
        title: 'Straw Metal Bottle',
        price:20
    },
    {
        picURL:'img/adidas_img/product5.jpg',
        title: 'Metal Sunglasses',
        price:80
    },
    {   
        picURL:'img/adidas_img/product6.jpg',
        title: 'Black Hat',
        price:15
    },
    {
        picURL:'img/adidas_img/product7.jpg',
        title: 'Backpack',
        price:30
    },
    {
        picURL:'img/adidas_img/product8.jpg',
        title: 'Ultraboost 22',
        price:120

    }
]

let shop_content = document.getElementsByClassName('shop-content')[0]

for (let item of inventory) {
    let product_box = document.createElement('div')
    product_box.classList.add('product-box')
    product_box.innerHTML = `
        <img src="${item.picURL}" alt="picture of item" class="product-img">
        <h2 class="product-title">${item.title}</h2>
        <span class="price">$${item.price}</span>
        <i class='bx bx-cart-add add-cart' id="cart-icon"></i>
    `
    shop_content.appendChild(product_box)
}


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready () {
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++) {
        removeCartButtons[i].addEventListener('click', removeCartItem)
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) { 
        quantityInputs[i].addEventListener('change', quantityChanged)
    }
    //Adding items to cart
    var addCart = document.getElementsByClassName('add-cart')
    for(var i = 0; i < addCart.length; i++) { 
        addCart[i].addEventListener('click', addCartClicked)
    }

    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)
}

function addCartClicked(event) {
    var button = event.target
    var shopProducts = button.parentElement
    console.log(shopProducts, button)
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText
    var price = shopProducts.getElementsByClassName('price')[0].innerText
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src
    console.log(title,price)
    addProductToCart(title,price,productImg)
    updateTotal()
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for (var i = 0; i < cartItemsNames.length; i++) { 
        if(cartItemsNames[i].innerText == title) {
            alert('You have already added this item to cart')
            return;
        }
    }
    var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <i class='bx bxs-trash-alt cart-remove' ></i>
    `
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)

}



function quantityChanged(event) {
    var input = event.target
    console.log(input)
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal();
}

let removeCartItem = (event) => {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal();
}

function updateTotal() {
    var cartBoxes = document.getElementsByClassName('cart-box')
    var total = 0;
     for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value
        total = total + price * quantity
     }
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
      
}

function buyButtonClicked() {
    alert('Your order is placed')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild)
    } 
    updateTotal()
}


