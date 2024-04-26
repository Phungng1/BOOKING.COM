const buyButton = document.querySelector('#buy')
const rentButton = document.querySelector("#rent")
const wishList = document.querySelector('#wishlist')

buyButton.addEventListener('click', ()=>{
    location.href = "../buy.html"
})

rentButton.addEventListener('click', ()=>{
    location.href = "../rent.html"
})

wishList.addEventListener('click', ()=>{
    alert("Added to wish list")
})