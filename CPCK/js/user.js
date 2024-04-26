

// import { 
//     signOut,
// } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"

// const logoutButton = document.querySelector('#logout-button')

// logoutButton.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     auth.signOut().then(()=>{
//         alert("User signed out")

//     }).catch((error)=>{
//         alert("There was an error", error)
//     })
// })

import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"
const auth = getAuth()
const user = auth.currentUser
