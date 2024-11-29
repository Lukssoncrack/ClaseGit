let formulario = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let errorEmail = document.querySelector(".invalid-feedback.email");
let errorPassword = document.querySelector(".invalid-feedback.password");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); 

    let esValido = true; 


    if (email.value === "") { 
        alert("Por favor complete el campo email"); 
        errorEmail.innerHTML = "Por favor complete el campo email"; 
        esValido = false; 
    } else {
        errorEmail.innerHTML = ""; 
    }


    if (password.value === "") { 
        alert("Por favor complete el campo contraseña"); 
        errorPassword.innerHTML = "Por favor complete el campo contraseña"; 
        esValido = false; 
    } else {
        errorPassword.innerHTML = "";
    }

    if (esValido) {
        formulario.submit(); 
    }
}); 
let input = document.querySelector('.input-buscador')
     
    let form = document.querySelector('.formulario-busqueda')
 
    form.addEventListener("submit", function (evento) {
        evento.preventDefault(); 
    
    if ( input.value.length < 3) { 
            alert("Por favor ponga mas de 3 letras "); 
    
        } else {
            this.submit()
        }
    })