
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');


fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        const receta = data.recipes.find(item => item.id == recipeId);
        if (receta) {
        
            document.getElementById('receta-titulo').textContent = receta.title;
            document.getElementById('receta-imagen').src = receta.thumbnail;
            document.getElementById('receta-instrucciones').textContent = receta.instructions;
            document.getElementById('receta-tiempo').textContent = `Tiempo de cocción: ${receta.cookingTime} minutos`;
            
           
            const categoriasContainer = document.getElementById('receta-categorias');
            receta.categories.forEach(categoria => {
                categoriasContainer.innerHTML += `<a href="categories.html?category=${categoria}">${categoria}</a> `;
            });
        }
    })
    .catch(error => {
        console.log('Error al cargar la receta', error);
    });


      
