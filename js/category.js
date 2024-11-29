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
        <img class="imgDC" src=${data.recipes[i].image} alt = "" >
        <article class="article_foto_plato"><a class="plato" href="./receta.html?id=${data.recipes[i].id}">
        Plato: ${data.recipes[i].name}</a>
        <p class="dificultad" >Dificultad: ${data.recipes[i].difficulty}</p></article>
        </article>`} 
    
        category.innerHTML = categories
}})



.catch(function(error){
    console.log(error)
})

