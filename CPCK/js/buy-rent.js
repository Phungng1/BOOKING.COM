const buyButton = document.querySelector('#buy')
const rentButton = document.querySelector("#rent")
const wishList = document.querySelector('#wishlist')

buyButton.addEventListener('click', ()=>{
    window.open("../html/buy.html")
})

rentButton.addEventListener('click', ()=>{
    location.href = "../html/rent.html"
})

wishList.addEventListener('click', ()=>{
    alert("Added to wish list")
})