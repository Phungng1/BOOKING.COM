let divNavbar = document.getElementById("nav")

divNavbar.innerHTML += `
        <div class="logo">
            <a href="../html/home.html">BOOKING.COM</a>
        </div>
        <div class="categories">
            <div class="element">
                <a href="../html/home.html">HOME</a>
                <a href="../html/room.html" id="room">ROOM</a>
                <a href="../html/info.html">INFO</a>
            </div>
        </div>
        <div id="login-register">
                
        </div>
        
`



import { auth } from "./firebase.js"
import { 
    onAuthStateChange,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"

let divLoginRegister = document.getElementById("login-register")

onAuthStateChange(auth, (user)=>{
    if(!user){
        divLoginRegister.innerHTML += `
                <a href="../html/login.html" id="login">Login</a>
                <a href="../html/register.html" id="register">Register</a>
            `
    }else{
        divLoginRegister.innerHTML += `
                <a href="../html/user.html" id="login">User</a>
            `
    }

})


// import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"
// const auth = getAuth()
// const user = auth.currentUser

// if (user = true){
//     divLoginRegister.innerHTML += `
//     <a href="../html/user.html" id="login">User</a>
// `    
// }else{

//     divLoginRegister.innerHTML += `
//         <a href="../html/login.html" id="login">Login</a>
//         <a href="../html/register.html" id="register">Register</a>
//     `
// }


