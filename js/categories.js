
fetch('https://dummyjson.com/recipes/tags')

.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
    let categoriesrecetas = document.querySelector(".categories_recetas")
    let comidas ="";

    for(let i=0; i <data.length; i++){
        comidas +=`
        <article class= "cate">
           <a href="./category.html?tags=${data[i]}" class="categories_li">${data[i]}</a>
           </article> `;

    }
    categoriesrecetas.innerHTML = comidas;
})


.catch(function(error){
    console.log("No se pudo cargar",error);
});

