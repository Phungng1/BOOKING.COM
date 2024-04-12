console.log("ĐÂY LÀ CONTROLLER");

//import cac ham den tu firebase de lap tirnh tinh nang xac thucj nguoi dung
import{
    getAuth,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
const auth = getAuth(app)

const registerForm = document.getElementById("outline");

// Bắt sự kiện khi người dùng submit form
registerForm.addEventListener("submit", (event) => {
    // Ngăn sự kiện reload mặc định của trình duyệt.
    event.preventDefault();

    const dataSignUp = {
        userName: registerForm.userName.value.trim(),
        email: registerForm.email.value.trim(),
        password: registerForm.password.value,
        confirmPassword: registerForm.confirmPassword.value,
    }

    console.log(dataSignUp);
    // gọi hàm soát lỗi đăng ký người dùng
    controller.register(dataSignUp);
    
});



const lowerCaseLetter = /[a-z]/g
const upperCaseLetter = /[A-Z]/g
const number = /[0-9]/g

// Viết các hàm soát lôi người dùng nhập vào 

const controller = {};

// Thêm phương thức () register vào trong đối tượng controller.
controller.register = (dataSignUp) => {
    // Kiểm tra xem các thẻ input có rỗng hay không?
    if(dataSignUp.firstName == ""){
        // Báo lỗi, hiển thị lỗi ở phía dưới thẻ input đó.
        document.getElementById("username-error").innerText = "*Please input your first name";
    }
    else{
        // Xóa hết nội dung trong thẻ div lỗi đó như sau:
        document.getElementById("username-error").innerText = "";
    }
    if(dataSignUp.email == ""){
        // Báo lỗi, hiển thị lỗi ở phía dưới thẻ input đó.
        document.getElementById("email-error").innerText = "*Please input your email";
    }
    else{
        // Xóa hết nội dung trong thẻ div lỗi đó như sau:
        document.getElementById("email-error").innerText = "";
    }
    if(dataSignUp.password == ""){
        // Báo lỗi, hiển thị lỗi ở phía dưới thẻ input đó.
        document.getElementById("password-error").innerText = "*Please input your password";
    }
    else{
        // Xóa hết nội dung trong thẻ div lỗi đó như sau:
        document.getElementById("password-error").innerText = "";
    }
    if(!(dataSignUp.confirmPassword == dataSignUp.password )){
        // Báo lỗi, hiển thị lỗi ở phía dưới thẻ input đó.
        document.getElementById("confirm-password-error").innerText = "*Please input your confirm password";
    }
    else{
        // Xóa hết nội dung trong thẻ div lỗi đó như sau:
        document.getElementById("confirm-password-error").innerText = "";
    }

    //DK rieng cho password gom:
    // - Pass co toi thieu 6 ky tu
    if(dataSignUp.password.length < 6){
        document.getElementById("password-error").innerHTML = "Your password must contain 6 characters"
    }else if (!dataSignUp.password.match(lowerCaseLetter)){
        document.getElementById("password-error").innerHTML = "Your password must contain a lowercase letter"
    }else if(!dataSignUp.password.match(upperCaseLetter)){
        document.getElementById("password-error").innerHTML = "Your password must contain an uppercase letter"
    }else if(!dataSignUp.password.match(number)){
        document.getElementById("password-error").innerHTML = "Your password must contain number or a special character"
    }else {
        //Thoa man het yeu cau cua password
        if(dataSignUp.userName !== ""  
        && dataSignUp.email !== "" 
        && dataSignUp.password !== "" 
        && dataSignUp.confirmPassword !== ""){
            return dataSignUp
        }
    }    
}