const buyButton = document.querySelector('#buy')
const rentButton = document.querySelector("#rent")
const wishList = document.querySelector('#wishlist')

buyButton.addEventListener('click', ()=>{
    alert("BOUGHT")
})

rentButton.addEventListener('click', ()=>{
    alert("Ready to rent")
})

wishList.addEventListener('click', ()=>{
    alert("Added to wish list")
})