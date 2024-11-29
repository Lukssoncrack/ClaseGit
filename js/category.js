let queryString = location.search
let queryStringObjeto = new URLSearchParams(queryString)
let detalle = queryStringObjeto.get("tags")

fetch(`https://dummyjson.com/recipes/tag/${detalle}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let category = document.querySelector(".category")
    let categories= ""
    for (let i=0; i<data.recipes.length; i++){
        if(data.recipes[i].tags.includes(detalle)){
            categories += `<article class="articleDC">

        
        <article class="article_foto_plato">
        <a class="plato" href="./receta.html?id=${data.recipes[i].id}">
         ${data.recipes[i].name}</a>

        <img class="imgDC" src=${data.recipes[i].image} alt = "" >
        <p class="dificultad" >Dificultad: ${data.recipes[i].difficulty}</p></article>
        </article>`} 
    
        category.innerHTML = categories
}})



.catch(function(error){
    console.log(error)
})

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
