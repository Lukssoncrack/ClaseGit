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
    for (let i=0;i<recetas.length; i++){

        containerRecetas.innerHTML += ` <article class ="recetas">
    
        <h3 class="buscar-nombre"> ${recetas[i].name} </h3>

         <img class="buscar-foto" alt="" src=${recetas[i].image} /> 

         <p class="buscas-receta"> Dificultad:  ${recetas[i].difficulty} </p>

            <a  class= "detalles"   href="receta.html?id=${recetas[i].id}"> Ver detalles </a>
           
            </article>`
        }
})
.catch(function(error){

    console.log("Error cargando recetas", error)
});