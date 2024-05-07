//Logout method
import { auth } from "./firebase.js"

import {
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"

import {
    signOut,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"

const signOutButton = document.querySelector("#logout-button")

signOutButton.addEventListener("click", (e) => {
    signOut(auth)
        .then(
            location.href = "../html/home.html"
        ).catch((error) => {
            errorCode = error.code;
            errorMessage = error.message;
            alert(errorCode, errorMessage)

        })
})

onAuthStateChanged(auth, (user) => {
    console.log(user);

    if(user){
        document.getElementById("user-email").innerHTML += `
            <p>${user.email}</p>
        `
        const signUp = new Date(user.metadata.creationTime)
        const signUpYear = signUp.getFullYear().toString()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const signUpMonth = months[signUp.getMonth()]
        const signUpDate = signUp.getDate().toString()
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const signUpDay = days[signUp.getDay()]
    
        
        document.getElementById("sign-up-date").innerHTML += `
            <p>${signUpDay + " " + signUpMonth + " " + signUpDate + " " + signUpYear}</p>
        `

        document.getElementById("title").innerHTML +=`
            <h1>profile</h1>
        `
    }else{
        const divContent = document.getElementById("content")
        divContent.style.display = "none"

        document.getElementById("title").innerHTML +=`
            <h1>you are not signed in</h1>
        `
    }


})
