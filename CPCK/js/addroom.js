import { auth, db } from "./firebase.js"
import {
    onSnapshot,
    collection,
    deleteDoc,
    increment,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    addDoc,
  } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"

const divAddRoomForm = document.getElementById("addroom-form");



//Thêm phòng 
const addRoom = async (title, location, image)=>{
    await addDoc(collection(db, "accommodation"), {
        title,
        location,
        image
    })
    divAddRoomForm.reset()
};

divAddRoomForm.addEventListener("submit", (e)=>{
  e.preventDefault()

  const title = divAddRoomForm.title.value.trim();
  const location = divAddRoomForm.location.value.trim();
  const image = divAddRoomForm.image.value;

  if(title !== "" && location !== "" && image !== ""){
        addRoom(title, location, image)
        alert("Room added")
        window.open('../html/room.html') 
    }
   
})

//Xóa phòng
const deleteRoom = (id)=>{
    const roomRef = doc(db, "accommodation", id);

    deleteDoc(roomRef)
    .then(
        alert("Room deleted")
    ).catch((error)=>{
        alert(error.message)
    })
}


