import {
    signOut,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/10.11.0/firebase-auth.js"
import { auth } from "./firebase.js"

const loginForm = document.querySelector("#login-form")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    document.querySelector("button[type=submit]").innerText = "Sign In...";

    document
        .querySelector("button[type=submit]")
        .setAttribute("disabled", "true");

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    signInWithEmailAndPassword(
        auth,
        email,
        password,
    ).then(async (userCredential) => {
        const user = userCredential.user;
         await console.log(user);
        if (!user.emailVerified) {
            signOut(auth);
            throw { code: "Email not verified", message: "" };
        }
        location.href = "./index.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorCode);
    }).finally(() => {
        document.querySelector("button[type=submit]").innerText = "Sign In";
        document.querySelector("button[type=submit]").removeAttribute("disabled");
    });
})