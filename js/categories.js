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