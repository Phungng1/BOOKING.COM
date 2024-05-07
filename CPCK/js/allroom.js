import { auth, db } from "./firebase.js"
import {
  onSnapshot,
  collection,
  deleteDoc,
  increment,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"

const divContent = document.getElementById("content")

onSnapshot(collection(db, 'accommodation'), (snapshot) => {
  snapshot.forEach((doc) => {
    const places = doc.data()
    divContent.innerHTML += `
      <div>  
        <a href="../room/jade.html" class="box">
          <img src=${"../img/trending/" + places.image} alt="Not found">
          <figcaption>
            <h3>${places.title}</h3>
            <span><i class="fa-solid fa-location-dot"></i>${places.location}</span>
          </figcaption>
        </a>  
        <button id="detele">Delete</button>
      </div>
      `
  });
})

import {
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"

onAuthStateChanged(auth, (user) => {
  const divAddRoom = document.getElementById("add-room");
  if (!user) {
    divAddRoom.innerHTML += ``
  } else {
    divAddRoom.innerHTML += `
        <a href="../html/addroom.html">+ Add</a>  
      `
  }
})



