let getHotel = JSON.parse(localStorage.getItem("hotel"))

const divTrending = document.getElementById("place")

for (let key of getHotel){
    if(key.trending == "yes"){

      divTrending.innerHTML += `
      
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

// const divFiveStars = document.getElementById("fiveStars")

// for (let key of getHotel){
//   if (key.rating > 4.5){
//     divFiveStars.innerHTML +=`
//     <figure class="box">
//                   <img src=${"../img/trending/" + key.image} alt="Not found">
//                   <figcaption>
//                     <h3>${key.title}</h3>
//                     <span><i class="fa-solid fa-location-dot"></i>${key.location}</span>
//                   </figcaption>
//               </figure>    
//     `
//   }
// }



