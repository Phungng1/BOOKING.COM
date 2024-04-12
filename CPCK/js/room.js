let getHotel = JSON.parse(localStorage.getItem("hotel"))

const divHanoi = document.getElementById("Hanoi")
const divSaiGon = document.getElementById("SaiGon")
const divDaNang = document.getElementById("DaNang")
const divNhaTrang = document.getElementById("NhaTrang")
const divHoiAn = document.getElementById("HoiAn")

for (let key of getHotel){
    if(key.location == "Hanoi"){
        divHanoi.innerHTML +=  `
        <figure class="box">
                  <img src=${"../img/trending/" + key.image} alt="Not found">
                  <figcaption>
                    <h3>${key.title}</h3>
                    <span><i class="fa-solid fa-location-dot"></i>${key.location}</span>
                  </figcaption>
              </figure> 
        `
    }else if(key.location == "Ho Chi Minh City"){
        divSaiGon.innerHTML +=  `
        <figure class="box">
                  <img src=${"../img/trending/" + key.image} alt="Not found">
                  <figcaption>
                    <h3>${key.title}</h3>
                    <span><i class="fa-solid fa-location-dot"></i>${key.location}</span>
                  </figcaption>
              </figure> 
        `
    }    else if(key.location == "Da Nang"){
        divDaNang.innerHTML +=  `
        <figure class="box">
                  <img src=${"../img/trending/" + key.image} alt="Not found">
                  <figcaption>
                    <h3>${key.title}</h3>
                    <span><i class="fa-solid fa-location-dot"></i>${key.location}</span>
                  </figcaption>
              </figure> 
        `
    }
    else if(key.location == "Hoi An"){
        divHoiAn.innerHTML +=  `
        <figure class="box">
                  <img src=${"../img/trending/" + key.image} alt="Not found">
                  <figcaption>
                    <h3>${key.title}</h3>
                    <span><i class="fa-solid fa-location-dot"></i>${key.location}</span>
                  </figcaption>
              </figure> 
        `
    }
    else if(key.location == "Nha Trang"){
        divNhaTrang.innerHTML +=  `
        <figure class="box">
                  <img src=${"../img/trending/" + key.image} alt="Not found">
                  <figcaption>
                    <h3>${key.title}</h3>
                    <span><i class="fa-solid fa-location-dot"></i>${key.location}</span>
                  </figcaption>
              </figure> 
        `
    }
}