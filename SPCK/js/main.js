let divNavbar = document.getElementById("nav")

divNavbar.innerHTML += `
        <div class="logo">
            <a href="../html/home.html">BOOKACC</a>
        </div>
        <div class="categories">
            <div class="element">
                <a href="../html/home.html">HOME</a>
                <a href="../html/room.html" id="room">ROOM</a>
                <a href="">INFO</a>
            </div>
        </div>
        <div id="login-register">
                
        </div>
        
`

let divLoginRegister = document.getElementById("login-register")


divLoginRegister.innerHTML += `
    <a href="../html/login.html" id="login">Login</a>
    <a href="../html/register.html" id="register">Register</a>
`

let divFooter = document.getElementsByTagName("footer")
 
divFooter += `
<h1>BOOKACC</h1>
`