import { auth, db } from "./firebase.js";

import {
  deleteDoc,
  collection,
  getDocs,
  doc,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

import {
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"

const divDeleteRoomForm = document.getElementById("content");

//Xóa phòng
// onAuthStateChanged(auth, async (user)=>{
//   if (!user){
    divDeleteRoomForm.addEventListener("click", async (e) => {
      if (e.target.tagName === "BUTTON") {
        const documentId = e.target.name;
    
        const roomRef = doc(db, "accommodation", documentId);
    
        console.log(roomRef);
        await deleteDoc(roomRef)
          .then(() => {
            location.reload();
            // alert("Room deleted");
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    });
//   }
// })

