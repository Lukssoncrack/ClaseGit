let queryString = location.search;

let queryStringObjeto = new URLSearchParams(queryString);

let extraer = queryStringObjeto.get('query'); 

let containerRecetas = document.querySelector('.seccion_detalles')

    fetch(`https://dummyjson.com/recipes/search?q=${extraer}`)

        .then(function (response) {
            return response.json();
        }) 


.then (function(data){
    console.log(data)
    let recetas = data.recipes
    if(recetas.length ==0){
        containerRecetas.innerHTML += `<h1 class"nose"> No se ha encontrado ninguna receta </h1>` 
    }


    else{


    for (let i=0;i<recetas.length; i++){

     containerRecetas.innerHTML += ` <article class ="recetas">
    
        <h3 class="buscar-nombre"> ${recetas[i].name} </h3>

         <img class="buscar-foto" alt="" src=${recetas[i].image} /> 

         <p class="buscas-receta"> Dificultad:  ${recetas[i].difficulty} </p>

            <a  class= "detalles"   href="receta.html?id=${recetas[i].id}"> Ver detalles </a>
           
            </article>`
        }}
        
})
.catch(function(error){
console.log("Error cargando recetas", error)
});



let input = document.querySelector('.input-buscador')
     
    let formulario = document.querySelector('.formulario-busqueda')
 
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault(); 
    
    if ( input.value.length < 3) { 
            alert("Por favor ponga mas de 3 letras "); 
    
        } else {
            this.submit()
        }
    })