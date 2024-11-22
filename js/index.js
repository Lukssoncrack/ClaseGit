

fetch('https://dummyjson.com/recipes?limit=10')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let listarecetas = document.querySelector(".listarecetas")
    let recetas =""

    for (let i = 0; i < data.recipes.length; i++){
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
    
})


.catch(function(error){
    console.log(error)
})


let mass = document.querySelector(".buttonMas")
let skip = 10

    mass.addEventListener('click', function(){
            fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                    let listarecetas = document.querySelector(".listarecetas")
                    let recetas =""

                    for (let i = 0; i < data.recipes.length; i++){
                        console.log(i)
                        recetas += `
                        <article class="fotoReceta">
                            <img  class="fotojs" src=${data.recipes[i].image} alt="">
                            <article class ="platos"><a class"platoa" href="./receta.html?id=${data.recipes[i].id}">
                            Plato: ${data.recipes[i].name}</a>
                            <p class="difcil">Nivel de dificultad: ${data.recipes[i].difficulty}</p></article>
                        </article>`;
                    }
                    listarecetas.innerHTML+=recetas
                    
                })


                .catch(function(error){
                    console.log(error)
                })

                skip = skip + 10
    })