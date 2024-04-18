console.log("ĐÂY là login");

import { auth } from "./firebase.js"

console.log(auth);

import{
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"


//Login method
const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', (event)=>{
    //Prevent browser's default function
    event.preventDefault()

    //Get the username/email and password value 
    const email = loginForm['email'].value.trim();
    const password = loginForm['password'].value;
    

    //Check if username/email and password is correct
    signInWithEmailAndPassword(email, password)
    .then(Credential =>{
        console.log(Credential.user);
    }).catch((error) =>{
        alert("There was an error")
    })


    //Reset form
    loginForm.reset()
})


