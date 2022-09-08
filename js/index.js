const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll('.menuItem')

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "green",
          img: "./img/jordan2.png",
        },
        {
          code: "red",
          img: "./img/jordan.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "darkgreen",
          img: "./img/hippe2.png",
        },
      ],
    },
  ];


let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors= document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index) => {
    item.addEventListener('click', () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        chosenProduct = products[index]

        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = "$" + chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img

        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    })
})

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = chosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach((size, index) => {
            size.style.backgroundColor="white"
            size.style.color = "black"
        })
        size.style.backgroundColor="black"
        size.style.color = "white"
    })
})

const purchaseButton = document.querySelector(".productButton")
const paymentModal = document.querySelector('.payment')
const closeModal = document.querySelector(".close")


purchaseButton.addEventListener('click', ()=> {
    paymentModal.style.display = "flex"

})

closeModal.addEventListener('click', ()=> {
    paymentModal.style.display = "none"
})