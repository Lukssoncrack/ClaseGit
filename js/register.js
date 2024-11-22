let formulario = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let errorEmail = document.querySelector(".invalid-feedback.email");
let errorPassword = document.querySelector(".invalid-feedback.password");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); 

    let esValido = true; 


    if (email.value === "") { 
        errorEmail.innerHTML = "Por favor complete el campo email"; 
        esValido = false; 
    } else {
        errorEmail.innerHTML = ""; 
    }


    if (password.value === "") { 
        errorPassword.innerHTML = "Por favor complete el campo contraseña"; 
        esValido = false; 
    } else {
        errorPassword.innerHTML = "";
    }

    if (esValido) {
        formulario.submit(); 
    }
}); 
