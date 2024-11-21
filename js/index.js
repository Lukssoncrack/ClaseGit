

fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let listarecetas = document.querySelector(".listarecetas")
    let recetas =""

    for (let i = 0; i < 10; i++){
        console.log(i)
        recetas += `
          <article class="fotoReceta">
            <img  class="fotojs" src=${data.recipes[i].image} alt="">
            <article class ="platos"><a class"platoa" href="./receta.html?id=${data.recipes[i].id}">
            Plato: ${data.recipes[i].name}</a>
            <p class="difcil">Nivel de dificultad: ${data.recipes[i].difficulty}</p></article>
          </article>`;
    }
    listarecetas.innerHTML=recetas

    let mass = document.querySelector(".buttonMas")
    mass.addEventListener('click', function(){
        for(let i=10;i<20;i++){
            recetas += `<article class="fotoReceta">
            <img class="fotojs" src=${data.recipes[i].image} alt="" ><div>
            <a class="platoa" href="./receta.html?id=${data.recipes[i].id}">
            Plato: ${data.recipes[i].name}</a>
             <p class="difcil">Nivel de dificultad: ${data.recipes[i].difficulty}</p></div>
          </article>`;
          listarecetas.innerHTML=recetas
        } 
    })
    
})


.catch(function(error){
    console.log(error)
})
