let getHotel = JSON.parse(localStorage.getItem("hotel"))
console.log("ĐÂY LÀ ALLROOM");
const divContent = document.getElementById("content")

for (let key of getHotel){

      divContent.innerHTML += `
      
      <a href="${"../room/" + key.address}" class="box">
                  <img src=${"../img/trending/" + key.image} alt="Not found">
                  <figcaption>
                    <h3>${key.title}</h3>
                    <span><i class="fa-solid fa-location-dot"></i>${key.location}</span>
                  </figcaption>
              </figure>    
      `
}